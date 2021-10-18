const code = `<html>
<head>
  <meta charset="UTF-8" />
  <title>To Do</title>
  <link rel="stylesheet" type="text/css" href="./css/app.css" ></link>
  <link rel="stylesheet" type="text/css" href="./css/input.css" ></link>
  <link rel="stylesheet" type="text/css" href="./css/list.css" ></link>
  <link rel="stylesheet" type="text/css" href="./css/todo.css" ></link>
  <script src="https://kit.fontawesome.com/3abef1146b.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="inputBox">
      <span class="status"></span>
      <input class="hidden" placeholder="할 일을 입력하세요."/>
      <button>+</button>
    </div>
    <div class="todoListBox">
    </div>
    <script type="text/javascript" src="./js/app.js"></script>
</body>
</html>`;

export default code;