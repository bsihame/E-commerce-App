import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return(
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo"  src={Logo}/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTENT</Link>
      </div>
    </div>
  )
}
export default Header;