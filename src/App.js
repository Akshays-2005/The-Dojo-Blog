import NavBar from './NavBar';
import Home from './Home';

function App() {
  const name = "Akshay";
  const link="https://www.google.com/"
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
