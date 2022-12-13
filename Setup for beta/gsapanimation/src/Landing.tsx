import React from 'react'
import valenrowLogo from './assets/secretsOfValenrow.svg'

function Landing() {
  return (
    <div className="App top-[100vh] bg-elan-blue text-white h-[100vh] layout" >
      
      <div className='valenrowLogo absolute bottom-[9rem] left-[50%] translate-x-[-50%]'>
        <img src={valenrowLogo} alt="" className=''/>
      </div>
      <div className='[&>*]:opacity-0 buttons absolute right-[5rem] top-[14rem] flex flex-col gap-[1rem] '>
        <button className=' block relative bg-[#AD002A] text-elan-gold text-2xl cinzel py-9 px-[3rem] rounded-[1rem]'>Merch</button>
        <button className='block relative bg-[#0B8661] text-white text-xl cinzel py-4  rounded-lg'>CA Portal</button>
      </div>
    </div>
  )
}

export default Landing