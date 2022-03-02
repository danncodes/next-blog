const Post = ({blog}) => {
    console.log("Post", blog)

    const deleteBlog = async(id) => {
        console.log("Delete Blog", id)
        try {
            const req = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: "DELETE",
            })
            const data = await req.json()
            console.log(data)
        } 
        catch (error) {
            console.log(error)
        }
    }

    const editBlog = async(id) => {
        console.log("Edit Blog", id)

        const blog = {
            // Data
        }

        try {
            const req = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(blog)

            })
            const data = await req.json()
            console.log(data)
        } 
        catch (error) {
            console.log(error)
        }
    }
    return ( 
        <section id={blog._id} className="border hover:border-2 hover:shadow hover:border-blue-100 duration-150 my-4 p-2 min-h-[9rem] rounded flex gap-y-4 relative w-full">

            <div className="w-8/12 flex flex-col justify-around">
                <section>
                    {/* Title */}
                    <h1 className="text-lg font-semibold">{blog.title}</h1>

                    {/* Tags */}
                    <ul className="flex my-1 flex-wrap">
                        {blog.tags.map( (tag) => (
                            <li className="rounded shadow bg-blue-500 font-medium text-white hover:bg-blue-600 py-1 px-2 text-xs cursor-pointer mr-2 my-1 duration-150" key={tag}>{tag}</li>
                        ))}
                    </ul>
                    
                    {/* Post Body */}
                    <div className="mt-4 w-10/12">
                        <p className="text-sm font-light">{blog.body}</p>
                    </div>
                </section>
                    
                {/* Edit and Delete */}
                <div className="flex gap-2">

                    <div className="hover:text-blue-600 duration-150 cursor-pointer p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>

                    <div className="hover:text-blue-600 duration-150 cursor-pointer p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>

                    <div className="hover:text-blue-600 duration-150 cursor-pointer p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
    
                </div>
            </div>
            
            {/* Post Image */}
            <div className="w-4/12 rounded overflow-clip ml-4 flex items-center">
                {blog.image && <img src={blog.image} alt="" className="object-cover h-full"/>}
                {!blog.image && 
                <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-gray-400 mt-2">No Image</h4>
                </div>
                }
            </div>

        </section>
    );
}
 
export default Post;