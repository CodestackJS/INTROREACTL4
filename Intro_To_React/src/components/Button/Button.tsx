import Styles from './Button.module.css'

interface ButtonProps{
    children:string
    onClickFunction:() => void
    color?:string
}


const Button = ({children, onClickFunction,color="dark"}:ButtonProps) => {
  return (
    <>
 {/* <button className="btn btn-primary" onClick={onClickFunction}>{children}</button>  */}
 
 <button className={Styles["btnPrimary"]} onClick={onClickFunction}>{children}</button>
 
{/* <button className={Styles["btnSecondary"]} onClick={handleIncrement}>-</button> */}

    </>



  )
}

export default Button