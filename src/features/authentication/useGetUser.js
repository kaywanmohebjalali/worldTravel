import { useEffect, useState } from "react"
import { getUser } from "../../services/apiAuthentication"


function useGetUser(){
    const [user, setUser]=useState(true)
    const [loading, setLoading]=useState(true)
  useEffect(()=>{
async function get(){
    setLoading(true)
    const data =await getUser()
   setUser(data)
   setLoading(false)
 }
get()
  },[])

  return {user,loading}
}

export {useGetUser}