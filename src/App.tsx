import StartMenu from "./components/pages/StartMenu/StartMenu";
// import Scaffold from "./components/templates/Scaffold/Scaffold";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <StartMenu />
    </ThemeProvider>
  );
}

export default App;
