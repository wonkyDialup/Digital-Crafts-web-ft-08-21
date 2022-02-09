import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header header header"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar formcontainer formcontainer formcontainer"
    "sidebar footer footer footer";
  grid-template-rows: auto;
`;