import { useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import {
  DIFFICULTIES,
  DIFFICULTY_LABEL,
  PLAYER_LABEL,
} from "../../../Constants";
import RadioGroup from "../../molecules/RadioGroup/RadioGroup";
import TextField from "../../molecules/TextField/TextField";
import Button from "../../atoms/Button/Button";
import LoadingDialog from "../LoadingDialog/LoadingDialog";
import { QuestionBank } from "../../../backups/QuestionBank";
import {
  getQuestionNumber,
  getQuestionTimer,
  getRandomQuestions,
} from "../../../utils/Utils";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../../contexts/GameContext/GameContext";
import useLeaderBoard from "../../../hooks/useLeaderBoard";

const PlayerForm = () => {
  const {
    setPlayerName: setContextName,
    setQuestions,
    setQuestionTimer,
  } = useGame();

  const { initLeaderboard } = useLeaderBoard();
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState<string>(DIFFICULTIES[1].value);
  const [playerName, setPlayerName] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleChangeDifficulty = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  const handlePlayButtonClick = () => {
    const questions = getRandomQuestions(
      QuestionBank,
      getQuestionNumber(difficulty),
      difficulty
    );
    setContextName(playerName.length === 0 ? "Blank" : playerName);
    setQuestions(questions);
    setQuestionTimer(getQuestionTimer(difficulty));
    setIsDialogOpen(true);
    initLeaderboard();
    setTimeout(() => {
      navigate("/gameplay");
    }, 1500);
  };

  return (
    <>
      <TextField
        label={PLAYER_LABEL}
        value={playerName}
        setValue={setPlayerName}
      />

      <RadioGroup
        label={DIFFICULTY_LABEL}
        options={DIFFICULTIES}
        selectedOption={difficulty}
        handleChange={handleChangeDifficulty}
      />

      <Button
        icon={<PlayArrow />}
        onClick={handlePlayButtonClick}
        text="Play"
      />

      <LoadingDialog isOpen={isDialogOpen} />
    </>
  );
};

export default PlayerForm;
