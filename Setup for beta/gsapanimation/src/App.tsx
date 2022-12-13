import { useState } from 'react'
import reactLogo from './assets/react.svg'
import elanLogo from '../src/assets/logo.png'
import Invitation from '../src/assets/Invitation.svg'
import borderLeft from './assets/border-left.png'
import borderTop from './assets/border-top.png'
import borderBottom from './assets/border-bottom.png'
import cresentLeft from './assets/cresent-left.svg'
import cresentRight from './assets/cresent-right.svg'
import moonHalf from './assets/moon-half.svg'
import moonFull from './assets/moon-full.svg'
import valenrowLogo from './assets/secretsOfValenrow2.svg'
import sample from './assets/video.mp4'
import './index.css'

import Landing from './Landing'

import { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'

function App() {
  let app = useRef(null)
  const moon2tl = useRef<any>()
  const moon4tl = useRef<any>()
  const timeline = useRef<any>()

  useLayoutEffect(()=>{
    document.body.style.overflow = 'hidden'
   let ctx = gsap.context(()=>{

      moon2tl.current = gsap.timeline({repeat:-1, repeatDelay: 2});
      moon2tl.current.yoyo(true)
      moon2tl.current.to('.moon-2', {
        rotation:'+=60'
      }).to('.moon-2',{
        rotation: '+=240',
        delay: 0.2,
        duration: 2,
        ease: 'power2.out'
      })

      moon4tl.current = gsap.timeline({repeat:-1, repeatDelay:2});
      moon4tl.current.yoyo(true)
      moon4tl.current.to('.moon-4', {
        rotation: '+=270',
        duration: 5,

      })

      gsap.to('.moon-3', {
        rotation: '360',
        repeat: -1,
        duration: 8,
        repeatDelay: 0,
        ease: 'linear',
        yoyo: true
      })
      let leftBorder = document.querySelector('.borderLeft');

      console.log(leftBorder?.clientHeight )
      console.log(leftBorder?.clientTop )
      timeline.current = gsap.timeline();
      timeline.current.set('.valenrowLogo', {autoAlpha: 0})
      timeline.current.to(['.moon-1', '.moon-5'],{
        x: '120px',
        duration: 1.7,
        ease: 'power4.in',
        stagger: 0.1
      })
      .to(['.moon-2','.moon-4'], {
        x: '300px',
        duration: 1.5,
        ease: 'power4.inOut',
        stagger: 0.1
      }, '<+=1')
      .to('.moon-3', {
        duration: 1,
        ease: 'power3.inOut',
        x: 180
      }, '<+=1')
      .to('.elanText, .inviteText', {
        autoAlpha: 0,
        duration: 1
      }, '<+1')
      .to('.logo', {
        y: '+=110%',
        duration: 1,
        ease: 'power2.inOut',
        width: '20rem'
      }, '>')
      .to('.valenrowLogo', {
        autoAlpha: 1,
      }, '<+0.5')
      .to('.buttons>*',{
        autoAlpha: 1,
        y:10,
        stagger: 0.3
      })
      .set('.borderLeft',{
        transformOrigin: 'left bottom'
      })
      .to('.borderLeft',{
        transformOrigin: 'bottom',
        width: '-=2rem',
        y: '+=4rem'
        
      }, '<-2.5')
      .to('.borderTop',{
        autoAlpha: 0
      }, '<')
      
      .set('.moon-parent>*', {
        display: 'none',
        onComplete: ()=>{document.body.style.overflowY = 'scroll'}
      })
      .to(app.current, {
        background:'#0d1838a6',
        duration: 6,
        ease: 'power2.inOut'
      })

      

    },app)

    return ()=>{ctx.revert(); document.body.style.overflow = 'scroll'}
  })

  return (
    <> 
    <div ref={app} className="App bg-elan-blue text-white h-[100vh] layout" >
      <div className='absolute left-5 top-10 w-[19rem] borderLeft'><img src={borderLeft} alt="" /></div>
      <div className='absolute top-10 flex justify-end w-full right-32 borderTop'><img src={borderTop} /></div>
      <div className='absolute bottom-5 left-[50%] translate-x-[-50%] w-full flex justify-center'><img src={borderBottom} alt="" /></div>
      <div className='w-full translate-y-[50%]'>
        <img src={elanLogo} className="logo left-[50%] translate-x-[-50%] relative w-[25rem]" />
        <img src={Invitation} alt=""  className='elanText left-[50%] translate-x-[-50%] relative'/>
        <h2 className='inviteText serif text-6xl text-elan-gold text-center'>Invites you to explore</h2>
      </div>
      <div className="moon-parent absolute right-8 flex flex-col top-10 items-center h-[88%] justify-evenly">
        <div className='moon-1'><img src={moonFull} alt="" /></div>
        <div className='moon-2'><img src={cresentRight} alt="" /></div>
        <div className='moon-3'><img src={moonHalf} alt="" /></div>
        <div className='moon-4'><img src={cresentLeft} alt="" /></div>
        <div className='moon-5'><img src={moonFull} alt="" /></div>
      </div>
      <div className='valenrowLogo absolute bottom-[9rem] left-[50%] translate-x-[-50%]'>
        <img src={valenrowLogo} alt="" className=''/>
      </div>
      <div className='[&>*]:opacity-0 buttons absolute right-[5rem] top-[14rem] flex flex-col gap-[1rem] '>
        <button className=' block relative bg-[#AD002A] text-elan-gold text-2xl cinzel py-9 px-[3rem] rounded-[1rem]'>Merch</button>
        <button className='block relative bg-[#0B8661] text-white text-xl cinzel py-4  rounded-lg'>CA Portal</button>
      </div>
      <video autoPlay loop muted className='w-full h-[100vh] absolute -z-10 object-cover top-0'>
        <source src={sample} type='video/mp4' />
      </video>
    </div>

   
    </>
  )
}

export default App
