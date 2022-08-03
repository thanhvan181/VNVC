import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

// import { GoLocation } from "react-icons";
// import { GoLocation  } from 'react-bootstrap-icons';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>

      <header>

        <Navbar bg="white"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADMzMzy8vL6+vqsrKxISEgFBQWwsLBra2tWVlalpaX19fXBwcEcHBz8/Px6enri4uLV1dXp6emTk5Nubm6Dg4O4uLjHx8fW1tY/Pz+Wlpbf399zc3NfX19kZGSLi4s1NTUjIyOenp4sLCwrKys9PT1GRkYSEhJXV1cYGBiyw27aAAAIN0lEQVR4nO2c6WLyKhCGTaI2rXWNGrVu0da23/1f4BGYAcKidQ165vnTVIjOGxjWIbUaQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8b+l3p/GcTztv1dtyC1I8nEzUsx6ab9qk65J/6OIbDrjQdWGXYl85pAn2LS6VVt3OemLVx/n48E1xpvD+hiNqo28gPrrcX17ZlnVhp5LXBby1Wu1B/P5fNpujA3XfNBi/NA1vLaNTjAel5KrMfEyFsr+TVp35WhrPeTMmSNoltL4f7k30+BbPYVHG+gogR8H8+VK4mOV4gjt/jw2OKvLZ1HcxbIrIRuZ0R8ybzHz8uZ2XQ3ZTQztNMcQpo3Zt7c37TrUvRbHq/2nTavlkU9keh8DL2bla2MwoUiMhAkkdO5k4YWguQsz4U22mz9m19DwV+sA6Xiaxpbq36OVmYjjA7N0QyQFW63hdKRjpXY8BR8gP55WZlBS2PIlhzzPSLlzwSDly0rOSwrHVvqrnmA9gBDYzvgfmBe1rfRjCjNI4R3m2nLU6mlEKfvTF2Z+2hmO1FLZ2PCvmYfnkAPwoKEw0zWdONzSyIfzxv/5cT2DSsFi+xJmurIc7C0YMJXic4x9gYa1oLqfsPfYX3CmnjOT6vFfnDOlVHPh/fXsZtaeQYb+A83JxJ0NR207d7+eaI3Q3NlaVQdbc5njBVY0B/Fq31u+eef8Bb+ZD4a6UVCF2JWqhCsdMu3QAvBYc+IdPrQgYBO8Db/ydXZ/A+o4b2LYAGB9HfOuQG9vTZNdgCedu/w5FbfH7Hrt7lUrgi3d8xXP/sGG5iiJ1pnyviWU9be6rJkwbjnXf7ridt7X57I0A4C17NGaXU28A5a/IeYlfG2AL96k1zHwYmJpFij0T2Pbi+Vrw9+cikkin+hzhaEsTbWlWUfKMPvSmhIXpsJQFjUmspbGBxWCmx1wVLGbyksuKIW8feFDUWjuPYuCQ6mw6c5Q1zqbVLY5AcCH20t55R1Q/pMKPaWs376V/UYIMGN27ALqobuBmCqBnjFBrFWB8SXdztXh+4D8SjQV7iWItabQXU23WlP8K78zBLbSLjE/+nHmEkELO6HCOVoRd7/w6473SVVBJrsAKAXX9BxGdLAN4+zLI1UDkqDcUMzeufMN/I4IO241UYi/jhzghi15fUuTT4TZI1aQhJGuScEnT/lGd3QMbHpaBWA9y+Hd4zvTRJtHWnNYAnqCIY57HDVQJIj9p5n7IVQHczI+ZwL77egR8NC49q55W4kWPoOacMOAvJCxxQU26A6sLh3Wwuu4GmM72Yt2ZxrgnvcSbB66iwgmt9812S+a02QoQuHOzRA3S5titAVSIiN2tKGqIFRkY9keKq/odLIwNxJ/+cANF8w25cQ3ZT9qKWdYqULef0cnRIF7X+TDSIxTKK17oyq+5FhopYXgzhQv+u65i3V3Avcn9LYw10sIHFGXAQOegMZpBylsV1xqPYEMZVDJCQYSh7K4dgQsEDX5wdm9qJhYZeWwoI6RxIF1gX7kPhpqwKgnGKWIAVy0htQEohT+FCMWCDJwDwoF9uhxPwMcESZZc8z8UKF7Msq5NNDBhSUsUl6L1cZpmD2Eh+4Xmv1vopoWHMagI+4nD30VQxvWnu9R6lJi1JzCtEhtKxZQLTMtmD+YNZm/0rVPyqhtxbGVFnSkkI+VKWItk9pmUvEgHaFBy5ChZhOJkRJc8MxfmZfPBGnlVJQSQgpJOBX9VMlO+1x3xMVjBembJD2pZK19rBzx7eHaUIsM17r1ST064uvj6+PkS8MNxQJ4s/WYLaiTbrwtR4Jth5MnkkcQBEEQBEEQBEEQBPF0tIrO4qE22U6lZ66NPxt9e+n4yYCYFE8k/zMAIbTVvxYriR2UMgzi2NjxzPQ4N3GHliOD20WQhpbV+KnztlFPjVMd6O+wVMj0eQ/eG7HSNyoaUTSWvyTS5XGRuMDbE7ZxrIJq4m/zV77uEHFjbnsCGLedLbUPP1VpsCMw8nVeIhXPXHzoD6g/VU/8w/6ZO8Tc5K5fjeQmp7l9LQ8u8UM+GDBTUjgpVwFFGjm5cVRf1/2rEPcqX6SjwP1rYW7uUPjPo7BufRdw2w05z3MFgRNH0lq/cWkrhLNCIKqpznJ53MH3OoNrsXD95A6Oh7if+kBTuLEVpiWFUdTBwCHvezNve/75FzRNE4VsGnBD+zNPau/xb8kgIaRjK2wYCmXwFzTZ33P8nT5qvqlCCGZ29jAYy7WG/7FR4p3GCQqhKguFpSNUovN4ubKmMkKhO5IXHEe5CUjkuU9QCIUoFC7sX7iHQvewamnVIe2TUxSKnqdpPK9a9QpFJLN+dFc7+HyKQtFwhaewrnkdADElrDV9BoXvSg4CFrNh9TMo7OpOJIDzaiza+xkUwhlgvfGD3jypPYnCkdIDFErWUygsnYth6GdjHkyhZ9wUgUQoRRzE8bnAoylcOpcT5GxgkcdtefpeDMLAJUUoqS5kHZhCeVREZ4mLNIUrVZQodP6bxWg0gglKk13DsEdU7W4ACj2TNmhAM0cS9B7e+awAjm1/WgpL7/6I76Dw3WMhSJxbCfLNAj3HXQpYwRlaCsvucAeF3pk3VNSscH7M6DjvE+AKWt1UaCzKNO6g0HUYhCEnVPojGOsx6u+F+85If9PJtKzQWv3u3UFhre0uDC3Dgp0I+lk2zB2WdOe8c6HXxOwNFe6cL1VIo3u8TGKeN2zKWXzLzImFtdGU5WIxLfe8TWoQygvACIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiLP4D1nIU6ciR5H0AAAAAElFTkSuQmCC" width="100px" height="100px" />{' '}
            {/* <span className="text-h1">VNVC</span> */}
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className='nav-top'>
              <Nav.Link href="/hethongtrungtamtiemchung">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>


                TÌM TRUNG TÂM</Nav.Link>


              <Nav.Link href="/dangkytiemchung">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-calendar2-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                </svg>
                ĐĂNG KÝ TIÊM</Nav.Link>
              <Nav.Link href="/vaccine">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                ĐẶT MUA VẮC XIN</Nav.Link>
              <Nav.Link href="#blog">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007c7c" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>

                TƯ VẤN</Nav.Link>

              <Nav.Link href="/signin">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="#007c7c" className="bi bi-person-rolodex" viewBox="0 0 16 16">
                  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
                </svg>

                ĐĂNG KÝ/ĐĂNG NHẬP</Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>
        <hr />


     <div className='nav-two'>
     <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
           
            <Nav className='ms-auto'>
              
              <Nav.Link href="/">TRANG TRỦ</Nav.Link>
              <NavDropdown title="GÓI TIÊM">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link to="#contact-us">Contact Us</Nav.Link> */}
              <NavDropdown title="TIÊM CHỦNG CHO TRẺ EM">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="TIÊM CHỦNG CHO NGƯỜI LỚN">
                <NavDropdown.Item to="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item to="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item to="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">BẢNG GIÁ</Nav.Link>
             

            </Nav>
            <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            

            </Nav>
            
           
          </Navbar.Collapse>

        </Navbar>
     </div>

      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
          <MDBContainer className='p-4'>


            <section className=''>
              <form action=''>
                <div className='row d-flex justify-content-center'>
                  <div className='col-auto'>
                    <p className='pt-2'>
                      <strong>Đăng ký nhận bản tin của chúng tôi</strong>
                    </p>
                  </div>

                  <MDBCol md='5' start='12'>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBCol>

                  <div className='col-auto'>
                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                      Subscribe
                    </MDBBtn>
                  </div>
                </div>
              </form>
            </section>


            <section className=''>
              <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Hệ thống phòng tiêm chủng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Danh mục Vắc xin đa dạng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Trang thiết bị hiện đại
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Chuyên gia y tế giàu kinh nghiệm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Chủ động nhắc lịch tiêm
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Khách hàng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Trẻ em
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Người lớn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Phụ nữ chuẩn bị mang thai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Đăng ký thông tin tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Tra cứu lịch sủ tiêm chủng
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Cẩm nang tiêm chủng</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Lịch tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Những điều cần biết trước khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Những điều cần biết sau khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Quy trình tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Tiêm chủng trươc khi ra nước ngoài
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Liên hệ </h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Email: congtyvnvc@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#!' className='text-white'>
                        Phone: 09929883992
                      </NavLink>
                    </li>

                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2021 :
            <a className='text-white' href='https://mdbootstrap.com/'>
              VNVC
            </a>
          </div>
        </MDBFooter>

      </footer>
    </div>
  )
}

export default WebsiteLayout