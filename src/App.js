import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from "./components/Sidenav";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

//pages
import Dashboard from "./pages/Dashboard";
import CreateFellow from "./pages/CreateFellow";
import ListFellow from "./pages/ListFellow";
import ErrorPage from "./pages/ErrorPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: red,
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  pages: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.container}>
          <Sidenav />
          <div className={classes.pages}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/create">
                <CreateFellow />
              </Route>
              <Route path="/list">
                <ListFellow />
              </Route>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
