import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;

  table {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  th {
    background: blue;
    color: white;
  }

  td {
    padding: 15px;
    border: 1px solid black;
  }

  button {
    margin-left: 10px;
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