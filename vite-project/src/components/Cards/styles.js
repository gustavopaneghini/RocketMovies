import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-right: 1.6rem;
  background: rgba(255, 133, 155, 5%);
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    > h2 {
      color: #f4ede8;
    }
  }

  > ul {
    display: flex;
    gap: 0.8rem;
  }
`;
