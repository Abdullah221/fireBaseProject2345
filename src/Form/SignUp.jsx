import Img2 from "../assets/Add-files-bro.svg";
import './SignIn.css'; // Ensure you have this CSS file for custom styles

function SignUp() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Img2} alt="Sign In Illustration" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <form className="w-75">
                        <h2 className="text-center h1">Sign Up</h2>
                        
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="signUpName">Full Name</label>
                            <input type="text" id="signUpName" className="form-control" />
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="signUpEmail">Email address</label>
                            <input type="email" id="signUpEmail" className="form-control" />
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="signUpPassword">Password</label>
                            <input type="password" id="signUpPassword" className="form-control" />
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="signUpConformation">Confirm Password</label>
                            <input type="password" id="signUpConformation" className="form-control" />
                        </div>

                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">

                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                        <p className="text-center">I already have account! <a href="/signIn">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
