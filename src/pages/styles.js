import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;

  background: #4e4e4e;
  color: #ffffff;

  font-size: 0.75rem;
  font-weight: bold;
`;

export const SpreadTypeTitleBox = styled.div`
  background: #515960; 
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem 0.25rem 0 0;
`;

export const SpreadTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const DefaultDataComponent = styled.td`
  padding: 0.5rem;
`;

export const LightGreyDataComponent = styled(DefaultDataComponent)`
  background: #484e53;
  color: #b8b8b8;
`;