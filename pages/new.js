import Image from 'next/image'

import styles from '../styles/About.module.css'
export default function About() {
    return (
        <div>

            {/* <p className={styles.extraGreen}>I am a super cool software engineer now. I make super cool sytuff with</p> */}
            <div >



                <style jsx>{`
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
                `}</style>
            <h1 className='whiteText margin-left'>John Dercole</h1>

            <h4 className='orangeText margin-left'>Full Stack Software Engineer</h4>
            <div className='bg mt'>
            <div className='bg'>
                <h3 className='bg'>g</h3>
            </div>
            <h4 className='gold underline margin-left mt'>Check out some recent projects</h4>
            <div className='mt'></div>
            <div className='margin-left flex'>
            <div className='center'>
                <Image className='margin-left'
                    src='/agame.png'
                    alt='u'
                    width={300}
                    height={300}
                />
                <h3 className='whiteText'>Dragon Flight</h3>
                <p className='whiteText'>a game made using html canvas</p>
                <a href='https://github.com/GianlorenzoDercole/dragon_flight' className='orangeText'>View on github</a>
            </div>
            <div className='margin-left'>
                <Image className='margin-left'
                    src='/fof.png'
                    alt='u'
                    width={300}
                    height={300}
                />
                <h3 className='whiteText'>Forza Favorites</h3>
                <p className='whiteText'>built using express and SQL</p>
                <a href='https://github.com/GianlorenzoDercole/Forza_Favorites' className='orangeText'>View on github</a>
            </div>
            <div className='margin-left margin-right'>
                <Image className='margin-left'
                    src='/pic.png'
                    alt='u'
                    width={300}
                    height={300}
                />
                <h3 className='whiteText'>Pic It Up</h3>
                <p className='whiteText'>Instagram clone built with a team of four</p>
                <a href='https://62bf355dbab5b313b12cda05--inspiring-taiyaki-bccd73.netlify.app/' className='orangeText'>View on github</a>
            </div>

            </div>
            <div className='bg'>
                <h3 className='bg'>g</h3>
            </div>
            </div>
            <div className='mt'></div>
            <h2 className='gold underline margin-left'> Tech stack</h2>
            {/* <ul className='whiteText list'>

                <li><Image
                    src='/javascript.png'
                    height={30}
                    width={30}
                /> Javascript</li>
                <li><Image
                    src='/python.png'
                    height={30}
                    width={30}
                /> Python</li>
                <li><Image
                    src='/express.png'
                    height={30}
                    width={30}
                /> Express</li>
                <li><Image
                    src='/react.png'
                    height={30}
                    width={30}
                /> React</li>
                <li><Image
                    src='/node-js.png'
                    height={30}
                    width={30}
                /> Node.js</li>
                <li><Image
                    src='/html5.png'
                    height={30}
                    width={30}
                /> HTML</li>
                <li><Image
                    src='/css3.png'
                    height={30}
                    width={30}
                /> CSS</li>
                <li><Image
                    src='/sql.png'
                    height={30}
                    width={30}
                /> SQL</li>

            </ul> */}
            <div className='mt'></div>
            <div className='margin-left flex-space'>
            <Image className='margin-left'
                    src='/javascript.png'
                    height={30}
                    width={30}
                />
                <Image className='margin-left'
                    src='/html5.png'
                    height={30}
                    width={30}
                />

            <Image
                    src='/css3.png'
                    height={30}
                    width={30}
                />
                <Image className='margin-left'
                    src='/python.png'
                    height={30}
                    width={30}
                />
                <Image className='margin-left'
                    src='/react.png'
                    height={30}
                    width={30}
                />
                <Image className='margin-left'
                    src='/node-js.png'
                    height={30}
                    width={30}
                />
                </div>
                <div className='mt'></div>
                <div className='bg'>
                <div className='bg'>
                <h3 className='bg'>g</h3>
            </div>
                <h1 className='gold underline margin-left'> About me</h1>
                <h3 className='whiteText margin-left margin-right'>I am a full stack software engineer with a passion for design, music and interactive features. I prioritize writing code that is precise, maintainable and easy for other engineers to use. Providing customized solutions to ever changing problems is my favorite part of being an engineer.</h3>
                <h2 className='whiteText'><a href='https://github.com/GianlorenzoDercole'> View My GitHub</a></h2>
                <div className='bg'>
                <h3 className='bg'>g</h3>
            </div>

                </div>
                <h1 className='whiteText'>Contact</h1>
                <h3 className='whiteText'>johndercole01@gmail.com</h3>
                <h3><a className='whiteText' href='https://github.com/GianlorenzoDercole'>https://github.com/GianlorenzoDercole</a></h3>

        </div>




            {/* <img src='/killer-bunny.jpg' alt='vil'/> */}

        </div>
    )
}
