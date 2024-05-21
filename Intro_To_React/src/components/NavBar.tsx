interface NavProps{
    cartItemCount: number;
}

//function
const NavBar = ({cartItemCount}:NavProps) => {
  return (
    <>
        <p>
            NavBar: {cartItemCount}
        </p>
    
    
    
    
    
    </>
  )
}

export default NavBar