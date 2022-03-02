import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'


const NewPost = () => {

    const router = useRouter()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [tags, setTags] = useState([])

    console.log({title, body, imageURL, tags})

    const handleForm = async(e) => {
        e.preventDefault()

        const newPost = {
            title,
            body,
            image: imageURL,
            tags
        }

    const req = await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
    await req
    
    if(req.ok) router.push("/")
  }

    return (
        <main className='w-full h-screen flex'>
            
          <Head>
            <title>New Post | Blog</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className='hidden w-1/2 bg-blue-500 rounded rounded-r-none lg:block'></div>
    
          <form action="" className='w-full lg:w-1/2 h-full bg-white rounded rounded-l-none flex flex-col justify-center' onSubmit={ handleForm }>
    
            {/* Logo */}
    
            {/* Header */}
            <header className='w-96 mx-auto px-4 mb-8'>
              <h1 className='text-3xl font-semibold text-center mb-2'>New Post</h1>
              <p className='text-sm text-gray-500 text-center'>Create a New Blog Post</p>
            </header>
    
            {/* Blog Input */}
            <div className='flex flex-col items-center w-full'>

                {/* Title */}
                <div className='w-96 flex shadow-sm my-1'>
                    <input type="text" className=' w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Post Title' value={title} required onChange={ (e) => {setTitle(e.target.value)}}/>

                    <aside className='h-full w-12 flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                    </aside>
                </div>

                {/* Tags */}
                <div className='w-96 flex shadow-sm my-1'>
                    <input type="text" className=' w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Tags' />

                    <aside className='h-full w-12 flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                    </aside>
                </div>

                {/* Image URL */}
                <div className='w-96 flex shadow-sm my-1'>
                    <input type="text" className=' w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Image URL' value={imageURL} onChange={ (e) => {setImageURL(e.target.value)}}/>

                    <aside className='h-full w-12 flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </aside>
                </div>

                {/* Post Body */}
                <div className='w-96 flex shadow-sm my-1'>
                    <textarea className="w-full p-3 rounded rounded-r-none border-r-0 bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400" placeholder='Body' value={body} onChange={( (e) => { setBody(e.target.value)})} ></textarea>

                    <aside className='h-full w-12 min-h-[100px] flex items-center rounded rounded-l-none border-2 border-l-0 bg-gray-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </aside>
                </div>

                <button type='submit' className='p-3 w-96 bg-blue-500 hover:bg-blue-600 duration-200 mx-auto text-white rounded my-2'>Create Post</button>
            </div>
    
          </form>
        </main>
      )
}

export default NewPost;