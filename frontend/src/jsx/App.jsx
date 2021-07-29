import { useEffect, useState } from "react";
import Header from './Header.jsx'

function App() {
  
  const [team, setTeam] = useState([]);

  useEffect(() => {
    console.log("副作用関数が実行されました");
    console.log("fetch");
    const url = '/posts';
    console.log(url);
    fetch(url)
      .then( res => res.json() )
      .then( res => {
        setTeam(res);
      })
  },[])
  
  return (
    <>
      <Header />
      <div className="Index">
        <div className="IndexContainer">
          <div className="IndexContainer__header">
            <h1>ResultSheet</h1>
            <ul className="Navlist">
              <li className="NavList__item">
                <a href="/match" className="Match">予選リーグ⤴</a>
              </li>
              <li className="NavList__item">
                <a href="/midway" className="Midway">中間リーグ⤴</a>
              </li>
              <li className="NavList__item">
                <a href="/new" className="Add">+ チーム追加</a>
              </li>
            </ul>
          </div>
            <ul>
              {team.map(team=>(
                <li key={team.id}>
                  {team.id}:{team.name}
                </li>
              ))}
            </ul>
        </div>

      </div>
    </>
  );
}

export default App;