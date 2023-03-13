import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events/Events';

function App() {
  const [width, setwidth] = React.useState(0);

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setwidth(window.innerWidth);
    // setheight(window.innerHeight);
  };

  return (
    <>
    <div className="App">
      <Navbar width={width} />
      <Home />
      <Events />
    </div>
    </>
    
  );
}

export default App;
