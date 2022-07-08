import Link from 'next/Link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                Home
            </Link>

            <Link href='/about'>
                about m
            </Link>
        </nav>
    )
}
