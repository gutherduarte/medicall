import { makeStyles } from "@material-ui/core/styles";

const specialitiesStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    marginBotton: 20,
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
  title: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
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
  centerCard: {
    width: "90%",
    marginTop: 30,
    marginBottom: 30,
  },
  specialityCard: {
    backgroundColor: "#2a3150",
  },
  cardAction: {
    display: "flex",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  quantity: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 17,
    color: "white",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
  },
}));

export { specialitiesStyles };
