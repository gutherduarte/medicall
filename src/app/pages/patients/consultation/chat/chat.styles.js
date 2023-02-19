import { makeStyles } from "@material-ui/core/styles";

const chatStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
    padding: "0rem 10rem",
    "@media(max-width: 768px)": {
      padding: "0rem 0rem",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10,
    padding: "0 10rem",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39393b",
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
  },
  cardForm: {
    height: "38rem",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
    padding: "2rem",
  },
  subTitleContainer: {
    marginLeft: 70,
    marginTop: 30,
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
  },
  iconButtonContainer: {
    width: "55%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  iconButton: {
    width: 50,
    height: 50,
  },
  container: {
    width: "60%",
    "@media(max-width: 768px)": {
      width: "80%",
    },
    height: "100%",
    background: "#2a3150",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    borderRadius: "10px",
  },
  fieldsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
}));

export { chatStyles };
