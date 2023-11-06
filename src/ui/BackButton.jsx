import { useNavigate } from "react-router-dom"
import Button from "./Button"

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <Button click={(e)=>{
        e.preventDefault()
        navigate('/app/cities')
      }
        } style={'text-[0.9rem] sm:text-[1rem] bg-orange-500 w-auto px-1 sm:px-2 '}>&larr; back</Button>
  )
}

export default BackButton