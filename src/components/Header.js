import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <>
    <div className="navBar">
      <Nav className="justify-content-center" activeKey="/home">
      <Link to="/home">HOME</Link>
      <span></span>
      <Link to="/store">STORE</Link>
      <Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link>
      </Nav>
       </div>
    <div className="flex shopping-cart ">
      <h4>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{props.count}</sup>
      </Button>
    </div>
    </>
  );
};





export default Header;