import Scaffold from "./components/templates/Scaffold/Scaffold";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Scaffold>
          <p>Hello World ! </p>
        </Scaffold>
      </ThemeProvider>
    </>
  );
}

export default App;
