import React from 'react'



const Footer = ( ) => {
const Name = "Passawee Wanwilai "
    return (
        <>
                 <footer className="container">
          <p>© {Name} 2000-{new Date().getFullYear()}</p>
        </footer>
        </>
    )
}
export default Footer
