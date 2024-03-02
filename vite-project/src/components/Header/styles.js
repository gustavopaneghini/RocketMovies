import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;
  border-bottom: #3e3b47 solid 1px;

  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3.2rem;
    color: #ff859b;
  }

  > input {
    flex: 1;
    height: 5.6rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    background: #262529;
    padding: 1.9rem 2.4rem;
    color: #948f99;

    &::placeholder {
    }
  }

  > .profile {
    display: grid;
    grid-template-areas: "A B";
    justify-items: stretch;
    align-items: center;

    font-size: 1.4rem;
    line-height: 1.8rem;

    > .named {
      grid-area: A;
      padding: 1.6rem 0.9rem 1.6rem 0;
      text-align: end;

      > p {
        font-weight: bold;
        color: #f4ede8;
      }

      > button {
        grid-area: B;
        font-weight: 400;
        background: transparent;
        border: none;
        color: #948f99;

        cursor: pointer;
      }
    }
    > img {
      grid-area: B;
      width: 6.4rem;

      border: 1px solid #3e3b47;
      border-radius: 3.5rem;
    }
  }
`;
