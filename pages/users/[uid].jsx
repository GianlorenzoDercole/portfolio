import { useRouter } from 'next/router'


export default function UserIdPage() {
    const router = useRouter()

    const { uid } = router.query 

    return (
        <h1>hello us {uid}</h1>
    )
}
