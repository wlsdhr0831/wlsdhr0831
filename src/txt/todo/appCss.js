const code = `:root{
  --color-1: #FFAC81;
  --color-2: #FF928B;
  --color-3: #FEC3A6;
  --color-4: #EFE9AE;
  --color-5: #CDEAC0;
}

body {
  margin: 0px;
  padding: 40px 0px 0px 0px;
  background: linear-gradient(var(--color-3), var(--color-2));
  margin: auto;
  width: 90%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

button {
  width: fit-content;
  min-width: 50px;
  height: 50px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

i{
  transition: all ease 0.5s;
}`;

export default code;