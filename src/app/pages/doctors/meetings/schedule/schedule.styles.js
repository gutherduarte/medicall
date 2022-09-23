import { makeStyles } from "@material-ui/core/styles";

const scheduleStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    marginBotton: 20
  },
  cardContainer: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#39393b",
  },
  centerCard: {
    width: "90%"
  },
  space: {
    marginTop: 15,
    marginBottom: 15,
  },
  cardDate: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 28,
    color: '#2a3150'
  },
  font: {
    color: '#484F6C'
  }
}));

export { scheduleStyles };
