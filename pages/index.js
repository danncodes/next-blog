import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"
import handleAuth from "../utils/handleAuth"

export default function Home() {
  const { data: session } = useSession()

  handleAuth()

  // useSession is a client side hook
  // getSession is a server side hook

  // UseSession If User is Signed In Auto Redirect To Home/Dashboard Page
  useEffect( () => {
    session ? console.log("User Authenticated, Fetch Home Info", session) : console.log("User Not Authenticated Redirect...") 
  })
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
