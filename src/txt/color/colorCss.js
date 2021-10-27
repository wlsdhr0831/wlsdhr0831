const code = `.itemBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.item{
  display: inline-block;
  width: 350px;
  height: 200px;
  text-align: center;
  margin: 20px 20px;
  border-radius: 10px;
  color: black;
  background-color: white;
  position: relative;
  box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in;
}

.background{
  position: fixed;
  top: 0px;
  left: 0px;
  background: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.5s ease-in;
  opacity: 0;
}

.item:hover,
.item:hover .background{
  opacity: 1;
  color: white;
  background: linear-gradient(
    135deg, 
    var(--color-2) 0%, 
    var(--color-1) 100%
  );
}

.title{
  width: 90%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}`;

export default code;