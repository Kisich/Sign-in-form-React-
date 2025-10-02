import InputField from "./InputField";

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
      Already have an account? <a href="/login" className="login-link">Log in</a>
    </p>
  </div>
);

export default SignUp;