import { getSession, signOut } from "next-auth/react"

export default function Home(session) {
  console.log(session)
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return !session ? { redirect: { destination: '/signin', permanent: false } } : { props: session }
}