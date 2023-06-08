import Content from "./components/Content";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import CardProjectFirst from "./components/CardProjectFirst";
import {lightTheme, darkTheme} from "./data/theme"; //theme objects containing color values
import { useState } from "react";

function App() {

  // changes the value of the theme object to darkTheme or lightTheme, when called 
  const [theme, setTheme] = useState(darkTheme);
  const handleToggleTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  //theme attribute is passed as a prop to each component to use color values in it.
  //handleToggleTheme function is sent as a prop to Navbar component.
  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 h-screen">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
        <ToggleTheme theme={theme} />
      </div>
      <div className="w-3/4 bg-white">
        <Intro theme={theme} />
        <Content theme={theme} />
      </div>
    </div>
  );

}

export default App;
