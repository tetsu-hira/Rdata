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
app.get("/game", function(req, res) {
  connection.query("select * from game", function(
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
app.get("/number", function(req, res) {
  connection.query("select * from number", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
  });
});
app.post("/create", (req, res) => {
  console.log(req.body);
  connection.query(
    "INSERT INTO team (id, name) VALUES (?, ?)",
    [ req.body.id, req.body.name ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/delete", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  connection.query(
    "DELETE FROM team WHERE id = ?",
    [ id ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/changecourt", (req, res) => {
  const id = req.body.id;
  const court = req.body.court;
  console.log("開始")
  console.log(req.body);
  console.log("終了")
  console.log(req.body.id);
  console.log(req.body.court);
  connection.query(
  "UPDATE team SET court = ? WHERE id = ?",
    [ court, id ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/changenumber", (req, res) => {
  const id = req.body.id;
  const number = req.body.number;
  console.log("開始")
  console.log(req.body);
  console.log("終了")
  connection.query(
  `UPDATE team SET number = ? WHERE id = ?`,
    [ number, id ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/changemidcourt", (req, res) => {
  const id = req.body.id;
  const court = req.body.court;
  console.log("開始")
  console.log(req.body);
  console.log("終了")
  console.log(req.body.id);
  console.log(req.body.court);
  connection.query(
  "UPDATE team SET mid_court = ? WHERE id = ?",
    [ court, id ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/changemidnumber", (req, res) => {
  const id = req.body.id;
  const number = req.body.number;
  console.log("開始")
  console.log(req.body);
  console.log("終了")
  connection.query(
  `UPDATE team SET mid_number = ? WHERE id = ?`,
    [ number, id ],
    (error, results) => {
      if (error) throw error;
      res.send(results);
      // 一覧画面にリダイレクトする処理
      // res.redirect('http://localhost:3000');
    }
  );
});
app.post("/count", (req, res) => {
  var a1point_A = 0;
  var a1point_B = 0;
  if (Number(req.body.countA1) > Number(req.body.countA2) && Number(req.body.countA3) > Number(req.body.countA4)) {
    a1point_A = 5;
    a1point_B = 0;
  } else if (Number(req.body.countA1) < Number(req.body.countA2) && Number(req.body.countA3) < Number(req.body.countA4)) {
    a1point_A = 0;
    a1point_B = 5;
  } else if (Number(req.body.countA1) > Number(req.body.countA2) && Number(req.body.countA3) < Number(req.body.countA4)) {
    if (Number(req.body.countA1) + Number(req.body.countA3) > Number(req.body.countA2) + Number(req.body.countA4)) {
      a1point_A = 3;
      a1point_B = 1;
    } else if (Number(req.body.countA1) + Number(req.body.countA3) < Number(req.body.countA2) + Number(req.body.countA4)) {
      a1point_A = 1;
      a1point_B = 3;
    } else {
      a1point_A = 2;
      a1point_B = 2;
    }
  } else if (Number(req.body.countA1) < Number(req.body.countA2) && Number(req.body.countA3) > Number(req.body.countA4)) {
    if (Number(req.body.countA1) + Number(req.body.countA3) > Number(req.body.countA2) + Number(req.body.countA4)) {
      a1point_A = 3;
      a1point_B = 1;
    } else if (Number(req.body.countA1) + Number(req.body.countA3) < Number(req.body.countA2) + Number(req.body.countA4)) {
      a1point_A = 1;
      a1point_B = 3;
    } else {
      a1point_A = 2;
      a1point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var a2point_A = 0;
  var a2point_B = 0;
  if (Number(req.body.countA5) > Number(req.body.countA6) && Number(req.body.countA7) > Number(req.body.countA8)) {
    a2point_A = 5;
    a2point_B = 0;
  } else if (Number(req.body.countA5) < Number(req.body.countA6) && Number(req.body.countA7) < Number(req.body.countA8)) {
    a2point_A = 0;
    a2point_B = 5;
  } else if (Number(req.body.countA5) > Number(req.body.countA6) && Number(req.body.countA7) < Number(req.body.countA8)) {
    if (Number(req.body.countA5) + Number(req.body.countA7) > Number(req.body.countA6) + Number(req.body.countA8)) {
      a2point_A = 3;
      a2point_B = 1;
    } else if (Number(req.body.countA5) + Number(req.body.countA7) < Number(req.body.countA6) + Number(req.body.countA8)) {
      a2point_A = 1;
      a2point_B = 3;
    } else {
      a2point_A = 2;
      a2point_B = 2;
    }
  } else if (Number(req.body.countA5) < Number(req.body.countA6) && Number(req.body.countA7) > Number(req.body.countA8)) {
    if (Number(req.body.countA5) + Number(req.body.countA7) > Number(req.body.countA6) + Number(req.body.countA8)) {
      a2point_A = 3;
      a2point_B = 1;
    } else if (Number(req.body.countA5) + Number(req.body.countA7) < Number(req.body.countA6) + Number(req.body.countA8)) {
      a2point_A = 1;
      a2point_B = 3;
    } else {
      a2point_A = 2;
      a2point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var a3point_A = 0;
  var a3point_B = 0;
  if (Number(req.body.countA9) > Number(req.body.countA10) && Number(req.body.countA11) > Number(req.body.countA12)) {
    a3point_A = 5;
    a3point_B = 0;
  } else if (Number(req.body.countA9) < Number(req.body.countA10) && Number(req.body.countA11) < Number(req.body.countA12)) {
    a3point_A = 0;
    a3point_B = 5;
  } else if (Number(req.body.countA9) > Number(req.body.countA10) && Number(req.body.countA11) < Number(req.body.countA12)) {
    if (Number(req.body.countA9) + Number(req.body.countA11) > Number(req.body.countA10) + Number(req.body.countA12)) {
      a3point_A = 3;
      a3point_B = 1;
    } else if (Number(req.body.countA9) + Number(req.body.countA11) < Number(req.body.countA10) + Number(req.body.countA12)) {
      a3point_A = 1;
      a3point_B = 3;
    } else {
      a3point_A = 2;
      a3point_B = 2;
    }
  } else if (Number(req.body.countA9) < Number(req.body.countA10) && Number(req.body.countA11) > Number(req.body.countA12)) {
    if (Number(req.body.countA9) + Number(req.body.countA11) > Number(req.body.countA10) + Number(req.body.countA12)) {
      a3point_A = 3;
      a3point_B = 1;
    } else if (Number(req.body.countA9) + Number(req.body.countA11) < Number(req.body.countA10) + Number(req.body.countA12)) {
      a3point_A = 1;
      a3point_B = 3;
    } else {
      a3point_A = 2;
      a3point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var a4point_A = 0;
  var a4point_B = 0;
  if (Number(req.body.countA13) > Number(req.body.countA14) && Number(req.body.countA15) > Number(req.body.countA16)) {
    a4point_A = 5;
    a4point_B = 0;
  } else if (Number(req.body.countA13) < Number(req.body.countA14) && Number(req.body.countA15) < Number(req.body.countA16)) {
    a4point_A = 0;
    a4point_B = 5;
  } else if (Number(req.body.countA13) > Number(req.body.countA14) && Number(req.body.countA15) < Number(req.body.countA16)) {
    if (Number(req.body.countA13) + Number(req.body.countA15) > Number(req.body.countA14) + Number(req.body.countA16)) {
      a4point_A = 3;
      a4point_B = 1;
    } else if (Number(req.body.countA13) + Number(req.body.countA15) < Number(req.body.countA14) + Number(req.body.countA16)) {
      a4point_A = 1;
      a4point_B = 3;
    } else {
      a4point_A = 2;
      a4point_B = 2;
    }
  } else if (Number(req.body.countA13) < Number(req.body.countA14) && Number(req.body.countA15) > Number(req.body.countA16)) {
    if (Number(req.body.countA13) + Number(req.body.countA15) > Number(req.body.countA14) + Number(req.body.countA16)) {
      a4point_A = 3;
      a4point_B = 1;
    } else if (Number(req.body.countA13) + Number(req.body.countA15) < Number(req.body.countA14) + Number(req.body.countA16)) {
      a4point_A = 1;
      a4point_B = 3;
    } else {
      a4point_A = 2;
      a4point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  console.log("Bコート開始");
  var b1point_A = 0;
  var b1point_B = 0;
  if (Number(req.body.countB1) > Number(req.body.countB2) && Number(req.body.countB3) > Number(req.body.countB4)) {
    b1point_A = 5;
    b1point_B = 0;
  } else if (Number(req.body.countB1) < Number(req.body.countB2) && Number(req.body.countB3) < Number(req.body.countB4)) {
    b1point_A = 0;
    b1point_B = 5;
  } else if (Number(req.body.countB1) > Number(req.body.countB2) && Number(req.body.countB3) < Number(req.body.countB4)) {
    if (Number(req.body.countB1) + Number(req.body.countB3) > Number(req.body.countB2) + Number(req.body.countB4)) {
      b1point_A = 3;
      b1point_B = 1;
    } else if (Number(req.body.countB1) + Number(req.body.countB3) < Number(req.body.countB2) + Number(req.body.countB4)) {
      b1point_A = 1;
      b1point_B = 3;
    } else {
      b1point_A = 2;
      b1point_B = 2;
    }
  } else if (Number(req.body.countB1) < Number(req.body.countB2) && Number(req.body.countB3) > Number(req.body.countB4)) {
    if (Number(req.body.countB1) + Number(req.body.countB3) > Number(req.body.countB2) + Number(req.body.countB4)) {
      b1point_A = 3;
      b1point_B = 1;
    } else if (Number(req.body.countB1) + Number(req.body.countB3) < Number(req.body.countB2) + Number(req.body.countB4)) {
      b1point_A = 1;
      b1point_B = 3;
    } else {
      b1point_A = 2;
      b1point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var b2point_A = 0;
  var b2point_B = 0;
  if (Number(req.body.countB5) > Number(req.body.countB6) && Number(req.body.countB7) > Number(req.body.countB8)) {
    b2point_A = 5;
    b2point_B = 0;
  } else if (Number(req.body.countB5) < Number(req.body.countB6) && Number(req.body.countB7) < Number(req.body.countB8)) {
    b2point_A = 0;
    b2point_B = 5;
  } else if (Number(req.body.countB5) > Number(req.body.countB6) && Number(req.body.countB7) < Number(req.body.countB8)) {
    if (Number(req.body.countB5) + Number(req.body.countB7) > Number(req.body.countB6) + Number(req.body.countB8)) {
      b2point_A = 3;
      b2point_B = 1;
    } else if (Number(req.body.countB5) + Number(req.body.countB7) < Number(req.body.countB6) + Number(req.body.countB8)) {
      b2point_A = 1;
      b2point_B = 3;
    } else {
      b2point_A = 2;
      b2point_B = 2;
    }
  } else if (Number(req.body.countB5) < Number(req.body.countB6) && Number(req.body.countB7) > Number(req.body.countB8)) {
    if (Number(req.body.countB5) + Number(req.body.countB7) > Number(req.body.countB6) + Number(req.body.countB8)) {
      b2point_A = 3;
      b2point_B = 1;
    } else if (Number(req.body.countB5) + Number(req.body.countB7) < Number(req.body.countB6) + Number(req.body.countB8)) {
      b2point_A = 1;
      b2point_B = 3;
    } else {
      b2point_A = 2;
      b2point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var b3point_A = 0;
  var b3point_B = 0;
  if (Number(req.body.countB9) > Number(req.body.countB10) && Number(req.body.countB11) > Number(req.body.countB12)) {
    b3point_A = 5;
    b3point_B = 0;
  } else if (Number(req.body.countB9) < Number(req.body.countB10) && Number(req.body.countB11) < Number(req.body.countB12)) {
    b3point_A = 0;
    b3point_B = 5;
  } else if (Number(req.body.countB9) > Number(req.body.countB10) && Number(req.body.countB11) < Number(req.body.countB12)) {
    if (Number(req.body.countB9) + Number(req.body.countB11) > Number(req.body.countB10) + Number(req.body.countB12)) {
      b3point_A = 3;
      b3point_B = 1;
    } else if (Number(req.body.countB9) + Number(req.body.countB11) < Number(req.body.countB10) + Number(req.body.countB12)) {
      b3point_A = 1;
      b3point_B = 3;
    } else {
      b3point_A = 2;
      b3point_B = 2;
    }
  } else if (Number(req.body.countB9) < Number(req.body.countB10) && Number(req.body.countB11) > Number(req.body.countB12)) {
    if (Number(req.body.countB9) + Number(req.body.countB11) > Number(req.body.countB10) + Number(req.body.countB12)) {
      b3point_A = 3;
      b3point_B = 1;
    } else if (Number(req.body.countB9) + Number(req.body.countB11) < Number(req.body.countB10) + Number(req.body.countB12)) {
      b3point_A = 1;
      b3point_B = 3;
    } else {
      b3point_A = 2;
      b3point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var b4point_A = 0;
  var b4point_B = 0;
  if (Number(req.body.countB13) > Number(req.body.countB14) && Number(req.body.countB15) > Number(req.body.countB16)) {
    b4point_A = 5;
    b4point_B = 0;
  } else if (Number(req.body.countB13) < Number(req.body.countB14) && Number(req.body.countB15) < Number(req.body.countB16)) {
    b4point_A = 0;
    b4point_B = 5;
  } else if (Number(req.body.countB13) > Number(req.body.countB14) && Number(req.body.countB15) < Number(req.body.countB16)) {
    if (Number(req.body.countB13) + Number(req.body.countB15) > Number(req.body.countB14) + Number(req.body.countB16)) {
      b4point_A = 3;
      b4point_B = 1;
    } else if (Number(req.body.countB13) + Number(req.body.countB15) < Number(req.body.countB14) + Number(req.body.countB16)) {
      b4point_A = 1;
      b4point_B = 3;
    } else {
      b4point_A = 2;
      b4point_B = 2;
    }
  } else if (Number(req.body.countB13) < Number(req.body.countB14) && Number(req.body.countB15) > Number(req.body.countB16)) {
    if (Number(req.body.countB13) + Number(req.body.countB15) > Number(req.body.countB14) + Number(req.body.countB16)) {
      b4point_A = 3;
      b4point_B = 1;
    } else if (Number(req.body.countB13) + Number(req.body.countB15) < Number(req.body.countB14) + Number(req.body.countB16)) {
      b4point_A = 1;
      b4point_B = 3;
    } else {
      b4point_A = 2;
      b4point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  console.log("Cコート開始");
  var c1point_A = 0;
  var c1point_B = 0;
  if (Number(req.body.countC1) > Number(req.body.countC2) && Number(req.body.countC3) > Number(req.body.countC4)) {
    c1point_A = 5;
    c1point_B = 0;
  } else if (Number(req.body.countC1) < Number(req.body.countC2) && Number(req.body.countC3) < Number(req.body.countC4)) {
    c1point_A = 0;
    c1point_B = 5;
  } else if (Number(req.body.countC1) > Number(req.body.countC2) && Number(req.body.countC3) < Number(req.body.countC4)) {
    if (Number(req.body.countC1) + Number(req.body.countC3) > Number(req.body.countC2) + Number(req.body.countC4)) {
      c1point_A = 3;
      c1point_B = 1;
    } else if (Number(req.body.countC1) + Number(req.body.countC3) < Number(req.body.countC2) + Number(req.body.countC4)) {
      c1point_A = 1;
      c1point_B = 3;
    } else {
      c1point_A = 2;
      c1point_B = 2;
    }
  } else if (Number(req.body.countC1) < Number(req.body.countC2) && Number(req.body.countC3) > Number(req.body.countC4)) {
    if (Number(req.body.countC1) + Number(req.body.countC3) > Number(req.body.countC2) + Number(req.body.countC4)) {
      c1point_A = 3;
      c1point_B = 1;
    } else if (Number(req.body.countC1) + Number(req.body.countC3) < Number(req.body.countC2) + Number(req.body.countC4)) {
      c1point_A = 1;
      c1point_B = 3;
    } else {
      c1point_A = 2;
      c1point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var c2point_A = 0;
  var c2point_B = 0;
  if (Number(req.body.countC5) > Number(req.body.countC6) && Number(req.body.countC7) > Number(req.body.countC8)) {
    c2point_A = 5;
    c2point_B = 0;
  } else if (Number(req.body.countC5) < Number(req.body.countC6) && Number(req.body.countC7) < Number(req.body.countC8)) {
    c2point_A = 0;
    c2point_B = 5;
  } else if (Number(req.body.countC5) > Number(req.body.countC6) && Number(req.body.countC7) < Number(req.body.countC8)) {
    if (Number(req.body.countC5) + Number(req.body.countC7) > Number(req.body.countC6) + Number(req.body.countC8)) {
      c2point_A = 3;
      c2point_B = 1;
    } else if (Number(req.body.countC5) + Number(req.body.countC7) < Number(req.body.countC6) + Number(req.body.countC8)) {
      c2point_A = 1;
      c2point_B = 3;
    } else {
      c2point_A = 2;
      c2point_B = 2;
    }
  } else if (Number(req.body.countC5) < Number(req.body.countC6) && Number(req.body.countC7) > Number(req.body.countC8)) {
    if (Number(req.body.countC5) + Number(req.body.countC7) > Number(req.body.countC6) + Number(req.body.countC8)) {
      c2point_A = 3;
      c2point_B = 1;
    } else if (Number(req.body.countC5) + Number(req.body.countC7) < Number(req.body.countC6) + Number(req.body.countC8)) {
      c2point_A = 1;
      c2point_B = 3;
    } else {
      c2point_A = 2;
      c2point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var c3point_A = 0;
  var c3point_B = 0;
  if (Number(req.body.countC9) > Number(req.body.countC10) && Number(req.body.countC11) > Number(req.body.countC12)) {
    c3point_A = 5;
    c3point_B = 0;
  } else if (Number(req.body.countC9) < Number(req.body.countC10) && Number(req.body.countC11) < Number(req.body.countC12)) {
    c3point_A = 0;
    c3point_B = 5;
  } else if (Number(req.body.countC9) > Number(req.body.countC10) && Number(req.body.countC11) < Number(req.body.countC12)) {
    if (Number(req.body.countC9) + Number(req.body.countC11) > Number(req.body.countC10) + Number(req.body.countC12)) {
      c3point_A = 3;
      c3point_B = 1;
    } else if (Number(req.body.countC9) + Number(req.body.countC11) < Number(req.body.countC10) + Number(req.body.countC12)) {
      c3point_A = 1;
      c3point_B = 3;
    } else {
      c3point_A = 2;
      c3point_B = 2;
    }
  } else if (Number(req.body.countC9) < Number(req.body.countC10) && Number(req.body.countC11) > Number(req.body.countC12)) {
    if (Number(req.body.countC9) + Number(req.body.countC11) > Number(req.body.countC10) + Number(req.body.countC12)) {
      c3point_A = 3;
      c3point_B = 1;
    } else if (Number(req.body.countC9) + Number(req.body.countC11) < Number(req.body.countC10) + Number(req.body.countC12)) {
      c3point_A = 1;
      c3point_B = 3;
    } else {
      c3point_A = 2;
      c3point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var c4point_A = 0;
  var c4point_B = 0;
  if (Number(req.body.countC13) > Number(req.body.countC14) && Number(req.body.countC15) > Number(req.body.countC16)) {
    c4point_A = 5;
    c4point_B = 0;
  } else if (Number(req.body.countC13) < Number(req.body.countC14) && Number(req.body.countC15) < Number(req.body.countC16)) {
    c4point_A = 0;
    c4point_B = 5;
  } else if (Number(req.body.countC13) > Number(req.body.countC14) && Number(req.body.countC15) < Number(req.body.countC16)) {
    if (Number(req.body.countC13) + Number(req.body.countC15) > Number(req.body.countC14) + Number(req.body.countC16)) {
      c4point_A = 3;
      c4point_B = 1;
    } else if (Number(req.body.countC13) + Number(req.body.countC15) < Number(req.body.countC14) + Number(req.body.countC16)) {
      c4point_A = 1;
      c4point_B = 3;
    } else {
      c4point_A = 2;
      c4point_B = 2;
    }
  } else if (Number(req.body.countC13) < Number(req.body.countC14) && Number(req.body.countC15) > Number(req.body.countC16)) {
    if (Number(req.body.countC13) + Number(req.body.countC15) > Number(req.body.countC14) + Number(req.body.countC16)) {
      c4point_A = 3;
      c4point_B = 1;
    } else if (Number(req.body.countC13) + Number(req.body.countC15) < Number(req.body.countC14) + Number(req.body.countC16)) {
      c4point_A = 1;
      c4point_B = 3;
    } else {
      c4point_A = 2;
      c4point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  console.log("Dコート開始");
  var d1point_A = 0;
  var d1point_B = 0;
  if (Number(req.body.countD1) > Number(req.body.countD2) && Number(req.body.countD3) > Number(req.body.countD4)) {
    d1point_A = 5;
    d1point_B = 0;
  } else if (Number(req.body.countD1) < Number(req.body.countD2) && Number(req.body.countD3) < Number(req.body.countD4)) {
    d1point_A = 0;
    d1point_B = 5;
  } else if (Number(req.body.countD1) > Number(req.body.countD2) && Number(req.body.countD3) < Number(req.body.countD4)) {
    if (Number(req.body.countD1) + Number(req.body.countD3) > Number(req.body.countD2) + Number(req.body.countD4)) {
      d1point_A = 3;
      d1point_B = 1;
    } else if (Number(req.body.countD1) + Number(req.body.countD3) < Number(req.body.countD2) + Number(req.body.countD4)) {
      d1point_A = 1;
      d1point_B = 3;
    } else {
      d1point_A = 2;
      d1point_B = 2;
    }
  } else if (Number(req.body.countD1) < Number(req.body.countD2) && Number(req.body.countD3) > Number(req.body.countD4)) {
    if (Number(req.body.countD1) + Number(req.body.countD3) > Number(req.body.countD2) + Number(req.body.countD4)) {
      d1point_A = 3;
      d1point_B = 1;
    } else if (Number(req.body.countD1) + Number(req.body.countD3) < Number(req.body.countD2) + Number(req.body.countD4)) {
      d1point_A = 1;
      d1point_B = 3;
    } else {
      d1point_A = 2;
      d1point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var d2point_A = 0;
  var d2point_B = 0;
  if (Number(req.body.countD5) > Number(req.body.countD6) && Number(req.body.countD7) > Number(req.body.countD8)) {
    d2point_A = 5;
    d2point_B = 0;
  } else if (Number(req.body.countD5) < Number(req.body.countD6) && Number(req.body.countD7) < Number(req.body.countD8)) {
    d2point_A = 0;
    d2point_B = 5;
  } else if (Number(req.body.countD5) > Number(req.body.countD6) && Number(req.body.countD7) < Number(req.body.countD8)) {
    if (Number(req.body.countD5) + Number(req.body.countD7) > Number(req.body.countD6) + Number(req.body.countD8)) {
      d2point_A = 3;
      d2point_B = 1;
    } else if (Number(req.body.countD5) + Number(req.body.countD7) < Number(req.body.countD6) + Number(req.body.countD8)) {
      d2point_A = 1;
      d2point_B = 3;
    } else {
      d2point_A = 2;
      d2point_B = 2;
    }
  } else if (Number(req.body.countD5) < Number(req.body.countD6) && Number(req.body.countD7) > Number(req.body.countD8)) {
    if (Number(req.body.countD5) + Number(req.body.countD7) > Number(req.body.countD6) + Number(req.body.countD8)) {
      d2point_A = 3;
      d2point_B = 1;
    } else if (Number(req.body.countD5) + Number(req.body.countD7) < Number(req.body.countD6) + Number(req.body.countD8)) {
      d2point_A = 1;
      d2point_B = 3;
    } else {
      d2point_A = 2;
      d2point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var d3point_A = 0;
  var d3point_B = 0;
  if (Number(req.body.countD9) > Number(req.body.countD10) && Number(req.body.countD11) > Number(req.body.countD12)) {
    d3point_A = 5;
    d3point_B = 0;
  } else if (Number(req.body.countD9) < Number(req.body.countD10) && Number(req.body.countD11) < Number(req.body.countD12)) {
    d3point_A = 0;
    d3point_B = 5;
  } else if (Number(req.body.countD9) > Number(req.body.countD10) && Number(req.body.countD11) < Number(req.body.countD12)) {
    if (Number(req.body.countD9) + Number(req.body.countD11) > Number(req.body.countD10) + Number(req.body.countD12)) {
      d3point_A = 3;
      d3point_B = 1;
    } else if (Number(req.body.countD9) + Number(req.body.countD11) < Number(req.body.countD10) + Number(req.body.countD12)) {
      d3point_A = 1;
      d3point_B = 3;
    } else {
      d3point_A = 2;
      d3point_B = 2;
    }
  } else if (Number(req.body.countD9) < Number(req.body.countD10) && Number(req.body.countD11) > Number(req.body.countD12)) {
    if (Number(req.body.countD9) + Number(req.body.countD11) > Number(req.body.countD10) + Number(req.body.countD12)) {
      d3point_A = 3;
      d3point_B = 1;
    } else if (Number(req.body.countD9) + Number(req.body.countD11) < Number(req.body.countD10) + Number(req.body.countD12)) {
      d3point_A = 1;
      d3point_B = 3;
    } else {
      d3point_A = 2;
      d3point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  var d4point_A = 0;
  var d4point_B = 0;
  if (Number(req.body.countD13) > Number(req.body.countD14) && Number(req.body.countD15) > Number(req.body.countD16)) {
    d4point_A = 5;
    d4point_B = 0;
  } else if (Number(req.body.countD13) < Number(req.body.countD14) && Number(req.body.countD15) < Number(req.body.countD16)) {
    d4point_A = 0;
    d4point_B = 5;
  } else if (Number(req.body.countD13) > Number(req.body.countD14) && Number(req.body.countD15) < Number(req.body.countD16)) {
    if (Number(req.body.countD13) + Number(req.body.countD15) > Number(req.body.countD14) + Number(req.body.countD16)) {
      d4point_A = 3;
      d4point_B = 1;
    } else if (Number(req.body.countD13) + Number(req.body.countD15) < Number(req.body.countD14) + Number(req.body.countD16)) {
      d4point_A = 1;
      d4point_B = 3;
    } else {
      d4point_A = 2;
      d4point_B = 2;
    }
  } else if (Number(req.body.countD13) < Number(req.body.countD14) && Number(req.body.countD15) > Number(req.body.countD16)) {
    if (Number(req.body.countD13) + Number(req.body.countD15) > Number(req.body.countD14) + Number(req.body.countD16)) {
      d4point_A = 3;
      d4point_B = 1;
    } else if (Number(req.body.countD13) + Number(req.body.countD15) < Number(req.body.countD14) + Number(req.body.countD16)) {
      d4point_A = 1;
      d4point_B = 3;
    } else {
      d4point_A = 2;
      d4point_B = 2;
    }
  } else {
    console.log('エラー');
  }
  connection.query(
  `
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "a1";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "a2";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "a3";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "a4";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "b1";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "b2";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "b3";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "b4";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "c1";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "c2";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "c3";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "c4";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "d1";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "d2";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "d3";
    UPDATE game SET result1 = ?, result2 = ?, result3 = ?, result4 = ?, point_A = ?, point_B = ? WHERE game_id = "d4";
    update team D, (SELECT C.id, C.name, sum(C.point_AB) AS sum_pointAB, sum(C.score_AB) AS sum_scoreAB FROM (select B.id, B.name, sum(A.point_A) as point_AB, sum(A.result1) + sum(A.result3) - sum(A.result2) - sum(A.result4) as score_AB from game A inner join team B on A.court = B.court collate utf8_general_ci and A.number_A = B.number group by B.id union all select B.id, B.name, sum(A.point_B) as point_AB, sum(A.result2) + sum(A.result4) - sum(A.result1) - sum(A.result3) as score_AB from game A inner join team B on A.court = B.court collate utf8_general_ci and A.number_B = B.number group by B.id) as C group by C.id ) E set D.pre_point = E.sum_pointAB, D.pre_score = E.sum_scoreAB where D.id = E.id;UPDATE team H, (SELECT H.id, H.name, sum(H.point_FG) as sum_pointFG, sum(H.score_FG) as sum_scoreFG FROM ( SELECT G.id, G.name, sum(F.point_A) as point_FG, sum(F.result1) + sum(F.result3) - sum(F.result2) - sum(F.result4) as score_FG FROM game2 F INNER JOIN team G ON F.court = G.mid_court collate utf8_general_ci AND F.number_A = G.mid_number group by G.id union all select G.id, G.name, sum(F.point_B) as point_FG, sum(F.result2) + sum(F.result4) - sum(F.result1) - sum(F.result3) as score_FG FROM game2 F INNER JOIN team G ON F.court = G.mid_court collate utf8_general_ci AND F.number_B = G.mid_number group by G.id) as H group by H.id) I SET H.mid_point = I.sum_pointFG, H.mid_score = I.sum_scoreFG where H.id = I.id;
    update team D, (SELECT C.id, C.name, sum(C.point_AB) AS sum_pointAB, sum(C.score_AB) AS sum_scoreAB FROM (select B.id, B.name, sum(A.point_A) as point_AB, sum(A.result1) + sum(A.result3) - sum(A.result2) - sum(A.result4) as score_AB from game A inner join team B on A.court = B.court collate utf8_general_ci and A.number_A = B.number group by B.id union all select B.id, B.name, sum(A.point_B) as point_AB, sum(A.result2) + sum(A.result4) - sum(A.result1) - sum(A.result3) as score_AB from game A inner join team B on A.court = B.court collate utf8_general_ci and A.number_B = B.number group by B.id) as C group by C.id ) E set D.pre_point = E.sum_pointAB, D.pre_score = E.sum_scoreAB where D.id = E.id;UPDATE team H, (SELECT H.id, H.name, sum(H.point_FG) as sum_pointFG, sum(H.score_FG) as sum_scoreFG FROM ( SELECT G.id, G.name, sum(F.point_A) as point_FG, sum(F.result1) + sum(F.result3) - sum(F.result2) - sum(F.result4) as score_FG FROM game2 F INNER JOIN team G ON F.court = G.mid_court collate utf8_general_ci AND F.number_A = G.mid_number group by G.id union all select G.id, G.name, sum(F.point_B) as point_FG, sum(F.result2) + sum(F.result4) - sum(F.result1) - sum(F.result3) as score_FG FROM game2 F INNER JOIN team G ON F.court = G.mid_court collate utf8_general_ci AND F.number_B = G.mid_number group by G.id) as H group by H.id) I SET H.mid_point = I.sum_pointFG, H.mid_score = I.sum_scoreFG where H.id = I.id;UPDATE team SET sum_point = pre_point + mid_point, sum_score = pre_score + mid_score
  
  `,
    [ req.body.countA1, req.body.countA2, req.body.countA3, req.body.countA4, a1point_A, a1point_B, req.body.countA5, req.body.countA6, req.body.countA7, req.body.countA8, a2point_A, a2point_B, req.body.countA9, req.body.countA10, req.body.countA11, req.body.countA12, a3point_A, a3point_B, req.body.countA13, req.body.countA14, req.body.countA15, req.body.countA16, a4point_A, a4point_B, req.body.countB1, req.body.countB2, req.body.countB3, req.body.countB4, b1point_A, b1point_B, req.body.countB5, req.body.countB6, req.body.countB7, req.body.countB8, b2point_A, b2point_B, req.body.countB9, req.body.countB10, req.body.countB11, req.body.countB12, b3point_A, b3point_B, req.body.countB13, req.body.countB14, req.body.countB15, req.body.countB16, b4point_A, b4point_B, req.body.countC1, req.body.countC2, req.body.countC3, req.body.countC4, c1point_A, c1point_B, req.body.countC5, req.body.countC6, req.body.countC7, req.body.countC8, c2point_A, c2point_B, req.body.countC9, req.body.countC10, req.body.countC11, req.body.countC12, c3point_A, c3point_B, req.body.countC13, req.body.countC14, req.body.countC15, req.body.countC16, c4point_A, c4point_B, req.body.countD1, req.body.countD2, req.body.countD3, req.body.countD4, d1point_A, d1point_B, req.body.countD5, req.body.countD6, req.body.countD7, req.body.countD8, d2point_A, d2point_B, req.body.countD9, req.body.countD10, req.body.countD11, req.body.countD12, d3point_A, d3point_B, req.body.countD13, req.body.countD14, req.body.countD15, req.body.countD16, d4point_A, d4point_B ],
    (error, results) => {
      if (error) throw error;
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
  origin: true, //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));

app.listen(4000, () => {
  console.log("port4000オッケー！！")
});