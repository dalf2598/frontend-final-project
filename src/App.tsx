// import Background from "./components/organisms/Background/Background";
import StartMenu from "./components/pages/StartMenu/StartMenu";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      {/* <Background /> */}
      <StartMenu />
    </ThemeProvider>
  );
}

export default App;
