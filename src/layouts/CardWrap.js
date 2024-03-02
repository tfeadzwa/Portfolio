import styled from "styled-components";

export const CardWrap = styled.div`
  padding: 1.875rem 1.875rem 0;

  @media (min-width: 64em) {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 30px 30px 0;
    height: 100%;
  }
`;
