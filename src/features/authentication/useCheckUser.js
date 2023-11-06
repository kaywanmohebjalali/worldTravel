import { useEffect, useState } from "react"
import { getCurrentUser } from "../../services/apiAuthentication"


function useCheckUser(){
    const [user, setUser]=useState(true)
    const [loading, setLoading]=useState(true)
  useEffect(()=>{
async function get(){
    setLoading(true)
    const data =await getCurrentUser()
   setUser(data)
   setLoading(false)
 }
get()
  },[])

  return {user,loading}
}

export {useCheckUser}