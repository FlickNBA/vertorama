import { useEffect, useState } from 'react';
import Header from './Header';
import { checkIfHit, prepareLevel } from './util';

function App() {
  let [heroes, setHeroes] = useState([]);
  let [difficulty, setDifficulty] = useState(1);
  let [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    prepareLevel({ difficulty: 1, setGameLoaded: setGameLoaded });
    setHeroes(['abc', 'def']);
  }, []);

  const handleClick = (e) => {
    let pageWidth = document.querySelector('#background').clientWidth;
    let pageHeight = document.querySelector('#background').clientHeight;
    let pageY = e.pageY - e.target.offsetTop;
    let pageX = e.pageX;
    let percentageX = Math.round((pageX / pageWidth) * 10000) / 100;
    let percentageY = Math.round((pageY / pageHeight) * 10000) / 100;
    console.log(
      `user clicked on ${percentageX}% width and ${percentageY}% height`
    );
    let CIH = checkIfHit(percentageX, percentageY, difficulty);
    console.log(CIH);
  };

  return (
    <>
      <Header heroes={heroes} gameLoaded={gameLoaded} />
      <div
        id='background'
        className='
        w-full
        cursor-pointer
      '
        onClick={(e) => handleClick(e)}
      ></div>
    </>
  );
}

export default App;
