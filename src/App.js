import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./components/Drawer";

//pages
import Dashboard from "./pages/Dashboard";
import CreateFellow from "./pages/CreateFellow";
import ListFellow from "./pages/ListFellow";
import ErrorPage from "./pages/ErrorPage";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <Drawer />
        <div>
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
  );
}

export default App;
