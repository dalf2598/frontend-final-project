import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <p> Hello world !</p>
      </ThemeProvider>
    </>
  );
}

export default App;
