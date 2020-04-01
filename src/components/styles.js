
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    rootLocation: {
        flexGrow: 1,
        margin: theme.spacing(6)
      },
      currentWeather: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
        background: "darkorange",
        color: "white",
        textAlign: "center"
      },
      forcastPaper: {
        flexGrow: 1,
        padding: theme.spacing(5),
        margin: theme.spacing(6)
      },
      select: {
        width: "100%",
        marginBottom: theme.spacing(3)
      },
      submitBtn: {
        alignItems: "center",
        width: "100%"
      },
      weatherRes: {
        padding: theme.spacing(4),
        margin: theme.spacing(2)
      }
      

}));

export default useStyles;