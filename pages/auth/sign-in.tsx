import { SignIn } from '@clerk/clerk-react';


const SignInPage = () => {
  return (
    <div className="signInContainer">
      <div className="infoText"> 
        <h2>Welcome Back!</h2>
        <p>Please enter your credentials to log in and access your account.</p>
        <p>If you have trouble logging in, please contact support or reset your password using the link below.</p>
      </div>
      <SignIn path="/sign-in" routing="path" />
      <div className="helpLinks">
        <a href="/reset-password">Forgot Password?</a>
        <a href="/support">Contact Support</a>
      </div>
    </div>
  );
};

export default SignInPage;