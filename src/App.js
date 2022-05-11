import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Cards from './component/card';
import Variants from './component/skleton';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
            <Switch>
        <Route path="/" component={Variants}>
        </Route>
      </Switch>
        
      </BrowserRouter>
      </div>

  );
}

export default App;
