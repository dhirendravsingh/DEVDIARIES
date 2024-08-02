import {LogoutBtn, Logo, Container} from './index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'

export default function Header(){
    // here the logout button will be conditonally rendered as if the user is logged in only then the logout button will be displayed for him
// here with the use selector we are accessing the authslice and getting the current login status of the user 
    const authStatus = useSelector((state)=> state.auth.status)

    const navigate= useNavigation()

    const navItems= [
        {
name : 'Home',
slug: "/",
active: true
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    
    return(
        <header className='py-3 shadow bg-gray-500'>
<Container>
<nav className='flex'>
    <div className='mr-4'>
        <Link to='/'>
        <Logo width='70px' />
        </Link>
        
    </div>
    <ul className='flex ml-auto'>
        {navItems.map((item)=>
        item.active ? (
            <li key={item.name}>
                <button onClick={()=> navigate} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}
                </button>
            </li>
        ) : null
        )}
        {/* Here if the authStatus is true then only the condition will be executed */}
        {authStatus && (
            <li>
                <logoutBtn/>
            </li>
        )}
    </ul>
</nav>
</Container>
        </header>
    )
}