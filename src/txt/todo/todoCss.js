const code = `.todoListBox {
  width: calc(100% - 30px);
  height: calc(100vh - 160px);
  margin-top: 30px;
  padding: 30px 0px 10px 30px;
  background-color: white;
  border-radius: 30px 30px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: scroll;
  overflow-x: hidden;
}

.todoListBox::-webkit-scrollbar {
  width: 40px;
  background-color: transparent;
}

.todoListBox::-webkit-scrollbar-thumb {
  background-color: var(--color-2);
  border-radius: 20px;
  background-clip: padding-box;
  border: 13px solid transparent;
}

.todoItemBox{
  margin-bottom: 10px;
  border: 2px solid var(--color-3);
  border-radius: 20px;
  padding: 10px;
}

.todoItemBox:hover{
  background-color: var(--color-3);
  color: white;
}

.todoItemBox:hover .update,
.todoItemBox:hover .remove{
  opacity: 1;
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

.update, .remove {
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: all 0.2s ease-in;
  opacity: 0;
}

.update {
  color: var(--color-4);;
}

.remove{
  color: var(--color-5);;
}

.update:hover, .remove:hover {
  filter: brightness(130%);
}
.done{
  color: rgb(139, 139, 139);
  text-decoration: line-through;
}`;

export default code;