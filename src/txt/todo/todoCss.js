const code = `.todoListBox {
  width: calc(100% - 60px);
  height: calc(100vh - 190px);
  margin-top: 30px;
  padding: 30px;
  background-color: white;
  border-radius: 30px 30px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
}

.todoListBox::-webkit-scrollbar {
  display: none;
}

.todoItemBox{
  margin-bottom: 10px;
  border: 2px solid #FEC3A6;
  border-radius: 20px;
  padding: 10px;
}

.todoItemBox:hover{
  background-color: #FEC3A6;
  color: white;
}

.todoItemBox span{
  width: calc(100% - 110px);
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
  overflow-wrap: break-word;
  cursor: pointer;
}

.done{
  color: lightgray;
}`;

export default code;