// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Box, List, ListItem, ListItemText, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';

const SearchBar = ({ books, addToReadingList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter books based on the search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="search-bar">
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <Box className="dropdown">
          <List>
            {filteredBooks.map((book, index) => (
              <ListItem key={index}>
                <Card className="book-card">
                  <CardMedia
                    component="img"
                    alt={book.title}
                    className="book-image"
                    image={require(`../assets/image${(index % 10) + 1}.webp`)}
                    title={book.title}
                  />
                  <CardContent>
                    <ListItemText
                      primary={book.title}
                      secondary={`by ${book.author}`}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => addToReadingList(book)}
                    >
                      Add
                    </Button>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
