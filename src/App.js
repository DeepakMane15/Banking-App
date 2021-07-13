import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home'
import Header from './header'
import Footer from './footer'
import Users from './users'
import Transfer from './transfer'
import Transactions from './transactions'
const App = () => {
return (
  <div>
    <Router>
      <Header/> 
        
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/transfer" exact component={Transfer} />
        <Route path="/transactions" exact component={Transactions} />
        </Switch>
  <Footer/>
  </Router>
  </div>
);
}

export default App;
