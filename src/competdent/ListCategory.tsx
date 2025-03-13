import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { Ifrom, Imove } from '../interface/interface'
import { Icategory } from '../interface/category'

const ListCategory = () => {
  const [category, setCategory] = useState<Icategory[]>([])

  // Lấy danh sách các sản phẩm từ API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/categorys')
        setCategory(data)
      } catch (error) {
        console.error('Có lỗi khi lấy dữ liệu:', error)
      }
    }

    fetchMovies()
  }, [])

  // Xóa sản phẩm
  const Deletee = async (id: string | number) => {
    try {
      if (confirm("Bạn Muốn Xoá Không")) {
        await axios.delete(`http://localhost:3000/categorys/${id}`)
        setCategory(category.filter(category => category.id !== id)) // Loại bỏ phim khỏi state
        alert('Sản phẩm đã được xóa thành công!')
      }
    } catch (error) {
      console.error('Có lỗi khi xóa sản phẩm:', error)
    }
  }

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-4xl font-bold text-center text-teal-600 mb-6'>Danh Sách Danh Mục</h2>

    

      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto text-left bg-white shadow-lg rounded-lg'>
          <thead className='bg-teal-500 text-white'>
            <tr>
              <th className='px-6 py-4'>STT</th>
              <th className='px-6 py-4'>Tên Danh Mục</th>
              <th className='px-6 py-4'> Ảnh Danh Mục</th>
              <th className='px-6 py-4'>Thao Tác</th>


           
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {category.map((item, index) => (
              <tr key={item.id} className='border-b hover:bg-gray-100'>
                <td className='px-6 py-4'>{index + 1}</td>
                <td className='px-6 py-4'>{item.namecategory}</td>
                
                <td className='px-6 py-4'>
                  <img src={item.image} alt={item.image} className='w-20 h-20 object-cover rounded-lg' />
                </td>
             
                <td className='px-6 py-4'>
                  <button
                    onClick={() => Deletee(item.id)}
                    className='bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 mr-2'
                  >
                    Xóa
                  </button>
                  <Link
                    to={`/dashboard/categorys/edit/${item.id}`}
                    className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300'
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListCategory
