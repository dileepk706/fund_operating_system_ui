import { Helmet } from "react-helmet-async";
import LoginView from "../../section/auth/LoginView";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginView />
    </>
  );
};

export default Login;
