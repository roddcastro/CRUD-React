import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  table {
    width: 50%;
  }

  th {
    background: blue;
    color: white;
  }

  td {
    padding: 15px;
  }

  button {
    padding: 5px 15px;
    border-radius: 6px;
    border: 0;
    background: blue;
    color: white;
    font-weight: bold;
  }

  button:hover {
    background: lightblue;
  }
`