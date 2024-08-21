import Img2 from "../assets/Add-notes-bro.svg";
import './SignIn.css'; // Ensure you have this CSS file for custom styles

function SignIn() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <form className="w-75">
                        <h2 className="text-center h1">Sign In</h2>
                        
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginEmail">Email address</label>
                            <input type="email" id="loginEmail" className="form-control" />
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                            <input type="password" id="loginPassword" className="form-control" />
                        </div>

                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                            </div>

                            <div className="col text-end">
                                {/* Simple link */}
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        <p className="text-center">I don't have any account! <a href="/signUp">Register</a></p>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Img2} alt="Sign In Illustration" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
