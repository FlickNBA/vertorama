import { useEffect, useState } from 'react';
import Header from './Header';
import { getData, checkIfHit, prepareLevel, saveHighScore } from './util';
import { data } from 'autoprefixer';

function App() {
  let [heroes, setHeroes] = useState([]);
  let [map, setmap] = useState(2);
  let [gameLoaded, setGameLoaded] = useState(false);
  let [timer, setTimer] = useState(0);
  let [timerStatus, setTimerStatus] = useState(true);
  let [dataLoaded, setDataLoaded] = useState(false);
  let [gameData, setGameData] = useState({});
  let [CID, setCID] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData({ setDataLoaded: setDataLoaded });
      setGameData(fetchedData);
      setDataLoaded(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(gameData).length > 0) {
      prepareLevel({
        map: 1,
        gameData: gameData,
        setHeroes: setHeroes,
        setGameLoaded: setGameLoaded,
        setCID: setCID,
      });
    }
  }, [gameData]);

  useEffect(() => {
    let intervalId;
    if (timerStatus) {
      intervalId = setInterval(() => setTimer(timer + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [timerStatus, timer]);

  const handleClick = (e) => {
    let pageWidth = document.querySelector('#background').clientWidth;
    let pageHeight = document.querySelector('#background').clientHeight;
    let pageY = e.pageY - e.target.offsetTop;
    let pageX = e.pageX;
    let percentageX = Math.round((pageX / pageWidth) * 10000) / 100;
    let percentageY = Math.round((pageY / pageHeight) * 10000) / 100;
    let CIH = checkIfHit({ X: percentageX, Y: percentageY, heroes: heroes });
    //console.log(percentageX, percentageY);
    if (CIH && !CIH['clicked']) {
      let newHeroes = [...heroes];
      let clicked = newHeroes.find((h) => h.name === CIH.name);
      clicked['clicked'] = true;
      setHeroes(newHeroes);
    }
    if (heroes.filter((h) => h.clicked == true).length == heroes.length) {
      setTimerStatus(false);
      saveHighScore({ CID: CID, timer: timer });
    }
  };

  return (
    <>
      <Header
        heroes={heroes}
        gameData={gameData}
        gameLoaded={gameLoaded}
        timer={timer}
      />
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
