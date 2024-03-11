import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 10.6rem 15.6rem 12.3rem;
  height: 100vh;
  > .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4rem;
    max-height: 40rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.8rem;
      height: 9.62rem;
    }

    &::-webkit-scrollbar-track {
      background: none;
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff859b;
      border-radius: 0.8rem;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #c16474;
      border-radius: 0.8rem;
    }
    > .headerContent {
      > .genericButton {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        background: none;
        padding: 0.25rem 0;
        border: none;

        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-weight: 400;

        color: #ff859b;

        cursor: pointer;
      }

      > .ratingName {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        > h1 {
          font-family: "Robot Slab", serif;
          font-size: 3.6rem;
          line-height: 4.7rem;
          font-weight: 500;

          color: #f4ede8;
        }
      }

      > .autor {
        display: flex;
        align-items: center;

        gap: 0.8rem;

        > img {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 100%;
        }
      }
    }

    > .links {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    > p {
      font-family: "Robot Slab", serif;
      font-size: 1.6rem;
      line-height: 2.1rem;
      font-weight: 400;

      color: #f4ede8;
    }
  }
`;
