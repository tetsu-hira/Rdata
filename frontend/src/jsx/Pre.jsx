import { useState, useEffect } from "react";
import Header from './Header.jsx';
import axios from "axios";
// import Form from "./Form.jsx"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { isPropertySignature } from "typescript";

const Pre = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [teamId, setTeamId] = useState();
  const [countA1, setCountA1] = useState(0);
  const [countA2, setCountA2] = useState(0);
  const [countA3, setCountA3] = useState(0);
  const [countA4, setCountA4] = useState(0);
  const [countA5, setCountA5] = useState(0);
  const [countA6, setCountA6] = useState(0);
  const [countA7, setCountA7] = useState(0);
  const [countA8, setCountA8] = useState(0);
  const [countA9, setCountA9] = useState(0);
  const [countA10, setCountA10] = useState(0);
  const [countA11, setCountA11] = useState(0);
  const [countA12, setCountA12] = useState(0);
  const [countA13, setCountA13] = useState(0);
  const [countA14, setCountA14] = useState(0);
  const [countA15, setCountA15] = useState(0);
  const [countA16, setCountA16] = useState(0);
  const [a1, setA1] = useState([]);
  const [a2, setA2] = useState([]);
  const [a3, setA3] = useState([]);
  const [a4, setA4] = useState([]);
  const [b1, setB1] = useState([]);
  const [b2, setB2] = useState([]);
  const [b3, setB3] = useState([]);
  const [b4, setB4] = useState([]);
  const [c1, setC1] = useState([]);
  const [c2, setC2] = useState([]);
  const [c3, setC3] = useState([]);
  const [c4, setC4] = useState([]);
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [d3, setD3] = useState([]);
  const [d4, setD4] = useState([]);

  useEffect(() => {
    const url = '/posts';
    axios.get(url)
      .then((res) => {
        setTeam(res.data);
        setA1(res.data.filter((item, index) => {
          return item.court === "A" && item.number === 1;
        }));
        setA2(res.data.filter((item, index) => {
          return item.court === "A" && item.number === 2;
        }));
        setA3(res.data.filter((item, index) => {
          return item.court === "A" && item.number === 3;
        }));
        setA4(res.data.filter((item, index) => {
          return item.court === "A" && item.number === 4;
        }));
        setB1(res.data.filter((item, index) => {
          return item.court === "B" && item.number === 1;
        }));
        setB2(res.data.filter((item, index) => {
          return item.court === "B" && item.number === 2;
        }));
        setB3(res.data.filter((item, index) => {
          return item.court === "B" && item.number === 3;
        }));
        setB4(res.data.filter((item, index) => {
          return item.court === "B" && item.number === 4;
        }));
        setC1(res.data.filter((item, index) => {
          return item.court === "C" && item.number === 1;
        }));
        setC2(res.data.filter((item, index) => {
          return item.court === "C" && item.number === 2;
        }));
        setC3(res.data.filter((item, index) => {
          return item.court === "C" && item.number === 3;
        }));
        setC4(res.data.filter((item, index) => {
          return item.court === "C" && item.number === 4;
        }));
        setD1(res.data.filter((item, index) => {
          return item.court === "D" && item.number === 1;
        }));
        setD2(res.data.filter((item, index) => {
          return item.court === "D" && item.number === 2;
        }));
        setD3(res.data.filter((item, index) => {
          return item.court === "D" && item.number === 3;
        }));
        setD4(res.data.filter((item, index) => {
          return item.court === "D" && item.number === 4;
        }));
      })
  },[])
  useEffect(() => {
    const urlGame = '/game';
    axios.get(urlGame)
      .then((res) => {
        setGame(res.data);
      })
  },[])

  const handleChangeCount = () => {
    setTeamList([...teamList, {id: teamId, count: countA1}]);

    axios.post('/changecourt', {
      id: teamId,
      count: countA1
    });
  };
  
  return (
    <>
      <Header />
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreHeader">
            <h1>Pre</h1>
          </div>
          <div className="PreMain">
            <div className="Table">
              <table>
                <thead>
                  <tr className="TableTitle">
                    <th className="TableTitle__number">試合順</th>
                    <th className="TableTitle__team">チームA</th>
                    <th className="TableTitle__point">試合結果</th>
                    <th className="TableTitle__team">チームB</th>
                    <th className="TableTitle__referee">審判/補助</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="TableContent">
                    <th className="TableContent__number">1</th>
                    <td className="TableContent__teamA">
                      <p>{a1[0] && a1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <form className="TableContent__count"  onChange={(e) =>{ handleChangeCount(e.target.value)} } method="post" action="/count">
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 5)}}>+5</button>
                          <div className="CountPoint">{countA1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA2}</div>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 5)}}>+5</button>
                        </form>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 5)}}>+5</button>
                          <div className="CountPoint">{countA3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA4}</div>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{a2[0] && a2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{a4[0] && a4[0].name}</div>
                      <div>{a3[0] && a3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{a3[0] && a3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 5)}}>+5</button>
                          <div className="CountPoint">{countA5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA6}</div>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 5)}}>+5</button>
                          <div className="CountPoint">{countA7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA8}</div>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{a4[0] && a4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{a1[0] && a1[0].name}</div>
                      <div>{a2[0] && a2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{a1[0] && a1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 5)}}>+5</button>
                          <div className="CountPoint">{countA9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA10}</div>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 5)}}>+5</button>
                          <div className="CountPoint">{countA11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA12}</div>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{a3[0] && a3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{a2[0] && a2[0].name}</div>
                      <div>{a4[0] && a4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{a2[0] && a2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 + 5)}}>+5</button>
                          <div className="CountPoint">{countA13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA14}</div>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 + 5)}}>+5</button>
                          <div className="CountPoint">{countA15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA16}</div>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{a4[0] && a4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{a3[0] && a3[0].name}</div>
                      <div>{a1[0] && a1[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pre;