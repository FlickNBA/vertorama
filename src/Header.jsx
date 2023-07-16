function Header({ heroes, gameLoaded }) {
  return (
    //flex justify-center items-center
    <div className='w-full h-24 grid grid-cols-3 items-center bg-slate-600 text-slate-100'>
      <div>Header</div>
      <div className='col-span-2'>
        Heroes to find: {heroes.join(', ')}, game loaded: {gameLoaded}
      </div>
    </div>
  );
}

export default Header;
