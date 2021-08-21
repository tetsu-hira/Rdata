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
  const [countA1, setCountA1] = useState(0);
  const [countA2, setCountA2] = useState(0);
  const [countA3, setCountA3] = useState(0);
  const [countA4, setCountA4] = useState(0);
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


  // const A1 = team.filter((item, index) => {
  //   return item.court === "C" && item.number === 1;
  // })
  

  // useEffect(() => {
  //   setA1(team.filter((item, index) => {
  //       return item.court === "C" && item.number === 1;
  //     }))
  // },[]);

  console.log("1");
  console.log(team);
  console.log("2");
  console.log(game);
  console.log("3");
  console.log(a1);
  
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
              <table border="0" bordercolor="black">
                <thead>
                  <tr className="TableTitle">
                    <th className="TableTitle__number">No.</th>
                    <th className="TableTitle__team">TeamA</th>
                    <th className="TableTitle__point">Point</th>
                    <th className="TableTitle__team">TeamB</th>
                    <th className="TableTitle__space"></th>
                    <th className="TableTitle__referee">Referee</th>
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
                        <div className="set1">
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 5)}}>+5</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 - 1)}}>-1</button>
                        </div>
                        <div className="set2">
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 5)}}>+5</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 - 1)}}>-1</button>
                        </div>
                        <div className="left">
                          <p>{countA1}</p>
                          <p>{countA2}</p>
                        </div>
                        <div className="right">
                          <p>{countA3}</p>
                          <p>{countA4}</p>
                        </div>
                        <div className="set1">
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 5)}}>+5</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 - 1)}}>-1</button>
                        </div>
                        <div className="set2">
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 5)}}>+5</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 - 1)}}>-1</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{a2[0] && a2[0].name}</p>
                    </td>
                    <td className="TableContent__space"></td>
                    <td className="TableContent__referee">
                      <p>{a4[0] && a4[0].name}</p>
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