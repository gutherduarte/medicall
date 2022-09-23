import { makeStyles } from "@material-ui/core/styles";

const listStyles = makeStyles((theme) => ({
  titleMeeting: {
       fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
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
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
  },
  plusEnd: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  table: {
    width: "80%",
    margin: 20,
  },
  icon: {
    fontSize: 19,
  },
  iconState: {
    fontSize: 16,
  },
  cardMedia: {
    width: 60,
    height: 60,
  },
  cardImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  select: {
    marginTop: 10,
    marginBottom: 10,
    width: 200
  },
  textBold: {
    fontWeight: "bold",
  },
}));

export default listStyles;
