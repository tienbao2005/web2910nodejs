import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Movie = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies-hot/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="w-64 h-96 object-cover rounded-lg shadow-md mb-4" />
      <p className="text-lg">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
