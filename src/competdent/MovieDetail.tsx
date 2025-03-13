import React, { useEffect, useState } from 'react'
import HeaderClinet from './Layout/clinet/header'
import FooterClinet from './Layout/clinet/footer'
import { useParams } from 'react-router-dom'


    import { Ifrom, Imove } from '../interface/interface'
import axios from 'axios'
import MainDEtel from './Layout/clinet/Detel'

const MovieDetail = () => {
//     const { id } = useParams<{ id: string }>()
// //   const [categories, setCategories] = useState<any[]>([]) // To store categories
 
//   const [movie, setMovie] = useState<Ifrom | null>(null)

//   // Fetch categories from the API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:3000/movies/${id}`)
//         setMovie(data)
//       } catch (error) {
//         console.error('Error fetching sp:', error)
//       }
//     }
//     fetchCategories();
//   }, [id])
  return (
    <div >
      <HeaderClinet />
      <MainDEtel /> 
  

      <FooterClinet />

    </div>
  )
}

export default MovieDetail
