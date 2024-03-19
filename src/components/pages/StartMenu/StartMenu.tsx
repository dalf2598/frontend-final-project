import { Typography } from "@mui/material";
import {
  CATEGORIES,
  CATEGORIES_TITLE,
  GAME_DESCRIPTION,
  GAME_TITLE,
} from "../../../Constants";
import Scaffold from "../../templates/Scaffold/Scaffold";
import TileGroup from "../../molecules/TileGroup/TileGroup";
import PlayerForm from "../../organisms/PlayerForm/PlayerForm";

const StartMenu = () => {
  return (
    <Scaffold>
      <Typography variant="h2" fontWeight="bold">
        {GAME_TITLE}
      </Typography>
      <Typography variant="h6">{GAME_DESCRIPTION}</Typography>
      <Typography variant="h5" fontWeight="bold">
        {CATEGORIES_TITLE}
      </Typography>
      <TileGroup
        options={CATEGORIES}
        onClick={(option: number) => console.log(option)}
      />
      <PlayerForm />
    </Scaffold>
  );
};

export default StartMenu;
