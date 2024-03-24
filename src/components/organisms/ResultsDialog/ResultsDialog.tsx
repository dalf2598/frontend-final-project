import { Box, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RESULTS_DIALOG_TITLE, RESULTS_LEVEL } from "../../../Constants";
import { ResultsDialogProps } from "./ResultsDialog.types";
import Dialog from "../../templates/Dialog/Dialog";
import Button from "../../atoms/Button/Button";
import { Home, Leaderboard } from "@mui/icons-material";
import useLeaderBoard from "../../../hooks/useLeaderBoard";

const ResultDialog = ({
  isOpen,
  playerName,
  score,
  time,
  level,
}: ResultsDialogProps) => {
  const { updateLeaderboard } = useLeaderBoard();
  const navigate = useNavigate();

  const handleHomeClick = () => navigate("/");

  const handleLeaderboardClick = () => {
    updateLeaderboard({
      rank: 0,
      player: playerName,
      score: score,
      level: level,
    });

    navigate("/leaderboard");
  };

  return (
    <Dialog
      title={RESULTS_DIALOG_TITLE}
      body={
        <Box>
          <Typography variant="h6">Name: {playerName}</Typography>
          <Typography variant="h6">Score: {score}</Typography>
          <Typography variant="h6">Time: {time}s</Typography>
          <Divider
            variant="fullWidth"
            sx={{ bgcolor: "white", marginY: "8px" }}
          />
          <Typography
            variant="h6"
            style={{ textAlign: "center" }}
            fontWeight="bold"
          >
            {RESULTS_LEVEL}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            {level}
          </Typography>
        </Box>
      }
      open={isOpen}
      options={
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button icon={<Home />} onClick={handleHomeClick} text="Home" />
          <Button
            icon={<Leaderboard />}
            onClick={handleLeaderboardClick}
            text="Ranking"
          />
        </Box>
      }
    />
  );
};

export default ResultDialog;
