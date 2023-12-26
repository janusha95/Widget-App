import styled from "styled-components";

export const SummaryContainer = styled.div`
  // Styling for different color classes
  &.green {
    color: green;
  }
  &.yellow {
    color: yellow;
  }
  &.red {
    color: red;
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
