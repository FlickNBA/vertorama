const gameData = {
  1: {
    map: {
      image: '1.jpg',
      ratio: '0.305/1',
    },
    heroes: [
      {
        name: 'Bowser',
        image: 'bowser.png',
        X: 84,
        Y: 24,
        marginX: 5,
        marginY: 2,
      },
      {
        name: 'Zoidberg',
        image: 'zoidberg.png',
        X: 83,
        Y: 83,
        marginX: 7,
        marginY: 3,
      },
      {
        name: 'Krang',
        image: 'krang.png',
        X: 47.5,
        Y: 18.5,
        marginX: 2,
        marginY: 0.5,
      },
      {
        name: 'Link',
        image: 'link.png',
        X: 22.5,
        Y: 94.5,
        marginX: 2,
        marginY: 1,
      },
    ],
  },
};

export const checkIfHit = (X, Y, difficulty) => {
  let HIT = false;
  gameData[difficulty]['heroes'].forEach((item) => {
    // console.log(`checking distances to ${item.name}`);
    let distanceToX = Math.abs(item.X - X);
    // console.log(distanceToX);
    let distanceToY = Math.abs(item.Y - Y);
    // console.log(distanceToY);
    if (distanceToX <= item.marginX && distanceToY <= item.marginY) {
      HIT = `HIT! ${item.name} clicked!`;
    }
  });
  return HIT;
};

export const prepareLevel = ({ difficulty, setGameLoaded }) => {
  console.log('preapring level');
  let backgroundDiv = document.querySelector('#background');
  backgroundDiv.style.aspectRatio = `${gameData[difficulty]['map']['ratio']}`;
  backgroundDiv.style.backgroundImage = `url(./${gameData[difficulty]['map']['image']})`;
  setGameLoaded(true);
};
