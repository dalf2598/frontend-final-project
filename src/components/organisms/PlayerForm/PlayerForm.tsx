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
import { getRandomQuestions } from "../../../utils/Utils";

const PlayerForm = () => {
  const [difficulty, setDifficulty] = useState<string>(DIFFICULTIES[1].value);
  const [playerName, setPlayerName] = useState<string>("");

  const handleChangeDifficulty = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  const handlePlayButtonClick = () => {
    console.log("difficulty", difficulty);
    console.log("playerName", playerName);
    console.log(
      "availableQuestions",
      getRandomQuestions(QuestionBank, 6, difficulty)
    );
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

      <LoadingDialog isOpen={false} />
    </>
  );
};

export default PlayerForm;
