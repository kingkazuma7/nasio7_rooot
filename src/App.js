import './App.scss';
import { IconContext } from 'react-icons';
import { FaGithub, FaTwitter, FaBlogger } from "react-icons/fa";
import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <IconContext.Provider value={{ color: '#F2F2F2', size: ' 20px' }}>
            <div className="App-header__inner">
              <Link 
                className="App-link"
                to="https://tech.nasio7.com/"
                target="_blank"
                rel="noopener noreferrer"><FaBlogger />Blog</Link>
              <Link 
                className="App-link"
                to="https://twitter.com/nasio777"
                target="_blank"
                rel="noopener noreferrer"><FaTwitter />Twitter</Link>
              <Link 
                className="App-link"
                to="https://github.com/kingkazuma7"
                target="_blank"
                rel="noopener noreferrer"><FaGithub />GitHub</Link>
            </div>
          </IconContext.Provider>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
