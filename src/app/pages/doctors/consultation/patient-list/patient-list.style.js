import { makeStyles } from "@material-ui/core/styles";

const patientsListStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39393b",
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
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
  cardMedia: {
    width: 60,
    height: 60,
  },
  table: {
    width: "80%",
    margin: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  icon: {
    fontSize: 19,
  },
    selectCite: {
    marginTop: 10,
    marginBottom: 10
  },
  plusEnd: {
    justifyContent: "space-between",
    margin: 20,
    marginLeft: 120
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '80%'
  },
  date: {
    fontWeight: 'bold'
  }
}));

export default patientsListStyles;
