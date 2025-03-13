import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

type IFormCategory = {
    id: string | number;
    namecategory: string;
    image: string;
}

const EditCategory = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormCategory>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Nhận ID từ URL

  // Fetch dữ liệu danh mục hiện tại
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/categorys/${id}`);
        // Thiết lập các giá trị form từ dữ liệu hiện tại
        setValue("namecategory", data.namecategory);
        setValue("image", data.image);
      } catch (error) {
        alert('Có lỗi xảy ra khi lấy dữ liệu');
        console.error('Error fetching category:', error);
      }
    };
    fetchCategory();
  }, [id, setValue]);

  // Cập nhật danh mục
  const onSubmit = async (data: IFormCategory) => {
    setIsSubmitting(true); // Set trạng thái đang gửi
    try {
      await axios.put(`http://localhost:3000/categorys/${id}`, data); // Dùng PUT để cập nhật
      alert('Cập nhật danh mục thành công');
      navigate('/dashboard/categorys/list'); // Điều hướng về trang danh sách
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
      console.error('Error updating category:', error);
    } finally {
      setIsSubmitting(false); // Reset trạng thái gửi
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-6 mt-8 w-full h-screen max-w-none mx-auto p-10 bg-gradient-to-r from-teal-600 to-teal-500 rounded-none shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8 w-full">Chỉnh Sửa Danh Mục</h2>

      {/* Tên Danh Mục */}
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
        <input
          {...register("namecategory", { required: "Tên Danh Mục là bắt buộc" })}
          type="text"
          placeholder="Tên Danh Mục"
          className="w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300"
        />
        {errors.namecategory && <span className="text-red-600 text-[12px]">{errors.namecategory.message}</span>}
      </div>

      {/* URL Hình Ảnh */}
      <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
        <input
          {...register("image", { required: "URL hình ảnh là bắt buộc" })}
          type="text"
          placeholder="URL Hình Ảnh"
          className="w-full text-lg text-gray-700 py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all duration-300"
        />
        {errors.image && <span className="text-red-600 text-[12px]">{errors.image.message}</span>}
      </div>

      {/* Nút cập nhật danh mục */}
      <div className="flex justify-end w-full">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-red-500 to-teal-600 text-white py-4 px-12 rounded-full font-semibold text-xl shadow-lg transform transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:from-teal-600 hover:to-teal-700 hover:shadow-2xl'}`}
        >
          <i className="fas fa-edit mr-3"></i>{isSubmitting ? 'Đang Cập Nhật...' : 'Cập Nhật'}
        </button>
      </div>
    </form>
  );
};

export default EditCategory;
