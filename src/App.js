import logo from './logo.svg'
import './App.css'
import Image from './Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          fileName="super-cool-banner"
          alt="Dramatic mountain landscape with gray sky and single bird flying overhead"
          height="600"
          width="1000"
          className="App-banner-image"
          sizes="100vw"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
