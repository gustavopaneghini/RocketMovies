import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > div {
    height: 102.4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 4rem 10.6rem 8.5rem 12.3rem;

    > span.headerContent {
      > h1 {
        margin-top: 2.4rem;

        font-family: "Roboto Slab", serif;
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        color: #f4ede8;
      }

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

        cursor: pointer;
        color: #ff859b;
      }
    }

    > .inputWrapper {
      display: flex;
      align-items: center;
      gap: 4rem;

      > input {
        background: #262529;
        max-height: 5.5rem;
        padding: 1.8rem 1.6rem;
        border: none;
        border-radius: 1rem;
        flex: 1;

        color: #948f99;
      }

      > input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
    }

    > textArea {
      width: 100%;
      height: 27.4rem;
      padding: 1.9rem 1.6rem;
      border: none;
      border-radius: 1rem;

      resize: none;

      background: #262529;
      color: #948f99;
    }
    > textArea:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    > .links {
      display: flex;
      flex-direction: column;
      align-items: start;

      gap: 2.4rem;
      > h2 {
        font-family: "Roboto Slab", serif;
        font-size: 2rem;
        line-height: 2.6rem;
        font-weight: 400;

        color: #999591;
      }

      > ul {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        padding: 1.6rem;
        background-color: #0d0c0f;
        width: 100%;
        color: #0d0c0f;

        > .tags {
          display: flex;
          align-items: center;
          gap: 1.6rem;

          padding: 1.6rem;
          border-radius: 1rem;
          cursor: pointer;

          > p {
            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            line-height: 1.9rem;
            font-weight: 400;
            padding: 0.4rem 0;
            color: #ffffff;
          }
        }

        > button {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          padding: 1.6rem;

          border-radius: 1rem;
          color: #948f99;

          background-color: transparent;
          border-style: dashed;
          border-color: #948f99;

          cursor: pointer;
        }
      }
    }

    > .actionButton {
      display: flex;
      align-items: center;
      gap: 4rem;

      > .genericButton {
        flex: 1;
        cursor: pointer;
      }

      > .genericButton:first-child {
        background-color: #0d0c0f;
        padding: 1.6rem;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-weight: 500;

        color: #ff859b;
      }

      > .genericButton:nth-child(2) {
        background-color: #ff859b;
        padding: 1.6rem;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-weight: 500;

        color: #0d0c0f;
      }
    }
  }
`;
