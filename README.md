#                                              Ello Book Excercise
# Table of Contents

-Project Description
-Setup
-Step 1: Setup the Project
-Step 2: GraphQL Setup
-Step 3: Component Structure
-Usage

# Project Description
Ello Book Assignment is a web application built with React and GraphQL. It allows users, especially teachers to browse a collection of books, add them to their reading list, and view their reading list.

# Setup
## Step 1: Setup the Project
Initialize the React project:
bash
code
npx create-react-app frontend
cd frontend
npm install @apollo/client graphql @mui/material @emotion/react @emotion/styled

## Set up file structure:
code
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ReadingList.jsx
│   │   ├── ReadingListPage.jsx
│   ├── App.js
│   ├── index.js
├── package.json
├── ...

## Step 2: GraphQL Setup
Set up Apollo Client:
Define GraphQL Query:

## Component Structure
The Ello Book Assignment application consists of the following components:

1. App: The main component that serves as the entry point to the application. It handles routing and state management.

2. ReadingListPage: A component responsible for displaying the user's reading list. It receives the reading list as a prop and allows users to remove books from the list.

3. ReadingList: This component represents an individual book in the reading list. It displays the book's title, author, and an option to remove it from the list.

4. BookListContainer: This component contains the grid layout for displaying the list of books. It maps over the filtered books and renders the BookCard component for each book.

5. BookCard: Represents an individual book card displayed in the book list. It contains the book's image, title, author, and an option to add the book to the reading list.

# Usage
To use the Ello Book Assignment application, follow these steps:

Browse Books: Upon opening the application, you'll be presented with a collection of books. Scroll through the list to view available titles.

Search Books: Utilize the search bar located at the top of the main page to search for specific books by title or author. Simply type your query into the search bar, and the list of books will be filtered accordingly.

View Book Details: Click on any book card to view more details about the selected book, including its cover image, title, author, and other relevant information.

Add to Reading List: To add a book to your reading list, click the "Add to Reading List" button on the book card. The button will be disabled if the book is already in your reading list.

View Reading List: Click on the "Reading List" button in the header to navigate to your reading list page. Here, you can view all the books you've added to your reading list and remove any books you no longer wish to include.

Back to Home: While on the reading list page, you can return to the main page by clicking the "Back to Home" button in the header.
