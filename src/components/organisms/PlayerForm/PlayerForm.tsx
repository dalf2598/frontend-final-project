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
import usePlayerForm from "../../../hooks/usePlayerForm";

const PlayerForm = () => {
  const {
    difficulty,
    playerName,
    setPlayerName,
    isDialogOpen,
    handleChangeDifficulty,
    handlePlayButtonClick,
  } = usePlayerForm();

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
