<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
<header>
  <h1>TO-DO List</h1>
</header>
<main>
  <div class="addTODO">
    <div>
      <input type="text" id="addTitle">
    </div>
    <select>
      <option value="1" class="green"></option>
      <option value="2" class="blue"></option>
      <option value="3" class="red"></option>
    </select>
    <div>
      <input type="button" value="Добавить" id="addBtn">
    </div>
  </div>
  <div class="TODO">
  </div>
</main>
</body>
<script src="assets/app.js"></script>
</html>
