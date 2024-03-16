import { useCallback, useEffect, useState } from "react";
import { useRouter } from "../hooks/useRoutes";
import { getRoutes } from "../routes/routes";

type Props = {
  children: React.ReactNode;
};
const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [checked, setChecked] = useState(false);
  const check = useCallback(() => {
    if (!token) {
      setChecked(false);
      router.push(getRoutes().login);
    } else {
      setChecked(true);
    }
  }, [token, router]);

  useEffect(() => {
    check();
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;

export const IsLogin = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (!token) {
     setChecked(true)
    }
  };
  useEffect(() => {
    check();
  }, []);
  if(!checked){
    return null
  }
  return children;
};
