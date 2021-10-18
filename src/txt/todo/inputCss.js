const code = `.inputBox {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.inputBox span{
  width: 100px;
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 2rem;
}

.inputBox input {
  width: calc(50% - 50px);
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: none;
  padding: 0px 20px;
  font-size: 1rem;
}
.inputBox input::placeholder {
  color: #FEC3A6;
}

.inputBox .hidden{
  visibility: hidden;
}

.inputBox input:focus {
  outline: none;
}

.inputBox button {
  color: #FEC3A6;
  background-color: white;
  border-radius: 15px;
}

.inputBox button:hover {
  color: #FF928B;
}`;

export default code;