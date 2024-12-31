import React from 'react'


const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='top-0 left-0 bg-transparent text-gray-800 p-4 border border-gray-300'>
        <img className='size-11' src='./ic1.png' alt='logo' ></img>
            <h1 className='absolute left-16 text text-lg top-6 '> Joelyn</h1>

            <div className='nav'>
            <button className='absolute top-0 right-6 m-2 bg-white text-black px-4 py-2 rounded shadow' > Menu

           </button>
            <button className='absolute top-2 right-32 bg-black text-white px-3 py-3 rounded-full'><img src='./ic4.png' alt='cart'></img>


            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
