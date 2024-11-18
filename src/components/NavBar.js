

import { Link } from "react-router-dom";

function NavBar() {
    return (
      <> 
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/contactus">Contact Us</Link> {" | "}
            <Link to="/contactus2">Contact Us2</Link> {" | "}
            <Link to="/about">About</Link>
          </nav>
      </>
    );
}
  
export default NavBar;