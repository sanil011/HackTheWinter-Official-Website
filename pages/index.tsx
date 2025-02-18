/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
// import { useState,useEffect , useRef} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  // const [register, setRegister] = useState('');
  // const [participants, setParticipants] = useState('');
  // const [institue, setInstitue] = useState('');
  // const [project, setProject] = useState('');
  // const reg = useRef();
  // const part = useRef();
  // const inst = useRef();
  // const proj = useRef();

  // useEffect(() => {
    
  // },[])
  return (
    <div className="">
      <Head>
        <title>About | Hack The Winter 2023</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="mb-36  pl-8  relative">
        <div className="w-2/5">
          <h1 className="text-8xl  pt-16 text-[#183E43]">
            Hack The<br/><span className="text-[#3EB0AC]">Winter</span>
          </h1>
          <div className="text-xl   py-16  tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
          </div>
          <div className="flex pt-12 justify-between">
            <div className=" w-[40%] text-2xl text-center text-white rounded-full border-2 border-[#183E43] bg-[#183E43] py-4 px-12 cursor-pointer hover:bg-transparent hover:text-black ">Register</div>
            <div className=" w-[40%] text-2xl py-4 px-12 text-center rounded-full border-2 border-[#183E43] cursor-pointer hover:bg-[#183E43]  hover:text-white">Learn More</div>
          </div>
        </div>
      </div>
        <div className='absolute right-0 top-0  w-[58%]   h-full overflow-hidden '>
          <img src="./assets/homepage-bg/Winter-Pines.png"  alt="homepage"/>
        </div>
      <div className="px-8 " style={{backgroundImage:"url('./assets/homepage-bg/Group.svg')",backgroundPosition:"center"}}>
        <div className='flex h-[50%]'>
        <div className='w-1/2'>
        <img src='./assets/homepage-bg/Frame.svg' alt="frame" className='h-[80%] w-full'/>
        </div>
        <div className='w-1/2 text-center'>
          <h1 className='text-5xl mt-56'>All About Programming Community</h1>
          <p className='mt-16 text-xl px-28'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita distinctio sapiente veritatis! Cupiditate consectetur nam, odio est minima nihil possimus autem dolores ex beatae consequuntur voluptatibus, delectus ipsum aliquid laborum repudiandae non soluta veritatis nemo reiciendis. Nam, cum eius!</p>
          </div>
        </div>
        <div className='flex px-8 h-[6em] text-center justify-between'>
          <div>
            <h1 className='text-2xl'>Registration</h1>
            <div className='text-3xl pt-2'  data-target="500">0000+</div>
          </div>
          <div>
            <h1 className='text-2xl'>Participants</h1>
            <div className='text-3xl pt-2' data-target="1500">0000+</div>
          </div>
          <div>
            <h1 className='text-2xl'>Projects</h1>
            <div className='text-3xl pt-2' data-target="500">0000+</div>
          </div>
          <div>
            <h1 className='text-2xl'>Institutes</h1>
            <div className='text-3xl pt-2' data-target="100">0000+</div>
          </div>
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
