import { getSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../components/Header"
import Modal from "../components/Modal"
import Tag from "../components/Tag"
import Post from "../components/Post"

export default function Home(session) {

  const router = useRouter()

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

  const deletePost = (id) => {
    setDisplayModal(id)
    console.log("Delete Post", id)
  }

  const confirmDeletePost = async() => {
    console.log("Confirm Delete", displayModal)

    try {
      const req = await fetch(`http://localhost:3000/api/blogs/${displayModal}`, {
          method: "DELETE",
      })
      await req

      if(req.ok){
        router.reload()
      }
      console.log(req)
  } 
    catch (error) {
        console.log(error)
    }
    finally{
      setDisplayModal(false)
    }
  }

  const cancelDeletePost = () => {
    setDisplayModal(false)
  }

  const [blogs, setBlogs] = useState(undefined)
  const [displayModal, setDisplayModal] = useState(false)


    return (
      <>
      {/* Header */}
      <Header session={session} />

      {/* Main */}
      <main className="p-4">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>

        {/* Header */}
        <header className="my-4">
          <h1 className="font-bold text-2xl lg:text-4xl">Recent Posts</h1>
        </header>

        <main className="">
          {/* Tags */}
          {/* <section className="h-28 w-full flex items-center p-2 overflow-x-scroll">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </section> */}

        {/*  */}
          <section className="flex flex-col items-center w-full">
            {blogs && blogs.map( (blog) => (
              <Post blog={blog} key={blog._id} deletePost={deletePost} />
            ))}
          </section>
       </main>
      </main>
      
      <Link href="/posts">
        <a className="bg-blue-500 p-4 h-20 w-20 fixed bottom-4 right-4 bg-opacity-25 rounded flex items-center justify-center hover:bg-opacity-100 duration-300 cursor-pointer text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        </a>
      </Link>

      {/* DeletePost Modal */}
      {displayModal && <Modal confirmDeletePost={ confirmDeletePost } cancelDeletePost={ cancelDeletePost } />}
      </>
    )
}

export async function getServerSideProps(context){
  const session = await getSession(context)
  return !session ? { redirect: { destination: '/signin', permanent: false } } : { props: session }
}