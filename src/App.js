
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './components/contact/AddContact';

import Contacts from './components/contact/Contacts';
import Navbar from './components/layouts/Navbar';
import store from "./store";

import './styles/App.scss';


function App() {
  return (
   <Router>
      <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
            </Switch  >
          </div>
        </div>
      </div>
    </Provider>
   </Router>
  );
}

export default App;
