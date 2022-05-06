import styled from "styled-components";

export const Table = styled.table`
  border: 0.2rem solid rgb(52 211 153);
  padding: 1rem;
  width: 100%;
  background-color: rgb(15 23 42);
`;

export const TableHeader = styled.thead`
  background-color: rgb(51 65 85);
  th {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
`;

export const TableBody = styled.tbody`
  tr {
    td {
      background-color: rgb(30 41 59);
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export const RowCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  min-width: 2rem;
  min-height: 2rem;
  accent-color: rgb(52 211 153);
`;
