import { makeStyles } from "@material-ui/core/styles";

const clinicHistoryStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30
  },
  form: {
    display: 'flex',
    justifyContent: 'center'
  },
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
  subtitle: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
  },
  cardForm: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    borderRadius: 3
  },
  subTitleContainer: {
    marginLeft: 70,
    marginTop: 30,
    marginBottom: 10
  },
  checkContainer: {
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    alignItems: "center"
  },
  content: {
    width: '90%'
  },
  check: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  fieldsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  }
}));

export { clinicHistoryStyles };
