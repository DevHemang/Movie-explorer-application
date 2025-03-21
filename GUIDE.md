# Movie Explorer - Complete Guide for Beginners

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Step-by-Step Guide](#step-by-step-guide)
5. [Code Explanation](#code-explanation)
6. [Customization Guide](#customization-guide)

## Introduction
This is a simple movie database application that shows movies from TMDB (The Movie Database). You don't need to know everything about JavaScript or Next.js to start - we'll learn as we go!

## Getting Started

### What You Need (Prerequisites):
1. Install Node.js from: https://nodejs.org (Download the LTS version)
2. Get a code editor like Visual Studio Code
3. Get a TMDB API key from: https://www.themoviedb.org/settings/api

### Setting Up Your Project:

1. Create a new folder for your project:
```bash
mkdir movie-explorer-db
cd movie-explorer-db
```

2. Start a new Next.js project:
```bash
npx create-next-app@latest .
```

3. Install required packages:
```bash
npm install axios react-icons
```

## Project Structure
```
movie-explorer-db/
├── src/
│   ├── components/    # Reusable parts like MovieCard
│   ├── pages/        # Your app's pages
│   ├── styles/       # CSS files
│   └── utils/        # Helper functions
└── public/           # Images and other files
```

## Step-by-Step Guide

### 1. Setting Up TMDB API
- Get your API key from TMDB
- We use this key to fetch movie data

### 2. Creating Basic Pages
- Home page: Shows movie list
- Movie details page: Shows info about one movie
- Each page is a separate file in the pages folder

### 3. Components We Need
- MovieCard: Shows one movie
- MovieGrid: Shows all movies in a grid
- SearchBar: Lets users search movies
- Header: Top navigation bar

### 4. Styling Your App
- We use regular CSS (easier to understand)
- Each component has its own styles
- Mobile-friendly design included

## Code Explanation

### 1. API Setup (src/utils/api.js)
```javascript
// This file handles all movie data
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'your_api_key_here'
  }
});
```

### 2. Movie Card (src/components/MovieCard.js)
```javascript
// This shows one movie
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} />
      <h3>{movie.title}</h3>
    </div>
  );
};
```

### 3. Home Page (src/pages/index.js)
```javascript
// This is your main page
export default function Home() {
  const [movies, setMovies] = useState([]);

  // Get movies when page loads
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MovieGrid movies={movies} />
    </div>
  );
}
```

## Customization Guide

### 1. Changing Colors
In `src/styles/globals.css`:
```css
/* Change these values for different colors */
:root {
  --primary-color: #007bff;
  --background-color: #f5f5f5;
  --text-color: #333;
}
```

### 2. Changing Card Size
In `src/styles/globals.css`:
```css
.movie-card {
  /* Change these values for different sizes */
  width: 250px;
  height: 400px;
}
```

### 3. Adding New Features
1. Want to add favorites?
   - Add a heart button to MovieCard
   - Use localStorage to save favorites

2. Want to add categories?
   - Add a category filter component
   - Use TMDB genre API

## Common Issues and Solutions

1. Images not loading?
   - Check your next.config.js
   - Make sure image URL is correct

2. API not working?
   - Check your API key
   - Check your internet connection

3. Styling issues?
   - Check browser console for errors
   - Make sure CSS classes match

## Next Steps
1. Try adding new features
2. Customize the design
3. Add user authentication
4. Deploy your app

Need help? Feel free to:
1. Check the TMDB API docs
2. Look at the Next.js documentation
3. Ask questions on Stack Overflow

Remember: Start small, test often, and have fun building! 