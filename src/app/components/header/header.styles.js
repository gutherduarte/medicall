import { makeStyles } from "@material-ui/core";

const headerStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "#2a3150",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: "white",
    color: "#2a3150",
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 19,
  },
  logo: {
    width: 180,
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "space-between",
    alignItems: "center",
  },
  registerDoctor: {
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 500,
    color: "#2a3150",
  },
}));

export { headerStyles };
