
import { AppBar, Button, Drawer, IconButton, Link, makeStyles, MenuItem, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import logoperez from '../img/logo_perez.png'
import React, { useState, useEffect } from "react"
const headersData = [
  {
    label: "Home",
    href: "#firstPage",
  },
  {
    label: "Áreas de atuação",
    href: "#secondPage",
  },
  {
    label: "Notícias",
    href: "#thirdPage",
  },
  {
    label: "Contato",
    href: "#fourthPage",
  },
];



const UseStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  logo: {
    height: 52,
    width: 72
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    fontFamily: "sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: '#242423'
  },
  drawerContainer: {
    padding: "20px 30px",
  }
}));


function Header(props) {


  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const { header, logo, menuButton, toolbar,drawerContainer } = UseStyles()
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: Link,
            href: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>
      {femmecubatorLogo}
      <div>
        {getMenuButtons()}
      </div>
    </Toolbar>;
  }

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1">
      <img src={logoperez} className={logo} />
    </Typography>
  )

  const displayMobile = () => {

    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
                        "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "bottom",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }} >

          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div >{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "secondary",
            href: href,
            component: Link,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}

export default Header