import { Switch, Route } from "react-router-dom";
import CounterPage from "pages/CounterPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import UsersPage from "pages/UsersPage";
import ITConsultingPage from "pages/Services/ITConsultingPage";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/counter' component={CounterPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/it-consulting" component={ITConsultingPage} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  );
}

export default App;
