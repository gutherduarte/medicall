import { makeStyles } from "@material-ui/core";

const registerStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10
  },
  titleMeeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39393b",
  },
  subtitleMeeting: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
  },
  cardForm: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    borderRadius: 3,
  },
  timePicker: {
    "& .MuiPickersToolbar-toolbar": {
      height: "60px",
    },
    "& .MuiTypography-h2": {
      fontSize: 50,
    },
    "& .MuiPickersTimePickerToolbar-ampmLabel": {
      fontSize: 15,
    },
  },
  fieldsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 10,
  },
  checkContent: {
    display: "flex",
    border: "1px solid #c4c4c4",
    marginTop: 10,
    borderRadius: 5,
  },
  checkButton: {
    marginLeft: 10,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  checkTitle: {
    color: "#757575",
    fontSize: 12,
  },
  titleMeetings:{
    color: "red",
    fontSize: 60,
  },
 
}));

export { registerStyles };
