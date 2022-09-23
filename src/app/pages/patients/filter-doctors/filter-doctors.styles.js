import { makeStyles } from '@material-ui/core/styles';

const filterDoctorsStyles = makeStyles(theme => ({
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
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#39393b",
  },
  titles: {
    fontSize: 18,
    color: "#2a3150",
    fontWeight : "bold",
    borderBottom: '1px solid #e9e9e9',
    paddingBottom: 10,
    marginBottom: 20,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  centerCard: {
    width: "90%",
    marginTop: 30,
    marginBottom: 30,
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
  establishmentCard: {
    marginTop: "10%",
    marginBottom: "10%",
    backgroundColor: '#00ab93',
  },
  font: {
    color: '#484F6C'
  },
  cardAction: {
    display: 'flex'
  },
   image: {
    width: 180,
    height: 160,
    marginBottom: 25
  },
  
}));

export { filterDoctorsStyles };
