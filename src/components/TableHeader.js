import styled from "styled-components";

const SpreadTableHead = styled.thead`
  background: #000000;
  text-align: left;
`;

const SpreadTableHeader = styled.th`
  color: #ffffff;
  padding: 0.5rem;
`;

export const TableHeader = () => {
  return(
    <SpreadTableHead>
      <tr style={{ background: "#000000" }}>
        <SpreadTableHeader>
          <span>AccountId</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Symbol</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Side</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Notional From</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Notional To</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Percent</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Edit</span>
        </SpreadTableHeader>
        <SpreadTableHeader>
          <span>Delete</span>
        </SpreadTableHeader>
      </tr>
    </SpreadTableHead>
  );
}