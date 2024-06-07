import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia, TextField, Autocomplete } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from './graphql/queries';
import ReadingListPage from './components/ReadingListPage';
import './index.css';

const App = () => {
  const [readingList, setReadingList] = useState([]);
  const [addedToReadingList, setAddedToReadingList] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const { loading, error, data } = useQuery(GET_BOOKS);

  const addToReadingList = (book) => {
    if (!readingList.some((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
      setAddedToReadingList({ ...addedToReadingList, [book.title]: true });
    }
  };

  const removeFromReadingList = (title) => {
    setReadingList(readingList.filter((book) => book.title !== title));
    setAddedToReadingList({ ...addedToReadingList, [title]: false });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSearchChange = (event, value) => {
    setSearchValue(value || ''); // Ensure value is not null
  };

  const filteredBooks = data.books.filter(book =>
    typeof searchValue === 'string' && searchValue.trim() !== '' ? book.title.toLowerCase().includes(searchValue.toLowerCase()) : true
  );

  console.log('Search Value:', searchValue);
  console.log('Filtered Books:', filteredBooks);

  const getOptionLabel = (option) => option ? option.title : '';

  return (
    <Container className="container">
      <Box className="header">
        <Typography variant="h3" component="h1" gutterBottom>
          Ello Books
        </Typography>
        <Routes>
          <Route path="/" element={<Button variant="contained" color="primary" component={Link} to="/reading-list">Reading List</Button>} />
          <Route path="/reading-list" element={<Button variant="contained" color="primary" component={Link} to="/">Back to Home</Button>} />
        </Routes>
      </Box>

      {/* Render search bar only on the main component */}
      {location.pathname === '/' && (
        <Box className="search-bar">
          <Autocomplete
            value={searchValue}
            onChange={handleSearchChange}
            options={filteredBooks}
            getOptionLabel={(option) => getOptionLabel(option)}
            renderOption={(props, option) => (
              <Grid container alignItems="center">
                <Grid item>
                  <CardMedia
                    component="img"
                    alt={option.title}
                    className="book-image"
                    image={require(`./assets/image${(filteredBooks.indexOf(option) % 10) + 1}.webp`)}
                    title={option.title}
                    style={{ height: '100px' }} // Adjust the height as needed
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="body1">{option.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{option.author}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addToReadingList(option)}
                    disabled={addedToReadingList[option.title]}
                  >
                    {addedToReadingList[option.title] ? 'Added to Reading List' : 'Add'}
                  </Button>
                </Grid>
              </Grid>
            )}
            renderInput={(params) => <TextField {...params} label="Search Books" variant="outlined" />}
          />
        </Box>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Box className="book-list-container">
              <Grid container spacing={4}>
                {filteredBooks.map((book, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className="book-card">
                      <CardMedia
                        component="img"
                        alt={book.title}
                        className="book-image"
                        image={require(`./assets/image${(index % 10) + 1}.webp`)}
                        title={book.title}
                      />
                      <CardContent>
                        <Typography variant="h6" component="h2">
                          {book.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {book.author}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => addToReadingList(book)}
                          disabled={addedToReadingList[book.title]}
                        >
                          {addedToReadingList[book.title] ? 'Added to Reading List' : 'Add to Reading List'}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
        />
        <Route
          path="/reading-list"
          element={<ReadingListPage readingList={readingList} removeFromReadingList={removeFromReadingList} />}
        />
      </Routes>
      
    </Container>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
