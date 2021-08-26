import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";
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
  const [court, setCourt] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [teamId, setTeamId] = useState();
  const [countA1, setCountA1] = useState();
  const [countA2, setCountA2] = useState();
  const [countA3, setCountA3] = useState();
  const [countA4, setCountA4] = useState();
  const [countA5, setCountA5] = useState();
  const [countA6, setCountA6] = useState();
  const [countA7, setCountA7] = useState();
  const [countA8, setCountA8] = useState();
  const [countA9, setCountA9] = useState();
  const [countA10, setCountA10] = useState();
  const [countA11, setCountA11] = useState();
  const [countA12, setCountA12] = useState();
  const [countA13, setCountA13] = useState();
  const [countA14, setCountA14] = useState();
  const [countA15, setCountA15] = useState();
  const [countA16, setCountA16] = useState();
  const [countB1, setCountB1] = useState();
  const [countB2, setCountB2] = useState();
  const [countB3, setCountB3] = useState();
  const [countB4, setCountB4] = useState();
  const [countB5, setCountB5] = useState();
  const [countB6, setCountB6] = useState();
  const [countB7, setCountB7] = useState();
  const [countB8, setCountB8] = useState();
  const [countB9, setCountB9] = useState();
  const [countB10, setCountB10] = useState();
  const [countB11, setCountB11] = useState();
  const [countB12, setCountB12] = useState();
  const [countB13, setCountB13] = useState();
  const [countB14, setCountB14] = useState();
  const [countB15, setCountB15] = useState();
  const [countB16, setCountB16] = useState();
  const [countC1, setCountC1] = useState();
  const [countC2, setCountC2] = useState();
  const [countC3, setCountC3] = useState();
  const [countC4, setCountC4] = useState();
  const [countC5, setCountC5] = useState();
  const [countC6, setCountC6] = useState();
  const [countC7, setCountC7] = useState();
  const [countC8, setCountC8] = useState();
  const [countC9, setCountC9] = useState();
  const [countC10, setCountC10] = useState();
  const [countC11, setCountC11] = useState();
  const [countC12, setCountC12] = useState();
  const [countC13, setCountC13] = useState();
  const [countC14, setCountC14] = useState();
  const [countC15, setCountC15] = useState();
  const [countC16, setCountC16] = useState();
  const [countD1, setCountD1] = useState();
  const [countD2, setCountD2] = useState();
  const [countD3, setCountD3] = useState();
  const [countD4, setCountD4] = useState();
  const [countD5, setCountD5] = useState();
  const [countD6, setCountD6] = useState();
  const [countD7, setCountD7] = useState();
  const [countD8, setCountD8] = useState();
  const [countD9, setCountD9] = useState();
  const [countD10, setCountD10] = useState();
  const [countD11, setCountD11] = useState();
  const [countD12, setCountD12] = useState();
  const [countD13, setCountD13] = useState();
  const [countD14, setCountD14] = useState();
  const [countD15, setCountD15] = useState();
  const [countD16, setCountD16] = useState();
  const [A1, setA1] = useState([]);
  const [A2, setA2] = useState([]);
  const [A3, setA3] = useState([]);
  const [A4, setA4] = useState([]);
  const [B1, setB1] = useState([]);
  const [B2, setB2] = useState([]);
  const [B3, setB3] = useState([]);
  const [B4, setB4] = useState([]);
  const [C1, setC1] = useState([]);
  const [C2, setC2] = useState([]);
  const [C3, setC3] = useState([]);
  const [C4, setC4] = useState([]);
  const [D1, setD1] = useState([]);
  const [D2, setD2] = useState([]);
  const [D3, setD3] = useState([]);
  const [D4, setD4] = useState([]);

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
        console.log(res.data);
        setCountA1(res.data[0].result1);
        setCountA2(res.data[0].result2);
        setCountA3(res.data[0].result3);
        setCountA4(res.data[0].result4);
        setCountA5(res.data[1].result1);
        setCountA6(res.data[1].result2);
        setCountA7(res.data[1].result3);
        setCountA8(res.data[1].result4);
        setCountA9(res.data[2].result1);
        setCountA10(res.data[2].result2);
        setCountA11(res.data[2].result3);
        setCountA12(res.data[2].result4);
        setCountA13(res.data[3].result1);
        setCountA14(res.data[3].result2);
        setCountA15(res.data[3].result3);
        setCountA16(res.data[3].result4);
        setCountB1(res.data[4].result1);
        setCountB2(res.data[4].result2);
        setCountB3(res.data[4].result3);
        setCountB4(res.data[4].result4);
        setCountB5(res.data[5].result1);
        setCountB6(res.data[5].result2);
        setCountB7(res.data[5].result3);
        setCountB8(res.data[5].result4);
        setCountB9(res.data[6].result1);
        setCountB10(res.data[6].result2);
        setCountB11(res.data[6].result3);
        setCountB12(res.data[6].result4);
        setCountB13(res.data[7].result1);
        setCountB14(res.data[7].result2);
        setCountB15(res.data[7].result3);
        setCountB16(res.data[7].result4);
        setCountC1(res.data[8].result1);
        setCountC2(res.data[8].result2);
        setCountC3(res.data[8].result3);
        setCountC4(res.data[8].result4);
        setCountC5(res.data[9].result1);
        setCountC6(res.data[9].result2);
        setCountC7(res.data[9].result3);
        setCountC8(res.data[9].result4);
        setCountC9(res.data[10].result1);
        setCountC10(res.data[10].result2);
        setCountC11(res.data[10].result3);
        setCountC12(res.data[10].result4);
        setCountC13(res.data[11].result1);
        setCountC14(res.data[11].result2);
        setCountC15(res.data[11].result3);
        setCountC16(res.data[11].result4);
        setCountD1(res.data[12].result1);
        setCountD2(res.data[12].result2);
        setCountD3(res.data[12].result3);
        setCountD4(res.data[12].result4);
        setCountD5(res.data[13].result1);
        setCountD6(res.data[13].result2);
        setCountD7(res.data[13].result3);
        setCountD8(res.data[13].result4);
        setCountD9(res.data[14].result1);
        setCountD10(res.data[14].result2);
        setCountD11(res.data[14].result3);
        setCountD12(res.data[14].result4);
        setCountD13(res.data[15].result1);
        setCountD14(res.data[15].result2);
        setCountD15(res.data[15].result3);
        setCountD16(res.data[15].result4);
      })
  },[])
  useEffect(() => {
    
    const urlCourt = '/court';
    axios.get(urlCourt)
      .then((res) => {
        setCourt(res.data);
        console.log(res.data);
      })
  },[])

  const handleChangeCount = () => {
    // setTeamList([...teamList, {id: teamId, count: countA1}]);

    axios.post('/count', {
      countA1: countA1,
      countA2: countA2,
      countA3: countA3,
      countA4: countA4,
      countA5: countA5,
      countA6: countA6,
      countA7: countA7,
      countA8: countA8,
      countA9: countA9,
      countA10: countA10,
      countA11: countA11,
      countA12: countA12,
      countA13: countA13,
      countA14: countA14,
      countA15: countA15,
      countA16: countA16,
      countB1: countB1,
      countB2: countB2,
      countB3: countB3,
      countB4: countB4,
      countB5: countB5,
      countB6: countB6,
      countB7: countB7,
      countB8: countB8,
      countB9: countB9,
      countB10: countB10,
      countB11: countB11,
      countB12: countB12,
      countB13: countB13,
      countB14: countB14,
      countB15: countB15,
      countB16: countB16,
      countC1: countC1,
      countC2: countC2,
      countC3: countC3,
      countC4: countC4,
      countC5: countC5,
      countC6: countC6,
      countC7: countC7,
      countC8: countC8,
      countC9: countC9,
      countC10: countC10,
      countC11: countC11,
      countC12: countC12,
      countC13: countC13,
      countC14: countC14,
      countC15: countC15,
      countC16: countC16,
      countD1: countD1,
      countD2: countD2,
      countD3: countD3,
      countD4: countD4,
      countD5: countD5,
      countD6: countD6,
      countD7: countD7,
      countD8: countD8,
      countD9: countD9,
      countD10: countD10,
      countD11: countD11,
      countD12: countD12,
      countD13: countD13,
      countD14: countD14,
      countD15: countD15,
      countD16: countD16
    });
  };
  
  console.log(A1);

  return (
    <>
      <div className="Header">
        <a href="/" className="HeaderButton" onClick={handleChangeCount}>HOME</a>
        <ul className="JumpList">
          <li className="JumpList__item">
            <AnchorLink href="#courtA">Aコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtB">Bコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtC">Cコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtD">Dコート</AnchorLink>
          </li>
        </ul>
      </div>
      <section id="courtA" className="JumpPoint"></section>
      <div className="Pre">
        <div className="PreContainer">
          
          <div className="PreMain">
            <h2>予選リーグAコート</h2>
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
                      <p>{A1[0] && A1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
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
                        </div>
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
                      <p>{A2[0] && A2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A4[0] && A4[0].name}</div>
                      <div>{A3[0] && A3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{A3[0] && A3[0].name}</p>
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
                      <p>{A4[0] && A4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A1[0] && A1[0].name}</div>
                      <div>{A2[0] && A2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{A1[0] && A1[0].name}</p>
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
                      <p>{A3[0] && A3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A2[0] && A2[0].name}</div>
                      <div>{A4[0] && A4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{A2[0] && A2[0].name}</p>
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
                      <p>{A4[0] && A4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A3[0] && A3[0].name}</div>
                      <div>{A1[0] && A1[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtB" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>予選リーグBコート</h2>
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
                      <p>{B1[0] && B1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 5)}}>+5</button>
                          <div className="CountPoint">{countB1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB2}</div>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 5)}}>+5</button>
                          <div className="CountPoint">{countB3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB4}</div>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B2[0] && B2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B4[0] && B4[0].name}</div>
                      <div>{B3[0] && B3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{B3[0] && B3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 5)}}>+5</button>
                          <div className="CountPoint">{countB5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB6}</div>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 5)}}>+5</button>
                          <div className="CountPoint">{countB7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB8}</div>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B4[0] && B4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B1[0] && B1[0].name}</div>
                      <div>{B2[0] && B2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{B1[0] && B1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 5)}}>+5</button>
                          <div className="CountPoint">{countB9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB10}</div>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 5)}}>+5</button>
                          <div className="CountPoint">{countB11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB12}</div>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B3[0] && B3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B2[0] && B2[0].name}</div>
                      <div>{B4[0] && B4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{B2[0] && B2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 + 5)}}>+5</button>
                          <div className="CountPoint">{countB13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB14}</div>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 + 5)}}>+5</button>
                          <div className="CountPoint">{countB15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB16}</div>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B4[0] && B4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B3[0] && B3[0].name}</div>
                      <div>{B1[0] && B1[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtC" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>予選リーグCコート</h2>
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
                      <p>{C1[0] && C1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC1(countC1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC1(countC1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC1(countC1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC1(countC1 + 5)}}>+5</button>
                          <div className="CountPoint">{countC1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC2}</div>
                          <button className="CountButton" onClick = {() => {setCountC2(countC2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC2(countC2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC2(countC2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC2(countC2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC3(countC3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC3(countC3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC3(countC3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC3(countC3 + 5)}}>+5</button>
                          <div className="CountPoint">{countC3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC4}</div>
                          <button className="CountButton" onClick = {() => {setCountC4(countC4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC4(countC4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC4(countC4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC4(countC4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C2[0] && C2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C4[0] && C4[0].name}</div>
                      <div>{C3[0] && C3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{C3[0] && C3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC5(countC5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC5(countC5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC5(countC5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC5(countC5 + 5)}}>+5</button>
                          <div className="CountPoint">{countC5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC6}</div>
                          <button className="CountButton" onClick = {() => {setCountC6(countC6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC6(countC6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC6(countC6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC6(countC6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC7(countC7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC7(countC7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC7(countC7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC7(countC7 + 5)}}>+5</button>
                          <div className="CountPoint">{countC7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC8}</div>
                          <button className="CountButton" onClick = {() => {setCountC8(countC8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC8(countC8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC8(countC8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC8(countC8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C4[0] && C4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C1[0] && C1[0].name}</div>
                      <div>{C2[0] && C2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{C1[0] && C1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC9(countC9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC9(countC9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC9(countC9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC9(countC9 + 5)}}>+5</button>
                          <div className="CountPoint">{countC9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC10}</div>
                          <button className="CountButton" onClick = {() => {setCountC10(countC10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC10(countC10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC10(countC10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC10(countC10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC11(countC11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC11(countC11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC11(countC11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC11(countC11 + 5)}}>+5</button>
                          <div className="CountPoint">{countC11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC12}</div>
                          <button className="CountButton" onClick = {() => {setCountC12(countC12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC12(countC12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC12(countC12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC12(countC12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C3[0] && C3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C2[0] && C2[0].name}</div>
                      <div>{C4[0] && C4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{C2[0] && C2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC13(countC13 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC13(countC13 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC13(countC13 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC13(countC13 + 5)}}>+5</button>
                          <div className="CountPoint">{countC13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC14}</div>
                          <button className="CountButton" onClick = {() => {setCountC14(countC14 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC14(countC14 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC14(countC14 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC14(countC14 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountC15(countC15 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC15(countC15 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC15(countC15 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC15(countC15 + 5)}}>+5</button>
                          <div className="CountPoint">{countC15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC16}</div>
                          <button className="CountButton" onClick = {() => {setCountC16(countC16 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountC16(countC16 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountC16(countC16 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountC16(countC16 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C4[0] && C4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C3[0] && C3[0].name}</div>
                      <div>{C1[0] && C1[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtD" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>予選リーグDコート</h2>
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
                      <p>{D1[0] && D1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD1(countD1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD1(countD1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD1(countD1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD1(countD1 + 5)}}>+5</button>
                          <div className="CountPoint">{countD1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD2}</div>
                          <button className="CountButton" onClick = {() => {setCountD2(countD2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD2(countD2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD2(countD2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD2(countD2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD3(countD3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD3(countD3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD3(countD3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD3(countD3 + 5)}}>+5</button>
                          <div className="CountPoint">{countD3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD4}</div>
                          <button className="CountButton" onClick = {() => {setCountD4(countD4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD4(countD4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD4(countD4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD4(countD4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D2[0] && D2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D4[0] && D4[0].name}</div>
                      <div>{D3[0] && D3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{D3[0] && D3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD5(countD5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD5(countD5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD5(countD5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD5(countD5 + 5)}}>+5</button>
                          <div className="CountPoint">{countD5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD6}</div>
                          <button className="CountButton" onClick = {() => {setCountD6(countD6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD6(countD6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD6(countD6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD6(countD6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD7(countD7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD7(countD7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD7(countD7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD7(countD7 + 5)}}>+5</button>
                          <div className="CountPoint">{countD7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD8}</div>
                          <button className="CountButton" onClick = {() => {setCountD8(countD8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD8(countD8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD8(countD8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD8(countD8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D4[0] && D4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D1[0] && D1[0].name}</div>
                      <div>{D2[0] && D2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{D1[0] && D1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD9(countD9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD9(countD9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD9(countD9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD9(countD9 + 5)}}>+5</button>
                          <div className="CountPoint">{countD9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD10}</div>
                          <button className="CountButton" onClick = {() => {setCountD10(countD10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD10(countD10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD10(countD10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD10(countD10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD11(countD11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD11(countD11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD11(countD11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD11(countD11 + 5)}}>+5</button>
                          <div className="CountPoint">{countD11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD12}</div>
                          <button className="CountButton" onClick = {() => {setCountD12(countD12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD12(countD12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD12(countD12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD12(countD12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D3[0] && D3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D2[0] && D2[0].name}</div>
                      <div>{D4[0] && D4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{D2[0] && D2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD13(countD13 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD13(countD13 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD13(countD13 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD13(countD13 + 5)}}>+5</button>
                          <div className="CountPoint">{countD13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD14}</div>
                          <button className="CountButton" onClick = {() => {setCountD14(countD14 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD14(countD14 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD14(countD14 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD14(countD14 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountD15(countD15 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD15(countD15 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD15(countD15 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD15(countD15 + 5)}}>+5</button>
                          <div className="CountPoint">{countD15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD16}</div>
                          <button className="CountButton" onClick = {() => {setCountD16(countD16 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountD16(countD16 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountD16(countD16 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountD16(countD16 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D4[0] && D4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D3[0] && D3[0].name}</div>
                      <div>{D1[0] && D1[0].name}</div>
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