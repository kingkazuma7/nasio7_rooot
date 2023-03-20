import './App.scss';
import { IconContext } from 'react-icons';
import { FaGithub, FaTwitter, FaBlogger } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconContext.Provider value={{ color: '#F2F2F2', size: ' 20px' }}>
          <div className="App-header__inner">
            <a
              className="App-link"
              href="https://tech.nasio7.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBlogger />
              Blog
            </a>
            <a
              className="App-link"
              href="https://twitter.com/nasio777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
              twitter
            </a>
            <a
              className="App-link"
              href="https://github.com/kingkazuma7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </IconContext.Provider>
      </header>
    </div>
  );
}

export default App;
