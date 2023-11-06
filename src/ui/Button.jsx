


const Button = (prop) => {
    const {link='/', children='', style = '', click=null} =prop
  return (
    <button onClick={click} to={link} className={`w-[6rem] text-center text-white   rounded-md py-1 bg-green-700 hover:shadow-xl hover:top-[1px] font-bold  transition-all ease-in-out duration-100  ring-indigo-400 ${style}`}>
     {children}
    </button>
  )
}

export default Button