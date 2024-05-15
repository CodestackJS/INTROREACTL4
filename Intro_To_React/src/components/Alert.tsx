

interface AlertProps{
    // text:string
    children: string
    closingAlertButton?: () => void
  
}




const Alert = ({children,closingAlertButton}: AlertProps) => {
  return (
    <>

    <div className="alert alert-primary alert-dismissible" role="alert">{children} 
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closingAlertButton}></button>
    </div>
    
    </>


  )
}




export default Alert