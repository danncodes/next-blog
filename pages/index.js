import { getSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Post from "../components/Post"

export default function Home(session) {
  console.log(session)

  useEffect( () => {
    getBlogs()
  },[])

  const getBlogs = async() => {
    try {
      const req = await fetch("http://localhost:3000/api/blogs")
      const data = await req.json()
      setBlogs(data)
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const [blogs, setBlogs] = useState(undefined)


    return (
      <>
      {/* Header */}
      <Header session={session} />

      {/* Main */}
      <main className="p-4">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

        <header className="my-4">
          <h1 className="font-bold text-2xl lg:text-4xl">Recent Posts</h1>
        </header>

       {/*  */}
       <section>
         {blogs && blogs.map( (blog) => (
          <Post blog={blog} key={blog._id} />
         ))}
       </section>
      </main>
      </>
    )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return !session ? { redirect: { destination: '/signin', permanent: false } } : { props: session }
}