import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 0 14.4rem;

  > header::before {
    content: "";
    width: 100%;
    min-height: 14.4rem;
    background: rgba(255, 133, 155, 5%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  > header button {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.8rem;
    margin-top: 6.4rem;

    background: none;
    border: none;

    color: #ff859b;

    cursor: pointer;
  }

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 5.1rem auto;
    padding-bottom: 5rem;
    position: absolute;
    top: 0;
    left: 0;

    > .profilePicture {
      position: relative;
      display: flex;

      > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 9.3rem;
      }

      > button {
        position: absolute;
        bottom: 0;
        right: 0;

        border-radius: 100%;

        background-color: #ff859b;
        padding: 1.4rem;

        cursor: pointer;
      }
    }

    > form {
      margin-top: 6.4rem;
      > .updateNameEmail {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 0.8rem;
        margin-bottom: 2.4rem;
        .inputWrapper {
          background: #262529;

          display: flex;
          align-items: center;

          padding: 1.8rem 1.2rem;
          gap: 1.2rem;
          border-radius: 1rem;

          > input {
            background: transparent;
            border: none;
            &::placeholder {
              color: #f4ede8;
            }
          }
        }
      }

      > .updatePassword {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 0.8rem;
        .inputWrapper {
          background: #262529;

          display: flex;
          align-items: center;

          padding: 1.8rem 1.2rem;
          gap: 1.2rem;
          border-radius: 1rem;

          > input {
            background: transparent;
            border: none;
            color: #948f99;
          }
        }
      }
      > button {
        width: 100%;
        margin-top: 2.4rem;
        padding: 1.4rem;

        border: none;
        background: #ff859b;
        border-radius: 1rem;

        color: #312e38;
        font-weight: 500;
        text-align: center;

        cursor: pointer;
      }
    }
  }
`;
