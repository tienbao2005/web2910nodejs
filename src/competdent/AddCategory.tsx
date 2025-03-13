import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { IFormCategory } from '../interface/category';

type IFormCategory = {
    id: string | number,
    namecategory: string,
    image: string,
}

const AddCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormCategory>();
  const navigate = useNavigate();

  const onSubmit = async (data: IFormCategory) => {
    try {
       await axios.post(`http://localhost:3000/categorys`, data);
      alert('Bạn Đã Danh Mục Phim Thành Công');
      navigate('/category/List');
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
      console.error('Error posting category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-6 mt-8 w-full h-screen max-w-none mx-auto p-10 bg-gradient-to-r from-teal-600 to-teal-500 rounded-none shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8 w-full">Thêm Sản Phẩm Mới</h2>

      {/* Các trường nhập liệu */}
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
        <input
          {...register("namecategory", { required: true })}
          type="text"
          placeholder="Tên Danh Mục"
          className="w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300"
        />
        {errors.namecategory && <span className="text-red-600 text-[12px]">Tên Danh Mục Bắt Buộc Nhập</span>}
      </div>

      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
        <input
          {...register("image", { required: true })}
          type="text"
          placeholder="URL Hình Ảnh"
          className="w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300"
        />
        {errors.image && <span className="text-red-600 text-[12px]">Ảnh Bắt Buộc Nhập</span>}
      </div>

      {/* Nút thêm sản phẩm */}
      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-teal-600 text-white py-4 px-12 rounded-full font-semibold text-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-teal-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          <i className="fas fa-plus-circle mr-3"></i>Thêm Mới
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
