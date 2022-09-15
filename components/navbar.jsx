

import Link from 'next/link'
import styles from '../styles/Mobile.module.css'
export default function Navbar() {
    return (
        <nav>
            <div className={styles.margint}>
            <div className={styles.flex}>
            <div className={styles.whiteItalic}>
            {/* <a href='/'><p className={styles.whiteItalic}>hi</p></a> */}
            <Link href='/'>
                Home
            </Link>
            </div>











            <div className={styles.whiteItalic}>
            <Link href='#about'>
                About
            </Link>
            </div>
            <div className={styles.whiteItalic}>
            <Link href='#projects'>
                Projects
            </Link>
            </div>
            <div className={styles.whiteItalic}>
    <Link href='#contact'>
                Contact
            </Link>
            </div>
            </div>
            {/* <Link href='/'>
                Home
            </Link>

            <Link href='/about'>
                about m
            </Link> */}
            </div>
        </nav>
    )
}



// import Link from 'next/link'
// import styles from '../styles/Home.module.css'
// export default function Navbar() {
//     return (
//         <nav>
//             <div className={styles.margint}>
//             <div className={styles.flex}>
//                 <div className={styles.orangeText}>
//             <Link href='/'>
//                 Home
//             </Link>
//             </div>











//             <div className={styles.orangeText}>
//             <Link href='/about'>
//                 About
//             </Link>
//             </div>
//             <div className={styles.orangeText}>
//             <Link href='/projects'>
//                 Projects
//             </Link>
//             </div>
//             <div className={styles.orangeText}>
//     <Link href='/contact'>
//                 Contact
//             </Link>
//             </div>
//             </div>
//             {/* <Link href='/'>
//                 Home
//             </Link>

//             <Link href='/about'>
//                 about m
//             </Link> */}
//             </div>
//         </nav>
//     )
// }
