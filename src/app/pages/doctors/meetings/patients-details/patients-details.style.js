import { makeStyles } from "@material-ui/core/styles";

const patientsDetailsStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39393b",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10,
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContainer: {
    width: "95%",
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
  },
  personalContainer: {
    width: "35%",
    marginLeft: 10,
    marginRight: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  clinicContainer: {
    width: "60%",
    margin: 10,
  },
  clinicCard: {
    width: "100%",
    marginLeft: 5,
    marginRight: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2a3150",
    margin: 10,
  },
  clinicTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2a3150",
    margin: 10,
  },
  clinicSubTitle: {
    fontSize: 16,
    color: "#2a3150",
    margin: 10,
  },
  coverContainer: {
    display: "flex",
    justifyContent: "center"
  },
  cover: {
    width: 110,
    height: 110,
    margin: 10
  },
  item: {
    width: "80%",
  },
  nameContainer: {
    width: "75%",
    margin: 10,
    paddingBottom: 15,
    borderBottom: '1px solid #e9e9e9',
  },
  name: {
    fontSize: 14,
    color: "#2a3150",
  },
  infoContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    width: "75%"
  },
  infoIcon: {
    color: "#000036",
    fontSize: 16,
    marginRight: 25,
  },
  infoText: {
    color: "#484F6C",
    fontSize: 16,
  },
  itemText: {
    color: "#484F6C",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default patientsDetailsStyles;
