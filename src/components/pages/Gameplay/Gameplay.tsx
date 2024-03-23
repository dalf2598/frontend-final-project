import { Typography, LinearProgress } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { MOCK_GAME_OPTIONS } from "../../../Constants";
import { useGame } from "../../../contexts/GameContext/GameContext";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Question from "../../molecules/Question/Question";
import Metrics from "../../molecules/Metrics/Metrics";
import TileGroup from "../../molecules/TileGroup/TileGroup";

const Gameplay = () => {
  const { playerName, questions, questionTimer: questionTime } = useGame();
  console.log("playerName: ", playerName);
  console.log("questions: ", questions);
  console.log("questionTime: ", questionTime);

  return (
    <Scaffold>
      <LinearProgress variant="determinate" value={50} />
      <Typography variant="h2" fontWeight="bold">
        Question
      </Typography>
      <Question
        category={"History"}
        question={
          "This is a very interesting question that will expand a little bit, maybe it can expand even more ?"
        }
        icon={<AutoStoriesIcon sx={{ fontSize: "4rem" }} />}
      />
      <Metrics score={20} time={50} />
      <TileGroup
        options={MOCK_GAME_OPTIONS}
        onClick={(option: number) => console.log(option)}
      />
    </Scaffold>
  );
};

export default Gameplay;
