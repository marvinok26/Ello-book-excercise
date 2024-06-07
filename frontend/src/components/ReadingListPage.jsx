// src/components/ReadingListPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const ReadingListPage = ({ readingList, removeFromReadingList }) => {
  return (
    <Container className="container">
      <Typography variant="h4" component="h2" gutterBottom>
        Your Reading List
      </Typography>
      {readingList.length === 0 ? (
        <Typography variant="body1" component="p">
          Reading list is empty.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {readingList.map((book, index) => (
            <Grid item key={book.title} xs={12} sm={6} md={4}>
              <Card className="book-card">
                <CardMedia
                  component="img"
                  alt={book.title}
                  className="book-image"
                  image={require(`../assets/image${(index % 10) + 1}.webp`)}
                  title={book.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {book.author}
                  </Typography>
                  <Button variant="contained" color="secondary" onClick={() => removeFromReadingList(book.title)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ReadingListPage;
