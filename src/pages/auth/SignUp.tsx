import { Helmet } from "react-helmet-async";
import SignUpView from "../../section/auth/SignUpView";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <SignUpView />
    </>
  );
};

export default SignUp;
