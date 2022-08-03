import React from "react";
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { Menu } from "antd";
import { getAuth, signOut } from "firebase/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {
  
    Nav,
   
    NavDropdown,
} from "react-bootstrap";

import { logout } from "../../src/features/Website/Auth/AuthSlide";

import { useSelector, useDispatch } from "react-redux";






import Search from './Search'
import { useEffect } from "react";
import { getTotals } from "../features/Website/Cart/CartSlide";
import { useState } from "react";



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [countcart, setCountCart]  = useState(0)
  
    const auth = getAuth();
    // const cartQuantily = useSelector((state:any) => state.cart.cartTotalQuantity)
    const carts = useSelector((state: any) => state.cart.items)
    console.log("cartheader", carts)
    const user = useSelector((state: any) => state.user.userInfo);
    console.log('uservvvvvv', user);
    useEffect(() => {
        setCountCart(carts.length)
    }, [carts])
    
    const hanldeLogout = async () => {
        try {
          await signOut(auth)

          dispatch(logout({ email: null }));
          setCountCart(0)

          navigate("/signin");
          

        } catch {
          toast.info("Logout error!");
        }
    }
    return (
        <header className="p-3 border-bottom bg-light">
            <div className="container-fluid">
                <div className="row g-3">

                    <div className="col-md-3 text-center">
                        <Link to="/">
                            <img
                                alt="logo"
                                className="logo"
                                src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/09/Logo1.png"
                            />
                        </Link>

                    </div>
                    <div className="col-md-5">
                        <Search />
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative d-inline mr-3">
                            <Link to="/cart" className="btn ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#007c7c" className="bi bi-cart-check" viewBox="0 0 16 16">
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                                <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                                {countcart}
                                </div>
                            </Link>
                        </div>
                        <div className="btn-group">
                            {!user ? (
                                <>
                                    <Nav.Link href="/signup">
                                        ĐĂNG KÝ
                                    </Nav.Link>
                                    <Nav.Link href="/signin">
                                        ĐĂNG NHẬP
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    {/* <Navbar.Collapse>
                   <Nav> */}
                                    <NavDropdown
                                        title={user.name}
                                        id="basic-nav-dropdown"
                                        style={{ fontSize: "18px" }}
                                        className="dropdown"
                                    >
                                        <div className="one">
                                            <NavDropdown.Item href="">
                                                {user.email}
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/order">
                                               Lịch sử đơn hàng
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/historyregister">
                                               Lịch sử đăng ký tiêm
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item
                                                to="/signin"
                                                onClick={hanldeLogout}
                                            >
                                               Thoát
                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <img className="img-icon" src={user.picture} />
                                </>
                            )}


                        </div>

                        {/* <Link to="/account/signin">Sign In</Link> |{" "}
          <Link to="/account/signup"> Sign Up</Link> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header