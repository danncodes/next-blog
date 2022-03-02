const Modal = () => {
    return ( 
        <main className="h-screen w-screen bg-black bg-opacity-60 fixed top-0 left-0 flex items-center justify-center">
            <section className="bg-white p-4 rounded min-w-[5rem] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold mb-4">Delete Post? </h1>

                <div>
                    <p className="text-md font-medium text-center">Are you sure you want to delete this post?</p>
                </div>


                <div className="w-full flex flex-col mt-4">
                    <button type='submit' className='p-3 w-full bg-blue-500 hover:bg-blue-600 duration-200 mx-auto text-white rounded my-1'>Delete Post</button>
                    <button type='submit' className='p-3 w-full border hover:shadow border-gray-500 text-gray-500 duration-200 mx-auto rounded my-1'>Cancel</button>
                </div>
            </section>
        </main>
     );
}
 
export default Modal;