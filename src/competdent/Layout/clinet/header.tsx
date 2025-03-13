import React, { useEffect, useState } from 'react'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icategory } from '../../../interface/category';
import axios from 'axios';


const HeaderClinet = () => {
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
  return (
    <div>
     <header >
      <div className="header-top">
        <div className="header-top-right">
          <h3>PhImHaY.JaV</h3>
        </div>
        <div className="header-top-left">
          <input type="text" className="search-input" placeholder="Tìm kiếm..." />
        </div>
        <div className="header-top-button">
          <button className="btn" style={{ borderRadius: "10px" }}>
            <a href="/Login.html" style={{ textDecoration: "none" }}>
              <i className="fas fa-user-plus icon"></i>THÀNH VIÊN
            </a>
          </button>
        </div>
      </div>

      <div className="header-bottom">
        <ul>
          <li><a href="#home">Trang Chủ</a></li>
          {category.map((item,index)=>(
          <li><a href="#about">{item.namecategory}</a></li>

          ))}
        </ul>
      </div>
    </header>

    </div>
  )
}

export default HeaderClinet
