interface ButtonProps{
    children:string
    onClickFunction:() => void
    color?:string
}


const Button = ({children, onClickFunction,color="dark"}:ButtonProps) => {
  return (
    <>
 {/* <button className="btn btn-primary" onClick={onClickFunction}>{children}</button>  */}
 
 <button className={`btn btn-${color}`} onClick={onClickFunction}>{children}</button>
 
    </>



  )
}

export default Button