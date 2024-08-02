import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import './App.css'
//import store from './store/store.js'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Footer, Header} from './components'

function App() {
  // a loading state we have to make, that will be useful when the data is being fetched from a local storage or from server 
  // since we are about to use the useEffect we will be using the initial state as true
 const [loading, setLoading] = useState(true);
 // we will be changing the state hence dispatch is required
 const dispatch = useDispatch();

 // this useEffect will be asking the current state from the auth whether the user is currentyly logged in or not
// in the first argument we have to ask the auth service who is the current user
 useEffect(()=>{
authService.getCurrentUser()
// the user data is the data of the current user and we will have to dispatch it
// once the user state is found to be true then the data has to be dispatched to the action in the auth.js file
.then((userData)=>{    
if(userData){
  // during dispatching we will require the login 
  dispatch(login({userData}))
}
// we will dispatch logout in else as when we tried taking data from user and did not receive it then with this logout we will be able to update the information that the user is not loggedin
else{
  dispatch(logout())
}
})
// the finally will update the state 
.finally(()=>
  setLoading(false)
)
 }, [])


 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
<Header/>
<Footer/>
    </div>
<main>
  {/*outlet*/} 
</main>
  </div>
 
 ) : null
}

export default App
