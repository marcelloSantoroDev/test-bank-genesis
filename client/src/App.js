import { Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Header from './components/Header';

function App() {
  return (
    <section className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={ BookList } />
      <Route exact path="/details" component={ BookDetails } />
    </Switch>
    </section>

  );
}

export default App;
