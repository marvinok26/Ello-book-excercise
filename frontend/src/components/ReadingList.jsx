// src/components/ReadingList.js
import React from 'react';
import { List, ListItem, ListItemText, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import '../index.css'; // Import the CSS file

const ReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <Grid container spacing={4}>
      {readingList.map((book, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
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
              <Button variant="contained" color="secondary" onClick={() => removeFromReadingList(book.title)}>
                Remove from Reading List
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
