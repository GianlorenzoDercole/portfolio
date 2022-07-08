import Image from 'next/image'

import styles from '../styles/About.module.css'
export default function About() {
    return (
        <div>
            <h1>about</h1>
            <p className={styles.extraGreen}>I am a super cool software engineer now. I make super cool sytuff with</p>
            <div>
                <style jsx>{`
                    .orangeText {
                        color: orange
                    }
                    p {
                        font-size: 70px
                    }
                `}</style>
            <p className='orangeText'>I like to code</p>
            </div>

            <Image
                src='/killer-bunny.jpg'
                alt='my fav'
                width={500}
                height={500}
            />

            {/* <img src='/killer-bunny.jpg' alt='vil'/> */}
            <Image
                src='https://placekitten.com/300/300'
                alt='u'
                width={500}
                height={500}
            />
        </div>
    )
}
