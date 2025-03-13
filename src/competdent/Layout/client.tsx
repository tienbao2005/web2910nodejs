

import React from 'react';
// import AdminHeader from './admin/header'
// import AdminFooter from './admin/footer'

import HeaderClinet from './clinet/header'; // Đảm bảo tên đúng và viết hoa
import FooterClinet from './clinet/footer';
import MainClinet from './clinet/main';
const ClinetLayout = () => {
  return (
    <main>
      {/* Sử dụng component HeaderClinet dưới dạng thẻ JSX */}
      <HeaderClinet />
      <MainClinet />
      
      <FooterClinet />

    </main>
  )
}

export default ClinetLayout;
