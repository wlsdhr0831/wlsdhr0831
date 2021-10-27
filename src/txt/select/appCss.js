const code = `:root{
    --color-1: #FFC300;
    --color-2: #fdb833;
    --color-3: #fbec9f;
  }
  
  body {
    margin: 0px;
    padding: 50px;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(var(--color-3), var(--color-2));
    font-family: "Roboto";
  }
  
  #app {
    margin: auto;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  
  button {
    width: fit-content;
    min-width: 50px;
    height: 50px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    padding: 0px 20px 0px 20px;
  }`;

export default code;