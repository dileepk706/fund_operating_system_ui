import { Link } from "react-router-dom";
import Typography, { Variant } from "../typography/Typography";

type Props = {
  to: string;
  children: string | React.ReactNode;
  variant?: Variant;
};
const CustomLink = ({ to, children, variant }: Props) => {
  return (
    <Link
      style={{
        // textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      to={to}
    >
      <Typography noWrap variant={variant}>
        {children}
      </Typography>
    </Link>
  );
};

export default CustomLink;
