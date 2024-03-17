import { Link, useLocation } from "react-router-dom";
import Typography from "../../components/typography/Typography";
import ConfigNavigation from "./ConfigNavigation";
import Scrollbar from "../../components/scroll_bar/Scrollbar";
import useScreenSize from "../../hooks/useScreenSize";
import useBoolean from "../../hooks/useBoolean";
import { getRoutes } from "../../routes/routes";
import { useRouter } from "../../hooks/useRoutes";

const NavSectionVertical = () => {
  const navContent = ConfigNavigation();
  const screen = useScreenSize();

  const openMobileMenu = useBoolean();

  const mobileStyle = {
    display: "none",
  };
  const defaultStyle = {
    paddingTop: "3rem",
    paddingLeft: "10px",
    paddingRight: "5px",
  };

  const mobileNav = (
    <Scrollbar
      height={"100vh"}
      style={{
        position: "absolute",
        zIndex: 999,
        width: openMobileMenu.value ? "auto" : 0,
        overflowX: "hidden",
        paddingTop: 10,
        backgroundColor:'white'
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <button
          onClick={openMobileMenu.onFalse}
          style={{ position: "absolute", right: 3, top: 3 }}
        >
          Close Menu
        </button>
      </div>
      <div className="flex-col gap-1">
        {navContent.map((e, i) => (
          <Option key={i} nav={e} />
        ))}
      </div>
    </Scrollbar>
  );
  const largeScreenNav = (
    <Scrollbar
      // height={screen === "small" ? 0 : "100vh"}
      style={screen === "small" ? mobileStyle : defaultStyle}
    >
      <div className="flex-col gap-1">
        {navContent.map((e, i) => (
          <Option key={i} nav={e} />
        ))}
      </div>
    </Scrollbar>
  );
  return (
    <>
      {largeScreenNav}
      {mobileNav}
      <button
        style={{
          display:
            screen === "small" && !openMobileMenu.value ? "block" : "none",
          padding: 10,
        }}
        onClick={openMobileMenu.onTrue}
      >
        Show Menu
      </button>
    </>
  );
};

export default NavSectionVertical;

type OptionProps = {
  nav: Record<string, any>;
};
const Option = ({ nav }: OptionProps) => {
  const routes = useRouter();
  const { pathname } = useLocation();

  if (pathname === ("/"+getRoutes().logout)) {
    localStorage.removeItem("token");
    routes.push(getRoutes().login);
  }
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      to={nav.path}
    >
      <div
        style={{
          padding: "1rem 4rem 1rem 1rem ",
          // borderRadius: 10,
        }}
        className={`option flex justify-start align-center ${
          pathname === nav.path && "active"
        }`}
      >
        <Typography noWrap variant="caption">
          {nav.title}
        </Typography>
      </div>
    </Link>
  );
};
