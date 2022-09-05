import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div>

{/* <p className={styles.extraGreen}>I am a super cool software engineer now. I make super cool sytuff with</p> */}
<div >


    <style jsx>{`


          .margin-bottom {
            margin-bottom : 20px
        }
        .whiteText {
            color: white
        }
        .orangeText {
            color: #748DA6
        }
        p {
            // font-size: 70px
        }
        h1 {
            font-size: 70px
        }
        .underline{
            font-style: underline
        }
        .margin-left {
            margin-left: 20px
        }
        .flex {
            display: flex;
            justify-content: space-evenly
        }
        h2 {
            font-size: 35px
        }
        h4 {
            font-size: 45px
        }
        center {
            text-align: center

        }
        .list{
            list-style: none
        }
        .flex-space {
            display: flex;
            justify-content: space-evenly
        }
        .mt{
            margin-top: 60px;

        }
        .mb{
            margin-bottom: 100px
        }
        .gold {
            color: #ECB365
        }
        .bg {
            background-color: #064663;
            color: #064663
        }
        .margin-right {
            margin-right: 20px
        }
        .mr {
          margin-right: 200px
      }
      .ml {
        margin-left: 200px
    }
    @media (max-width: 600px) {
      .flex {
        display: grid

      }
    }

    `}</style>

<div className='bg mt'>
<div className='bg'>
    <h3 className='bg'>g</h3>
</div>
<h1 className='gold underline margin-left mt'>Recent projects</h1>
<div className='mt'></div>
<div className='margin-left flex'>
<div className='center margin-bottom'>
    <Image className='margin-left'
        src='/agame.png'
        alt='dragon flight game'
        width={300}
        height={300}
    />
    <h3 className='whiteText'>Dragon Flight</h3>
    <p className='whiteText'>2D game made using html canvas</p>
    <p><a href='https://gianlorenzodercole.github.io/dragon_flight/' className='orangeText'>Try it</a></p>
    <a href='https://github.com/GianlorenzoDercole/dragon_flight' className='orangeText'>View on github</a>
</div>
<div className='margin-left margin-bottom'>
    <Image className='margin-left'
        src='/fof.png'
        alt='forza favorites app'
        width={300}
        height={300}
    />
    <h3 className='whiteText'>Forza Favorites</h3>
    <p className='whiteText'>Full stack app built using express and SQL</p>
    <p><a href='https://forza-favorites.herokuapp.com/' className='orangeText'>Try it</a></p>
    <a href='https://github.com/GianlorenzoDercole/Forza_Favorites' className='orangeText'>View on github</a>
</div>
<div className='margin-left margin-right margin-bottom'>
    <Image className='margin-left'
        src='/pic.png'
        alt='pic it up'
        width={300}
        height={300}
    />
    <h3 className='whiteText'>Pic It Up</h3>
    <p className='whiteText'>Instagram clone built with a team of four</p>
    <p><a href='https://62bf355dbab5b313b12cda05--inspiring-taiyaki-bccd73.netlify.app/' className='orangeText'>Try it</a></p>
    <a href='https://github.com/GianlorenzoDercole/instagram-clone-client' className='orangeText'>View on github</a>
</div>

</div>

</div>






    <div className='mt'></div>
    <div className='bg'>
    <div className='bg'>

</div>


    </div>

</div>

{/* <img src='/killer-bunny.jpg' alt='vil'/> */}

</div>
      </main>
    </div>
  )
}
