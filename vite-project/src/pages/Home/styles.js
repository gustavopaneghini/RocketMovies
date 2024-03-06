import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  width: 100%;

  display: grid;
  grid-template-areas:
    "A B"
    "C C";

  justify-content: space-between;
  align-items: center;
  padding: 5rem 12.3rem;

  color: white;

  > h1 {
    grid-area: A;

    font-family: "Roboto Slab", serif;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.2rem;
  }

  > button {
    grid-area: B;
    justify-self: end;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.8rem;

    width: max-content;
    padding: 1.35rem 3.2rem;

    background: #ff859b;
    border-radius: 0.8rem;

    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
  }

  > section {
    grid-area: C;

    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;
