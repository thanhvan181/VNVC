import React from 'react'

import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
  } from "mdb-react-ui-kit";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
             <footer>
        <MDBFooter className="text-center" color="white" bgColor="dark">
          <MDBContainer className="p-4">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                 

               
                 
                </div>
              </form>
            </section>

            <section className="">
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Hệ thống phòng tiêm chủng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Danh mục Vắc xin đa dạng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Trang thiết bị hiện đại
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Chuyên gia y tế giàu kinh nghiệm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Chủ động nhắc lịch tiêm
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Khách hàng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Trẻ em
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Người lớn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Phụ nữ chuẩn bị mang thai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Đăng ký thông tin tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Tra cứu lịch sủ tiêm chủng
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Cẩm nang tiêm chủng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Lịch tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Những điều cần biết trước khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Những điều cần biết sau khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Quy trình tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Tiêm chủng trươc khi ra nước ngoài
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Liên hệ </h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Email: congtyvnvc@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Phone: 09929883992
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 :
            <a className="text-white" href="https://mdbootstrap.com/">
              VNVC
            </a>
          </div>
        </MDBFooter>
      </footer>

            
        </div>
    )
}

export default Footer
