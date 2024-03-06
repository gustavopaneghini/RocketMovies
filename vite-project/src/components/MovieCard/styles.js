import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 133, 155, 5%);
  border-radius: 1.6rem;
  padding: 3.2rem;

  > h2 {
    margin-bottom: 0.8rem;

    font-family: "Roboto Slab", serif;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3.2rem;

    color: #f4ede8;
  }

  > p {
    margin-top: 1.5rem;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;

    color: #999591;
  }

  > ul {
    margin-top: 1.5rem;
    
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
