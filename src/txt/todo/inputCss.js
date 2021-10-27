const code = `.topBox {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.topBox span{
  width: 100px;
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 2rem;
}

.inputBox {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
}

.inputBox input {
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: none;
  padding: 0px 20px;
  font-size: 1rem;
  margin-right: 10px;
  transition: all 0.2s ease-in;
}

.inputBox input::placeholder {
  color: var(--color-3);;
}

.inputBox .hidden{
  opacity: 0;
}

.inputBox input:focus {
  outline: none;
}

.inputBox button {
  color: var(--color-3);
  background-color: white;
  border-radius: 15px;
}

.inputBox button:hover {
  color: var(--color-2);;
}

.rotate i{
  transform: rotate( 45deg );
}
`;

export default code;