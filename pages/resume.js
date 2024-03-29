import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Mobile.module.css'
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
      .ml{
        margin-right: 20px;
      }
      .mr {
        margin-left: 20px;
      }
    }

    `}</style>
    <div className={styles.mll}>


<div className={styles.left}>
<h1 className='whiteText'>Resume</h1>
<hr className={styles.line}></hr>
</div>

</div>

<embed src="resume.pdf" width="1200px" height="900px" />


</div>




{/* <img src='/killer-bunny.jpg' alt='vil'/> */}

</div>
      </main>
    </div>
  )
}
