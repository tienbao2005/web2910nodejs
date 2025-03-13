import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!isAccountMenuOpen);
  };

  return (
    <div className="w-1/5 h-screen bg-gradient-to-b from-teal-800 to-teal-600 text-white shadow-xl">
      <div className="flex flex-col p-6">
        {/* Logo hoặc tiêu đề sidebar */}
        <div className="mb-10 text-2xl font-extrabold text-center text-yellow-400">
          Quản Trị
        </div>

        {/* Danh sách các mục trong sidebar */}
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/categorys/list"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Danh Mục
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/categorys/add"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Thêm Danh Mục
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/list"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Quản lý sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Thêm sản phẩm
            </Link>
          </li>
          {/* <li>
            <Link
              to="/order-list"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Quản lý đơn hàng
            </Link>
          </li> */}
          <li>
            <Link
              to="/order-add"
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Thêm đơn hàng
            </Link>
          </li>
          
          {/* Tài Khoản (Menu Dropdown) */}
          <li className="relative">
            <span
              onClick={toggleAccountMenu}
              className="block text-lg py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Tài Khoản
            </span>
            {isAccountMenuOpen && (
              <ul className="ml-4 mt-2 space-y-2 absolute left-0 w-full bg-teal-700 rounded-lg">
                {/* Link cho Admin */}
                <li>
                  <Link
                    to="/dashboard/admin"
                    className="block text-sm py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    Quản lý Admin
                  </Link>
                </li>
                
                {/* Link cho Khách Hàng */}
                <li>
                  <Link
                    to="/dashboard/customer"
                    className="block text-sm py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    Quản lý Khách Hàng
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
