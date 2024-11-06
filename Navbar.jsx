import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <div className="nav">
            <Link to="/home" className="child">Home</Link>
            <Link to="/browse" className="child">Browse Books Page</Link>
            <Link to="/addbook" className="child">Add Book Page</Link>
        </div>
    );
}

export default Navbar;