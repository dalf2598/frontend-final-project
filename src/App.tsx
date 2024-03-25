import { Route, Routes, Navigate } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";
import { GameProvider } from "./contexts/GameContext/GameContext";
import Background from "./components/organisms/Background/Background";
import StartMenu from "./components/pages/StartMenu/StartMenu";
import Gameplay from "./components/pages/Gameplay/Gameplay";
import Leaderboard from "./components/pages/Leaderboard/Leaderboard";

function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <Background />
        <Routes>
          <Route path="/" element={<StartMenu />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
