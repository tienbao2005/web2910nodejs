import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'


    // import { Ifrom, Imove } from '../interface/interface'
import axios from 'axios'
import { Ifrom } from '../../../interface/interface'

const MainDEtel = () => {
    const { id } = useParams<{ id: string }>()
//   const [categories, setCategories] = useState<any[]>([]) // To store categories
 
  const [movie, setMovie] = useState<Ifrom | null>(null)

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/movies/${id}`)
        setMovie(data)
      } catch (error) {
        console.error('Error fetching sp:', error)
      }
    }
    fetchCategories();
  }, [id])
  return (
    <div >
      
        
      <main>
      
  <section className="movie-detail">
    
  <h3 className='mt-10 ml-20'>Tên Phim: {movie?.namemove}</h3>

    {/* Video nhúng */}
    <div className=" mt-10 ml-10 video-container">
      <iframe
        width="95%"
        height="700px"
        src={movie?.linkvideo}
        title="Trailer Phim"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>

    {/* Thông tin phim */}
    <div className="movie-info mt-10">
      
      <p>
        <strong className='ml-20'>Thể loại:{movie?.categorys}</strong> 
      </p>
      <br />
      <p>
        <strong className='ml-20'>Mô tả:{movie?.describe}</strong>
      </p>
     
    </div>
  </section>
</main>

     

    </div>
  )
}

export default MainDEtel
