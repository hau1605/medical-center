import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import logo from './medical.png';
import './Header.css';
const Header = () => {
  // const totalCount = useSelector((state) => state.Allcart.totalQuantity);
  const totalCount = 1;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="44" height="44" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gioi-thieu" activeClassName="active">
              Giới thiệu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dat-lich-hen" activeClassName="active">
              Đặt lịch hẹn
            </Nav.Link>
            <Nav.Link as={NavLink} to="/san-pham" activeClassName="active">
              Sản phẩm
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tin-tuc" activeClassName="active">
              Tin tức
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lien-he" activeClassName="active">
              Liên hệ
            </Nav.Link>
          </Nav>

          <Nav>
            <Link className='btn-card' to="/cart" title='Giỏ hàng'>
              <FiShoppingCart />
              <span className='count_item'>{totalCount}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
