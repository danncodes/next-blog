import { getSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import Header from "../components/Header"

export default function Home(session) {
  console.log(session)

  useEffect( () => {
    getBlogs()
  })

  const getBlogs = async() => {
    const req = await fetch("http://localhost:3000/api/blogs")
    const data = await req.json()
    console.log(data)
  }
    return (
      <main>
        {/* Header */}
        <Header session={session} />

       

        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return !session ? { redirect: { destination: '/signin', permanent: false } } : { props: session }
}