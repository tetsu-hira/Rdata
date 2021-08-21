import { useEffect, useState, useMemo } from "react";
import Header from './Header.jsx';
import axios from "axios";
import Form from "./Form.jsx"
import React from "react";
import Sort from './Sort.jsx';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Top() {
  
  const [team, setTeam] = useState([]);
  const [id, setId] = useState();
  const [court, setCourt] = useState([]);
  const [number, setNumber] = useState([]);
  const [changeCourt, setChangeCourt] = useState("");
  const [changeNumber, setChangeNumber] = useState();
  const [changeMidCourt, setChangeMidCourt] = useState("");
  const [changeMidNumber, setChangeMidNumber] = useState();
  const [teamList, setTeamList] = useState([]);
  const [teamId, setTeamId] = useState();
  const [keys, setKeys] = useState([]);
  const [sort, setSort] =useState({});
  
  

  useState(() => {
    console.log("コート");
    
   
    axios.get('/court')
      .then((res) => {
        setCourt(res.data);
      })
  },[])
  useState(() => {
    console.log("番号");
   
    axios.get('/number')
      .then((res) => {
        setNumber(res.data);
      })
  },[])


  const handleDelete = () => {
    axios.post('http://localhost:4000/delete', {
      id: id
    });
  };

  const handleChangeCourt = () => {
    setTeamList([...teamList, {id: teamId, court: changeCourt}]);

    axios.post('/changecourt', {
      id: teamId,
      court: changeCourt
    });
  };
  const handleChangeNumber = () => {
    setTeamList([...teamList, {id: teamId, number: changeNumber}]);

    axios.post('/changenumber', {
      id: teamId,
      number: changeNumber,
    });
  };
  const handleChangeMidCourt = () => {
    setTeamList([...teamList, {id: teamId, court: changeMidCourt}]);

    axios.post('/changemidcourt', {
      id: teamId,
      court: changeMidCourt
    });
  };
  const handleChangeMidNumber = () => {
    setTeamList([...teamList, {id: teamId, number: changeMidNumber}]);

    axios.post('/changemidnumber', {
      id: teamId,
      number: changeMidNumber,
    });
  };
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1
      })
    }
  };
  let sortedTeams = useMemo(() => {
    let _sortedTeams = team;
    if (sort.key) {
      _sortedTeams = _sortedTeams.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        if(a === b) {
          return 0;
        }
        if(a > b) {
          return 1 * sort.order;
        }
        if(a < b) {
          return -1 * sort.order;
        }
      });
    }
    return _sortedTeams;
  }, [sort]);

  useState(() => {
    console.log("ソート");
   
    const url = '/posts';
    axios.get(url)
      .then((res) => {
        setKeys(Object.keys(res.data[0]));
        console.log(Object.keys(res.data[0]));
      })
  },[])
  

  useEffect(() => {
    console.log("副作用関数が実行されました");
    
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
                <Link to="/pre" className="Match">予選リーグ結果入力</Link>
              </li>
              <li className="NavList__item">
                <Link to="/mid" className="Midway">中間リーグ結果入力</Link>
              </li>
            </ul>
          </div>
          
          <div className="IndexTable">
            <div className="IndexTable__container">
              <div className="IndexTable__head">
                <div className="id">No.</div>
                <div className="name">チーム名</div>
                <div className="point">予選<br />勝ち点</div>
                <div className="score">予選<br />得失点</div>
                <div className="court">予選<br />コート</div>
                <div className="point">中間<br />勝ち点</div>
                <div className="score">中間<br />得失点</div>
                <div className="court">中間<br />コート</div>
                <div className="sum">総合<br />勝ち点</div>
                <div className="sum">総合<br />得失点</div>
                <div className="rank"></div>
              </div>
              <div className="IndexButton>">
                <Sort
                  key={keys[0]}
                  button={keys[0]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[1]}
                  button={keys[1]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[4]}
                  button={keys[4]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[5]}
                  button={keys[5]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[2]}
                  button={keys[2]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[3]}
                  button={keys[3]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[6]}
                  button={keys[6]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[7]}
                  button={keys[7]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[10]}
                  button={keys[10]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[11]}
                  button={keys[11]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[8]}
                  button={keys[8]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[9]}
                  button={keys[9]}
                  handleSort={handleSort}
                  name="▼"
                />
              </div>
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
                      <div className="change">
                        <form onClick={handleChangeCourt} method="post" action="/changecourt">
                          <select className="court" defaultValue={team.court} name="itemCourt" onChange={(e) => { setTeamId(team.id); setChangeCourt(e.target.value); }}>
                            {court.map(court=>(
                              <option menuitem={court.court} key={court.id} name={court.id} value={court.court}>{court.court}</option>
                            ))}
                            <option hidden={team.court}>{team.court}</option>
                          </select>
                        </form>
                      </div>
                      <div className="change">
                        <form onClick={handleChangeNumber} method="post" action="/changenumber">
                          <select className="number" defaultValue={team.number} name="itemNumber" onChange={(e) => { setTeamId(team.id); setChangeNumber(e.target.value); }}>
                            {number.map(number=>(
                              <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                            ))}
                            <option hidden={team.number}>{team.number}</option>
                          </select>
                        </form>
                      </div>
                      {/* <div className="edit">編集</div> */}
                      <div className="point">{team.mid_point}</div>
                      <div className="score">{team.mid_score}</div>
                      <div className="change">
                        <form onClick={handleChangeMidCourt} method="post" action="/changemidcort">
                          <select className="court" defaultValue={team.mid_court} name="itemCourt" onChange={(e) => { setTeamId(team.id); setChangeMidCourt(e.target.value); }}>
                            {court.map(court=>(
                              <option menuitem={court.court} key={court.id} name={court.id} value={court.court}>{court.court}</option>
                            ))}
                            <option hidden={team.mid_court}>{team.mid_court}</option>
                          </select>
                        </form>
                      </div>
                      <div className="change">
                        <form onClick={handleChangeMidNumber} method="post" action="/changemidnumber">
                          <select className="number" defaultValue={team.mid_number} name="itemNumber" onChange={(e) => { setTeamId(team.id); setChangeMidNumber(e.target.value); }}>
                            {number.map(number=>(
                              <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                            ))}
                            <option hidden={team.mid_number}>{team.mid_number}</option>
                          </select>
                        </form>
                      </div>
                      {/* <div className="edit">編集</div> */}
                      <div className="point">{team.sum_point}</div>
                      <div className="score">{team.sum_score}</div>
                      <form onSubmit={handleDelete}>
                        <input type="submit" className="edit" onClick={() => setId(team.id) } value="削除"></input>
                      </form>
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


export default Top;