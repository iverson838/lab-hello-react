// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import drop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div id="nav">
        <img id="logo" src={logo} alt={logo} />
        <img src={drop} alt={drop} />
      </div>
      <div id="top">
        <h1>Say Hello to ReactJS</h1>
        <p>
          You will learn how to use the moste pouplar frontend library, and
          become a super Ninja developer
        </p>
        <h2>Awesome</h2>
      </div>
      <div class="bottom">
        <div>
          <img src={icon1} alt={icon1} />
          <h1>Declarative</h1>
          <p>React make it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt={icon2} />
          <h1>Components</h1>
          <p>Build encapsulated componentes that manage their state</p>
        </div>

        <div>
          <img src={icon3} alt={icon3} />
          <h1>Components</h1>
          <p>Build encapsulated componentes that manage their state</p>
        </div>

        <div>
          <img src={icon4} alt={icon4} />
          <h1>Components</h1>
          <p>Build encapsulated componentes that manage their state</p>
        </div>
      </div>
    </div>
  );
}
export default App;
