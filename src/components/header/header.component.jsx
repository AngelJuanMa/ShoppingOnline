import React, { Component } from "react";
import "./header.style.sass";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
//<i class="fas fa-cart-plus"></i>
class Header extends Component {
  render() {
    let user = true;
    return (
      <div id="header">
        <img src={logo} alt="" />
        <input type="text" placeholder="Search" name="" id="" />
        <i class="fas "></i>
        {user ? (
          <React.Fragment>
            <FontAwesomeIcon id="coffe" icon={faSignOutAlt} />
            <FontAwesomeIcon id="coffe" icon={faShoppingCart} />
            <FontAwesomeIcon id="coffe" icon={faShoppingBasket} />
            <FontAwesomeIcon id="coffe" icon={faComments} />
          </React.Fragment>
        ) : (
          <a>Ingresá</a>
        )}
      </div>
    );
  }
}

export default Header;
