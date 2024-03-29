import { useState } from "react";
import Input from "../../components/inputs/Input";
import { ColorSchema } from "../../theme";
import { api } from "../../api/axios";
import { APIs } from "../../api/APIs";
import useBoolean from "../../hooks/useBoolean";
import LoadingButton from "../../components/button/LoadingButton";
import { useRouter } from "../../hooks/useRoutes";
import { getRoutes } from "../../routes/routes";
import Typography from "../../components/typography/Typography";
import CustomLink from "../../components/link/Link";

const SignUpView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const loading = useBoolean();
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    loading.onTrue();
    try {
      const { data } = await api.post(APIs().signup, {
        email,
        password,
        name,
      });
      localStorage.setItem("token", data.result.token);
      loading.onFalse();
      router.replace(getRoutes().dashboard);
    } catch (error: any) {
      setError(error.message);
      console.log(error);
      loading.onFalse();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
        <Typography variant="subtitle1" >Sign up</Typography>
      {error && (
        <Typography
          style={{ margin: "5px 0", color: "red" }}
          variant="captionUltra"
        >
          {error}
        </Typography>
      )}
      <div style={{}}>
        <div
          style={{
            padding: 10,
          }}
        >
          <span>{}</span>
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
              type="text"
            />
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              type="email"
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              type="password"
            />

            <LoadingButton
              style={{ backgroundColor: ColorSchema().SUCCESS.main }}
              size="small"
              label="Submit"
              onClick={onSubmit}
              loading={loading.value}
            ></LoadingButton>
            <CustomLink to={`/${getRoutes().login}`}>Login</CustomLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;

