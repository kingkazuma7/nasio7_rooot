import './App.scss';
import { IconContext } from 'react-icons';
import { FaGithub, FaTwitter, FaBlogger, FaBook } from "react-icons/fa";
import { Link, BrowserRouter } from 'react-router-dom';
import Profile from './component/Profile';

function App() {
  return (
    <div className="container">
      <Profile />
      <header className="App-header">
        <IconContext.Provider value={{ color: '#F2F2F2', size: ' 20px' }}>
          <div className="App-header__inner">
            <a 
              className="App-link"
              href="https://tech.nasio7.com/"
              target="_blank"
              rel="noopener noreferrer"><FaBlogger />Blog</a>
            <a 
              className="App-link"
              href="https://twitter.com/nasio777"
              target="_blank"
              rel="noopener noreferrer"><FaTwitter />Twitter</a>
            <a 
              className="App-link"
              href="https://github.com/kingkazuma7"
              target="_blank"
              rel="noopener noreferrer"><FaGithub />GitHub</a>
            <a 
              className="App-link"
              href="https://bookmeter.com/users/1402463"
              target="_blank"
              rel="noopener noreferrer"><FaBook />積読</a>
          </div>
        </IconContext.Provider>
      </header>
    </div>
  );
}

export default App;
