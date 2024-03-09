import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: white;

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 13.4rem;
    padding-right: 15.9rem;

    > .logo {
      margin-bottom: 4.8rem;
      > h1 {
        font-family: "Roboto Slab", serif;
        line-height: 6.3rem;
        font-size: 4.8rem;
        font-weight: 800;

        color: #ff859b;
      }

      > p {
        font-family: "Roboto Slab", serif;
        font-size: 1.4rem;
        font-weight: 400;
        color: #cac4cf;
      }
    }

    > h2 {
      font-family: "Roboto Slab", serif;
      line-height: 3.2rem;
      font-size: 2.4rem;
      font-weight: 500;

      color: #f4ede8;

      margin-bottom: 4.8rem;
    }
    
    > .inputSection {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      > .inputWrapper {
        background: #262529;
        display: flex;
        align-items: center;

        height: 4.8rem;
        padding: 1.8rem 1.2rem;

        gap: 1.2rem;
        border-radius: 1rem;

        > input {
          border: none;
          background: transparent;

          &::placeholder {
            color: #948f99;
          }
        }
      }
      margin-bottom: 2.4rem;
    }

    > button {
      width: 100%;
      margin-bottom: 4.8rem;

      background: #ff859b;
      border: none;

      padding: 1.6rem 0;

      border-radius: 1rem;
      text-align: center;
    }

    > button.signUp {
      background: none;
      border: none;
      border-radius: 1rem;

      padding: 1.6rem 0;

      color: #ff859b;

      text-align: center;
    }
  }

  > span.backgroundImg {
    width: 100%;
    /* height: 100vh; */
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;
