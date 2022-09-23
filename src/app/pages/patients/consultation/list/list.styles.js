import { makeStyles } from "@material-ui/core/styles";

const listStyles = makeStyles((theme) => ({
   titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39393b",
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
    margin: 10,
  },
  table: {
    width: "80%",
    margin: 20,
  },
  icon: {
    fontSize: 19,
  },
  select: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
  textBold: {
    fontWeight: "bold",
  },
}));

export default listStyles;
