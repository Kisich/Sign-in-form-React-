import InputField from "./InputField";
import { Link } from "react-router-dom";

const SignUp = () => (
  <div className="signup-container">
    <h2 className="form-title">Sign Up</h2>
    <form className="signup-form">
      <InputField type="email" placeholder="Email address" icon="mail" />
      <InputField type="password" placeholder="Password" icon="lock" />
      <InputField type="password" placeholder="Confirm Password" icon="lock" />
      <button type="submit" className="signup-button">Sign Up</button>
    </form>
    <p className="login-prompt">
      Already have an account? <Link to="/" className="login-link">Log in</Link>
    </p>
  </div>
);

export default SignUp;