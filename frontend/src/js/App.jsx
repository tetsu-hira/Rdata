import { useEffect, useState } from "react";

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
      <ul>
        {team.map(team=>(
          <li key={team.id}>
            {team.id}:{team.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;