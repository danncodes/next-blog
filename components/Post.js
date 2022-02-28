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
        <div id={blog._id} className="border my-4">
           <h1>{blog.title}</h1>
           <h1>{blog.body}</h1>
           <h1>{blog.createdAt}</h1>
            
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => { deleteBlog(blog._id) }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </div>
        </div>
    );
}
 
export default Post;