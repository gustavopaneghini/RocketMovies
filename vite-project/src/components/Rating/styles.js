import styled from "styled-components";

export const Container = styled.div`
  > button {
    background: transparent;
    border: none;
    text-decoration: none;
    list-style: none;
  }
  > label {
    > input[type="radio"] {
      display: none;
    }

    > .star {
      cursor: pointer;
    }
  }
`;
