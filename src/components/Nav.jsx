import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
const Navigation = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "about",
      },
      {
        text: "Services",
        link: "services",
      },
      {
        text: "Projects",
        link: "projects",
      },
      {
        text: "Blog",
        link: "blog",
      },
      {
        text: "Contact",
        link: "contact",
      },
    ],
    logo: {
      text: "VBH",
    },
    style: {
      barStyles: {
        background: "#6b6b6b",
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "white",
        height: 300,
      },
      linkStyles: {
        paddingLeft: 50,
        color: "white",
      },
    },
  };
  return <Navbar {...props} />;
};

export default Navigation;
