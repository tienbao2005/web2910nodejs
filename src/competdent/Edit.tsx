import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Ifrom } from '../interface/interface'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Ifrom>()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [categories, setCategories] = useState<any[]>([]) // To store categories
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [movie, setMovie] = useState<Ifrom | null>(null)

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/categorys')
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    // Fetch movie if editing
    const fetchMovie = async () => {
      if (id) {
        try {
          const { data } = await axios.get(`http://localhost:3000/movies/${id}`)
          setMovie(data)
          // Set form values with the existing movie data
          setValue('namemove', data.namemove)
          setValue('describe', data.describe)
          setValue('image', data.image)
          setValue('linkvideo', data.linkvideo)
          setValue('view', data.view)
          setValue('categorys', data.categorys)
        } catch (error) {
          console.error('Error fetching movie details:', error)
        }
      }
    }

    fetchCategories()
    fetchMovie()
  }, [id, setValue])

  const onSubmit = async (movieData: Ifrom) => {
    setIsSubmitting(true)
    try {
      // Update existing movie
      await axios.put(`http://localhost:3000/movies/${id}`, movieData)
      alert("Bạn Đã Cập Nhật Phim Thành Công")
      navigate(`/dashboard/list`)
    } catch (error) {
      alert('Có lỗi khi cập nhật phim')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap gap-6 mt-8 w-full h-screen max-w-none mx-auto p-10 bg-gradient-to-r from-teal-600 to-teal-500 rounded-none shadow-xl'>
      <h2 className='text-4xl font-extrabold text-center text-white mb-8 w-full'>Chỉnh Sửa Sản Phẩm</h2>

      {/* Tên Phim */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <input
          {...register("namemove", { required: "Tên Phim là bắt buộc" })}
          type='text'
          placeholder='Tên Phim'
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        />
        {errors.namemove && <span className='text-red-600 text-[12px]'>{errors.namemove.message}</span>}
      </div>

      {/* Mô Tả */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <input
          {...register("describe", { required: "Mô Tả là bắt buộc" })}
          type='text'
          placeholder='Mô Tả'
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        />
        {errors.describe && <span className='text-red-600 text-[12px]'>{errors.describe.message}</span>}
      </div>

      {/* Image */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <input
          {...register("image", { required: "Ảnh là bắt buộc" })}
          type='text'
          placeholder='Image'
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        />
        {errors.image && <span className='text-red-600 text-[12px]'>{errors.image.message}</span>}
      </div>

      {/* Link video */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <input
          {...register("linkvideo", { required: "Link video là bắt buộc" })}
          type='text'
          placeholder='Link video'
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        />
        {errors.linkvideo && <span className='text-red-600 text-[12px]'>{errors.linkvideo.message}</span>}
      </div>

      {/* View */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <input
          {...register("view", { min: 1, required: "Lượt xem là bắt buộc và phải lớn hơn 0" })}
          type='number'
          placeholder='View'
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        />
        {errors.view && <span className='text-red-600 text-[12px]'>{errors.view.message}</span>}
      </div>

      {/* Danh mục */}
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4'>
        <select
          {...register("categorys", { required: "Danh mục là bắt buộc" })}
          className='w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300'
        >
          <option value="">Chọn Danh Mục</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.namecategory}
            </option>
          ))}
        </select>
        {errors.categorys && <span className='text-red-600 text-[12px]'>{errors.categorys.message}</span>}
      </div>

      {/* Nút chỉnh sửa sản phẩm */}
      <div className='flex justify-end w-full'>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-red-500 to-teal-600 text-white py-4 px-12 rounded-full font-semibold text-xl shadow-lg transform transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:from-teal-600 hover:to-teal-700 hover:shadow-2xl'}`}
        >
          <i className="fas fa-save mr-3"></i>{isSubmitting ? 'Đang Cập Nhật...' : 'Cập Nhật'}
        </button>
      </div>
    </form>
  )
}

export default Edit
