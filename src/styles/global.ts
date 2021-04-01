import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    background-color:#F2F2F2;
    -webkit-font-smothing:antialiased;
    display:flex;
  }
  body,input,button{
    font-family:'Roboto Slab',serif;
    font-size:16px;
  }

  p,h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }
  button{
    cursor:pointer;
  }

  @media (max-width: 900px) {
    body{
      width:100vh;
      margin:0px;
      padding:0px;
    }
    #root{
      width:100vh;
      margin:0px;
      padding:0px;
    }
    html{
      width:100vh;

    }
  }
`;
