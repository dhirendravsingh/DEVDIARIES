import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { logout } from "../store/authSlice"
// after logging out we would need to dispatch something hence we will import slice as well
export default function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        //after calling logout we will get a promise from appwrite and to manage that promise we will have to use
        authService.logout().then(()=>{
            //when the logout has been successfully done now we have to dipatch
            dispatch(logout())
        })
    }
    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>
            Logout
        </button>
    )
}