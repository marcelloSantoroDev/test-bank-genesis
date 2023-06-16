import { Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ BookList } />
      <Route exact path="/details" component={ BookDetails } />
    </Switch>
  );
}

export default App;
