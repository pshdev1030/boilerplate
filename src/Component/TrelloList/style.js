import styled from '@emotion/styled';

export const TrelloListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;
  background: grey;
  padding: 20px;
  margin-right: 20px;
  & > h4 {
    flex: 0 0 auto;
    min-height: 20px;
    padding: 10px 8px;
    position: relative;
  }
  & > ul {
    flex: 1 1 auto;
    max-height: 400px;
    margin: 0 4px;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 4px;
  }
  & > ul > li {
    list-style: none;
  }
  & > ul > li > span {
    word-wrap: break-word;
    clear: both;
    color: #172b4d;
    background: lightgrey;
    padding: 10px;
    border-radius: 5px;
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
    text-decoration: none;
  }
  .done {
    background: red;
  }
`;
