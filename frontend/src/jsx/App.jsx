import { useEffect, useState } from "react";
import Header from './Header.jsx';
import axios from "axios";
import Form from "./Add.jsx"

function App() {
  
  const [team, setTeam] = useState([]);

  useEffect(() => {
    console.log("副作用関数が実行されました");
    console.log("fetch");

    const url = '/posts';
    axios.get(url)
      .then((res) => {
        setTeam(res.data);
      })
  },[])
  
  return (
    <>
      <Header />
      <div className="Index">
        <div className="IndexContainer">
          <div className="IndexContent__header">
            <h1>ResultSheet</h1>
            <ul className="Navlist">
              <li className="NavList__item">
                <a href="/" className="Match">予選リーグ⤴</a>
              </li>
              <li className="NavList__item">
                <a href="/" className="Midway">中間リーグ⤴</a>
              </li>
              <li className="NavList__item">
                <a href="/" className="Add">+ チーム追加</a>
              </li>
            </ul>
          </div>
          <div className="IndexTable">
            <div className="IndexTable__head">
              <div className="id">No.</div>
              <div className="name">name</div>
              <div className="point">P</div>
              <div className="score">S</div>
              <div className="court">コート</div>
              <div className="point">P</div>
              <div className="score">S</div>
              <div className="court">コート</div>
              <div className="sum">総合P</div>
              <div className="sum">総合S</div>
              <div className="rank"></div>
            </div>
            <ul className="IndexTable__body">
              {team.map(team=>(
                <li key={team.id}>
                  <div className="ItemData">
                    <div className="FlexLeft">
                      <div className="id">{team.id}</div>
                      <div className="name">{team.name}</div>
                    </div>
                    <div className="FlexRight">
                      <div className="point">{team.pre_point}</div>
                      <div className="score">{team.pre_score}</div>
                      <div className="court">{team.court}-{team.number}</div>
                      <div className="edit">編集</div>
                      <div className="point">{team.mid_point}</div>
                      <div className="score">{team.mid_score}</div>
                      <div className="court">{team.mid_court}-{team.mid_number}</div>
                      <div className="edit">編集</div>
                      <div className="point">{team.sum_point}</div>
                      <div className="score">{team.sum_score}</div>
                      <div className="edit">削除</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Form />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;