
const Header = ({session}) => {
    return ( 
    <header className="h-20 shadow-sm flex justify-between items-center px-4">
        {/* Hamburger Menu */}
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </div>

        {/* Search Bar */}
        <div className="w-8/12 max-w-md">
            <input type="email" className='w-full p-3 rounded bg-gray-50 outline-none border-2 duration-100 text-sm text-gray-400' placeholder='Search Posts' />
        </div>

        {/* User Image */}
        <div className="h-12 w-12 overflow-hidden rounded-full">
            <img src={session.user.image || 'https://i.imgur.com/JN1QAOy.png'} alt="User Avatar" className="object-cover"/>
        </div>
    </header>
);
}
 
export default Header;