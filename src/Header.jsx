function Header({ heroes, gameData, gameLoaded, timer }) {
  const showHeroes = () => {
    if (Object.keys(gameData).length > 0) {
      // console.log('showheroes run');
      // console.log(gameData);
      let heroDivs = [];
      heroes.forEach((hero, i) => {
        heroDivs.push(
          <div
            key={i}
            className='h-inherit items-center justify-center flex flex-col border-2 border-slate-400 rounded-xl duration-1000'
            style={{
              opacity: hero.clicked ? '0.25' : '1',
            }}
          >
            <h1 className='font-bold text-2xl'>{hero.name}</h1>
            <img src={hero.image} className='h-2/3 my-1' />
            <h2 className='font-medium text-xl'>
              Difficulty: {hero.difficulty}/5
            </h2>
          </div>
        );
      });
      return heroDivs;
    }
  };

  const formatTime = () => {
    const minutes = Math.floor((timer % 360000) / 6000);
    const seconds = Math.floor((timer % 6000) / 100);
    const milliseconds = timer % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='w-full h-64 px-4 grid grid-cols-4 gap-4 items-center bg-slate-600 text-slate-100'>
      <div>
        <h1 className='font-bold text-3xl text-center mb-2'>Heroes to find:</h1>
        <h2 className='font-bold text-2xl text-center'>
          Heroes found: {heroes.filter((h) => h.clicked == true).length}/
          {heroes.length}
        </h2>
        <h3 className='font-bold text-3xl mt-2 text-left'>
          Timer: {formatTime()}
        </h3>
      </div>
      <div className='col-span-3 h-inherit flex flex-col justify-center items-center'>
        <div
          className={`grid gap-4 h-60 w-full`}
          style={{
            gridTemplateColumns: `repeat(${heroes.length}, minmax(0, 1fr))`,
          }}
        >
          {showHeroes()}
        </div>
      </div>
    </div>
  );
}

export default Header;
