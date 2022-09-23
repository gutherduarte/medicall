import { makeStyles } from '@material-ui/core/styles';

const establishmentsStyles = makeStyles(theme => ({
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
   centerCard: {
    width: "90%",
    marginTop: 30,
    marginBottom: 30,
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
    display: 'flex',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 10
  },
  establishmentCard: {
    marginTop: "10%",
    marginBottom: "10%",
    backgroundColor: '#00ab93',
  },
  cardAction: {
    display: 'flex'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: 230,
    height: 190
  },
  cardContentEstablisment: {
    flex: '1 0 auto',
  },
  quantity: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 17,
    color: 'white'
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
}));

export {establishmentsStyles};
