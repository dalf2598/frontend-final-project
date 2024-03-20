import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LEADERBOARD_HEADERS, LEADERBOARD_TITLE } from "../../../Constants";
import { useState } from "react";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Table from "../../organisms/Table/Table";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import IconButton from "../../molecules/IconButton/IconButton";

const sampleRows = [
  { rank: 1, player: "John Doe", score: 150, level: "Sage" },
  { rank: 2, player: "Jane Smith", score: 130, level: "Sage" },
  { rank: 3, player: "Alice Johnson", score: 120, level: "Sage" },
  { rank: 4, player: "Bob Williams", score: 110, level: "Sage" },
  { rank: 5, player: "Eve Brown", score: 100, level: "Sage" },
  { rank: 6, player: "Michael Davis", score: 95, level: "Sage" },
  { rank: 7, player: "Sarah Wilson", score: 90, level: "Sage" },
  { rank: 8, player: "David Lee", score: 85, level: "Sage" },
  { rank: 9, player: "Laura Taylor", score: 80, level: "Sage" },
  { rank: 10, player: "James Anderson", score: 75, level: "Sage" },
];

const StartMenu = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <Scaffold>
      <IconButton icon={<CloseIcon />} onClick={() => {}} />
      <Typography variant="h3" fontWeight="bold">
        {LEADERBOARD_TITLE}
      </Typography>
      <SearchBar query={query} setQuery={setQuery} />
      <Table headers={LEADERBOARD_HEADERS} rows={sampleRows} />
    </Scaffold>
  );
};

export default StartMenu;
