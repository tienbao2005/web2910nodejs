import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Imove } from '../../../interface/interface'



const MainClinet = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState<Imove[]>([])

  // Lấy danh sách các sản phẩm từ API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/movies')
        setMovies(data)
      } catch (error) {
        console.error('Có lỗi khi lấy dữ liệu:', error)
      }
    }

    fetchMovies()
  }, [])
  const goToMovieDetail = (id: number|string) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div>
        <main>
        {/* Video nổi bật */}
        <section className="featured-video">
          <h2 className='mt-3 mb-3'>Trailer Phim Hot</h2>
          <iframe
              width="1300"
              height="700"
              src="https://www.youtube.com/embed/MAf_qQUnAFc?start=2"
              // title="YouTube video player"
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowFullScreen
            ></iframe>
        </section>

        {/* Phim Hot Hôm Nay */}
        <section className="movies-hot">
          <h2>Phim Hot Hôm Nay</h2>
          <div className="movies">

          {movies.map((movie,index)=> index < 5 ? (
               <div className="movie" onClick={() => goToMovieDetail(movie.id)}>
               <img src={movie.image} alt="Phim Hot 1"  className="w-50 h-60 object-cover rounded-lg shadow-md mb-4" />
               <h5 className="text-white">{movie.namemove}</h5>
             </div>
            ) : null
            )}
           
   
          </div>
        </section>

        {/* Danh sách phim phổ biến */}
        <section className="hot-movies">
          <h3>Phim Phổ Biến</h3>
          <div className="movies" id="popular-movies">
          {movies.map((movie,index)=>  (
               <div className="movie" onClick={() => goToMovieDetail(movie.id)}>
               <img src={movie.image} alt="Phim Hot 1"  className="w-50 h-60 object-cover rounded-lg shadow-md mb-4" />
               <h5 className="text-white">{movie.namemove}</h5>
             </div>
            ) 
            )}
        
          </div>
          <button className="btn-load-more" id="loadMore">Xem Thêm</button>
        </section>
      </main>
    </div>
  )
}

export default MainClinet
