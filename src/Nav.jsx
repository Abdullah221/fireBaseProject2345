import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col">
                    <Link to="/">Home</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/signIn" className="btn btn-success">Login</Link>
                    <Link to="/signUp" className="btn btn-success">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
