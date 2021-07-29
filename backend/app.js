const express = require('express');
const mysql = require('mysql');
const app = express();
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
};


app.listen(4000, function() {
  console.log("port4000オッケー！！")
});