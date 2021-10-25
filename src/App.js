import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About/About/About';
import Contract from './Components/Contrant/Contract/Contract';
import Projects from './Components/Projects/Projects/Projects';
import Article from './Components/Home/Article/Article';
import NoMatch from './Components/NoMatch/NoMatch';
import Loading from './Components/Loading/Loading.js';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 2500);

  }, []);

  return (
    <>
      {
        isLoading === true ? < Loading /> :

          <Router>
            <Switch>

              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contract" component={Contract} />
              <Route path="/home" component={Home} />
              <Route path="/blog" component={Article} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={NoMatch} />

            </Switch>
          </Router>
      }
    </>

  );
}

export default App;
