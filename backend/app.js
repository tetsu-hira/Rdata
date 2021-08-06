const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// 選択されたチーム名を受け取る
// const team1 = document.getElementById('select1').value;
var mysql_host = "database-2.c2u3mwdflnch.us-east-2.rds.amazonaws.com";
var mysql_user = "hiratetsu";
var mysql_dbname = "suzu140";
var mysql_password = "RJy1TeU52Wcr9mwM6EWS";

// var connection = null;
const connection = mysql.createConnection({
  host: mysql_host,
  user: mysql_user,
  password: mysql_password,
  port: '3306',
  database: mysql_dbname,
  multipleStatements: true // 複数のステートメントを有効にする
});

app.get("/", function(req, res) {
  res.send("go to /posts to see posts");
});
app.get("/posts", function(req, res) {
  connection.query("select * from team", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/court", function(req, res) {
  connection.query("select * from court", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
  });
});
app.post("/create", (req, res) => {
  connection.query(
    "INSERT INTO team (id, name) VALUES (?, ?)",
    [ req.body.id, req.body.name ],
    (error, results) => {
      if (error) throw err;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/delete", (req, res) => {
  const id = req.body.id;
  connection.query(
    `DELETE FROM team WHERE id = ?`,
    [ id ],
    (error, results) => {
      if (error) throw err;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const corsOptions = {
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200
};

app.use(cors({
  origin: 'http://localhost:3000', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));

app.listen(4000, () => {
  console.log("port4000オッケー！！")
});