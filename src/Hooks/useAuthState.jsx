import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../utils/firebase"

const useAuthState = ()=>{
   const [user, setUser] = useState(null)

     useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser)
    })
    return ()=> unSubscribe()
  },[]);

  return user

}

export default useAuthState;