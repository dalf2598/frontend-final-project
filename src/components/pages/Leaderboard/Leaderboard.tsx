import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { LEADERBOARD_HEADERS, LEADERBOARD_TITLE } from "../../../Constants";
import { useState } from "react";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Table from "../../organisms/Table/Table";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import IconButton from "../../molecules/IconButton/IconButton";
import useLeaderBoard from "../../../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const navigate = useNavigate();
  const { leaderboard } = useLeaderBoard();
  const [query, setQuery] = useState<string>("");

  const handleCloseClick = () => navigate("/");

  return (
    <Scaffold>
      <IconButton icon={<CloseIcon />} onClick={handleCloseClick} />
      <Typography variant="h3" fontWeight="bold">
        {LEADERBOARD_TITLE}
      </Typography>
      <SearchBar query={query} setQuery={setQuery} />
      <Table headers={LEADERBOARD_HEADERS} rows={leaderboard} />
    </Scaffold>
  );
};

export default LeaderBoard;
