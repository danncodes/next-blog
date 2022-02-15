import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Signin() {

  const router = useRouter()
  const session = useSession()

  console.log(session)

  useEffect( () => {
    if(session.status !== "loading"){
      session.status === "authenticated" ?  router.push({ pathname: '/'}) : console.log("UnAuthenticated")
    }
  })




  // UseSession If User is Signed In Auto Redirect To Home/Dashboard Page

  return (
    <main className='w-full h-screen flex'>
      <Head>
        <title>Sign In | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='hidden w-1/2 bg-blue-500 rounded rounded-r-none lg:block'></div>

      <form action="" className='w-full lg:w-1/2 h-full bg-white rounded rounded-l-none flex flex-col justify-center'>

        {/* Logo */}

        {/* Header */}
        <header className='w-96 mx-auto px-4 mb-6'>
          <h1 className='text-3xl font-semibold text-center mb-2'>Hello Again!</h1>
          <p className='text-sm text-gray-500 text-center'>A Blog Is Your Safe Space In a Unsafe World</p>
        </header>

        {/* Email and Password */}
        <div className='flex flex-col items-center w-full'>

          <div className='w-96 flex shadow-sm my-1'>
            <input type="email" className=' w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Email'/>

            <aside className='h-full w-12 flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </aside>
          </div>

          <div className='w-96 flex shadow-sm my-1'>
            <input type="password" className=' w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Password'/>

            <aside className='h-full w-12 flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </aside>
          </div>

          <div className='w-96 flex justify-between items-center mt-4'>
            <div className='flex items-center'>
              <input type="checkbox" name="" id=""/>
              <p className='text-xs text-gray-400 ml-2'>Remember Me</p>
            </div>

            <div>
            <p className='text-xs text-blue-500 hover:text-blue-600 cursor-pointer duration-150 font-medium ml-2'>Recover Password</p>
            </div>

          </div>
        </div>

        {/* Signin and Oauth Button */}
        <div className='flex flex-col items-center w-full my-8 text-sm'>
          <button type='button' className='p-3 w-96 bg-blue-500 hover:bg-blue-600 duration-200 mx-auto text-white rounded my-1'>Sign In</button>
          <button onClick={ () => {signIn('github', { callbackUrl: "/" })}} type='button' className='p-3 w-96 bg-white border-2 border-gray-200 hover:border-gray-300 duration-200 mx-auto text-gray-400 rounded my-1'>Sign In with Github</button>
        </div>

        {/* Link to Signup */}
        <div className='w-full flex justify-center mt-8'>
          <p className='text-sm text-gray-400'>Dont have an account yet? <Link href='/signup'><a className='text-blue-500 font-semibold cursor-pointer hover:text-blue-600 duration-100'>Sign Up</a></Link></p>
        </div>


      </form>
    </main>
  )
}
