import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
        background-color: #FFFFFF;
        position: relative;
        margin: 0;
        padding: 0;
        font-family: Verdana, Arial, Helvetica, sans-serif; 
        white-space: pre-line;  
  }

  
  main {
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4.1rem;
    margin-bottom: 2rem;
  }

  .article-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid #ffbb1b;
    border-radius: 5px;
    width: 97vw;
    margin: 2%;
    max-width: 600px;
  }
  .section-container {
    position: relative;
    border: 1px solid #ffbb1b;
    width: 97vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;

  }

  .details-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 92vw;
    max-width: 600px;


    li {
      list-style: none;  
      padding: 0.5rem;
      font-size: 1.1rem;
    }
  }
    

.session-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffbb1b;
  text-align: center;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
  }

  



  button {
    position: absolute;
    right: 3%;
    margin-left: 10%;
    background: none;
    border: none;
    font-size: 1.7rem;
  }
`;
