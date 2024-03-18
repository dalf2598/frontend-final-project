import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ScaffoldProps } from "./Scaffold.types";

const StyledLayoutBox = styled(Box)({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
});

const StyledContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  zIndex: 1,
  backdropFilter: "blur(5px)",
  gap: "15px",
});

const Scaffold = ({ children }: ScaffoldProps) => {
  return (
    <Container maxWidth="sm">
      <StyledLayoutBox>
        <StyledContentBox>{children}</StyledContentBox>
      </StyledLayoutBox>
    </Container>
  );
};

export default Scaffold;
