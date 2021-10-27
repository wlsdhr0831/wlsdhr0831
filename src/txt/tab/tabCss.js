const code = `.tabBox {
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
}

.tab {
  color: white;
  padding: 10px;
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.tab h2 {
  cursor: pointer;
  color: var(--color-1);
  font-size: 1.25rem;
  display: inline-block;
  transition: all 0.5s ease-in;
  padding: 10px 10px;
  margin: 0px;
}

.tab .hover {
  color: white;
  font-size: 2.5rem;
}`;

export default code;