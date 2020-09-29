import React from 'react';
import flag from './pngegg.png'
import logo from './logo.svg'

import './App.css';

function App() {
  const iniImg = {1:flag, 2:flag, 3:flag, 4:flag,
    5:flag, 6:flag, 7:flag, 8:flag, 9:flag, 10:flag, 11:flag, 12:flag, 13:flag, 14:flag, 15:flag,
    16:flag, 17:flag, 18:flag, 19:flag, 20:flag, 21:flag};
  const [img, setImg] = React.useState(iniImg);
  const [flags, setFlags] = React.useState(21);
  const [player, setPlayer] = React.useState('first');
  const [took, setTook] = React.useState(0);
  const [previousPlayer, setpreviousPlayer] = React.useState('first');


  const onclick1 = () => {
    setFlags(flags - 1);
    setImg(prevState => ({
      ...prevState,
      [22-flags]: logo,
    }))
    if (flags === 1 || flags === 0) {
      alert('Player ' + player + ' won' );
    }
    if (player === 'first') {
      setpreviousPlayer('first');
    } else {
      setpreviousPlayer('second');
    }
    setTook(1)
    if (player === 'first') {
      setPlayer('second');
    } else {
      setPlayer('first');
    }
  }


  const onclick2 = () => {
    setFlags(flags - 2);
    setImg(prevState => ({
      ...prevState,
      [22-flags]: logo,
      [23-flags]: logo
    }))
    if (flags === 1 || flags === 0 || flags === 2) {
      alert('Player ' + player + ' won' )
    }
    setTook(2)
    if (player === 'first') {
      setpreviousPlayer('first');
    } else {
      setpreviousPlayer('second');
    }
    if (player === 'first') {
      setPlayer('second');
    } else {
      setPlayer('first');
    }
  }
  const reset = () => {
    setFlags(21);
    setPlayer('first');
    setImg(iniImg);
  }
  return (
    <div className="App">
      <div className="flagsContainer">
        <div className="sixthRow">
          <img className="flag" src={img[21]} alt="simpleFlag"/>
        </div>
        <div className="fifthRow">
          <img className="flag" src={img[20]} alt="simpleFlag"/>
          <img className="flag" src={img[19]} alt="simpleFlag"/>
        </div>
        <div className="fourthRow">
          <img className="flag" src={img[18]} alt="simpleFlag"/>
          <img className="flag" src={img[17]} alt="simpleFlag"/>
          <img className="flag" src={img[16]} alt="simpleFlag"/>
        </div>
        <div className="thirdRow">
          <img className="flag" src={img[15]} alt="simpleFlag"/>
          <img className="flag" src={img[14]} alt="simpleFlag"/>
          <img className="flag" src={img[13]} alt="simpleFlag"/>
          <img className="flag" src={img[12]} alt="simpleFlag"/>
        </div>
        <div className="secondRow">
          <img className="flag" src={img[11]} alt="simpleFlag"/>
          <img className="flag" src={img[10]} alt="simpleFlag"/>
          <img className="flag" src={img[9]} alt="simpleFlag"/>
          <img className="flag" src={img[8]} alt="simpleFlag"/>
          <img className="flag" src={img[7]} alt="simpleFlag"/>
        </div>
        <div className="firstRow">
          <img className="flag" src={img[6]} alt="simpleFlag"/>
          <img className="flag" src={img[5]} alt="simpleFlag"/>
          <img className="flag" src={img[4]} alt="simpleFlag"/>
          <img className="flag" src={img[3]} alt="simpleFlag"/>
          <img className="flag" src={img[2]} alt="simpleFlag"/>
          <img className="flag" src={img[1]} alt="simpleFlag"/>
        </div>
      </div>
      <div className="buttonCount">
        <button onClick={() => onclick1()}>Take 1</button>
        <button onClick={() => onclick2()}>Take 2</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
      <div className="player">
        <div>Number of flags: {flags}</div>
        <div>Turn for: {player} player</div>
      </div>
      <div className="took">Player {previousPlayer} took: {took}</div>
    </div>
  );
}

export default App;
