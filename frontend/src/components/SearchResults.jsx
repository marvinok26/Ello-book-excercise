// src/components/SearchResults.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../index.css'; // Import the CSS file

const SearchResults = ({ searchQuery, addToReadingList }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container spacing={3}>
      {filteredBooks.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.title}>
          <Card className="card">
            <CardMedia
              component="img"
              height="140"
              image={book.coverPhotoURL}
              alt={book.title}
            />
            <CardContent className="card-content">
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                by {book.author}
              </Typography>
              <Button variant="contained" color="primary" className="button" onClick={() => addToReadingList(book)}>
                Add to Reading List
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResults;
