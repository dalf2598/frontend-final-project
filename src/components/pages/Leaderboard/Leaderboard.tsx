import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { LEADERBOARD_HEADERS, LEADERBOARD_TITLE } from "../../../Constants";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Table from "../../organisms/Table/Table";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import IconButton from "../../molecules/IconButton/IconButton";
import useLeaderBoard from "../../../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const { query, visibleRows, handleQueryChange } = useLeaderBoard();
  const navigate = useNavigate();

  const handleCloseClick = () => navigate("/");

  return (
    <Scaffold>
      <IconButton icon={<CloseIcon />} onClick={handleCloseClick} />
      <Typography variant="h3" fontWeight="bold">
        {LEADERBOARD_TITLE}
      </Typography>
      <SearchBar query={query} setQuery={handleQueryChange} />
      <Table headers={LEADERBOARD_HEADERS} rows={visibleRows} />
    </Scaffold>
  );
};

export default LeaderBoard;
