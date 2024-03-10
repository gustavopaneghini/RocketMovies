import styled from "styled-components";

export const Container = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    padding: 4.7rem 10.6rem 5.8rem 12.3rem;

    > .headerContent {
      margin-bottom: 4rem;
      border: none;
      display: flex;
      justify-content: space-between;

      > h1 {
        font-size: 3.2rem;
        font-weight: 400;
        color: #ffffff;
      }

      > .genericButton {
        color: #1c1b1e;
      }
    }

    > .table {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      max-height: 71.6rem;
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

      > .cardsComponents {
        > p {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          color: #999591;
        }
      }
    }
  }
`;
