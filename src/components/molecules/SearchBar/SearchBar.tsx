import { Box } from "@mui/material";
import { MAX_CHARACTERS_ALLOWED } from "../../../Constants";
import { styled } from "@mui/system";
import { SearchBarProps } from "./SearchBar.types";
import Field from "../../atoms/Field/Field";

const StyledBox = styled(Box)({
  margin: "0 4rem",
});

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <StyledBox>
      <Field
        value={query}
        onChange={setQuery}
        maxLength={MAX_CHARACTERS_ALLOWED}
        placeholder="Search..."
        fullWidth
      />
    </StyledBox>
  );
};

export default SearchBar;
