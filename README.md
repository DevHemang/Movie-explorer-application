# Movie Explorer

A modern, responsive movie discovery platform built with Next.js and TMDB API. Browse popular movies, search for specific titles, and filter by genres.

## Features

- Browse popular movies with infinite scroll
- Search movies by title
- Filter movies by genre
- Responsive design for all devices
- Movie details page with comprehensive information
- Fast image loading with Next.js Image optimization
- Server-side rendering for better performance

## Tech Stack

- Next.js 14
- React 18
- TMDB API
- CSS Modules
- Axios
- React Icons

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Production Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add your TMDB API key to the environment variables in Vercel
4. Deploy!

### Manual Production Build

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Performance Optimizations

- Image optimization using Next.js Image component
- Lazy loading of images and components
- Debounced search functionality
- Efficient pagination with cursor-based navigation
- Hardware-accelerated animations
- Optimized API calls with proper error handling
- CSS Modules for scoped styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for their excellent API
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
