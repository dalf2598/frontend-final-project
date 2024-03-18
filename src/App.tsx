import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <p> Hello world !</p>
        <p> Minor change</p>
      </ThemeProvider>
    </>
  );
}

export default App;
