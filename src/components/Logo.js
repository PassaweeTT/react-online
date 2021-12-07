import React from 'react'
import {logo,title} from '../styles/style'
import useHover from '../hooks/useHover'

const Logo = () => {

    const [hover , mouseOver,mouseOut] = useHover()

    // const logoImage = "logo192.png"
    const logoImage = {
        url:"./logo192.png"
    }


    return (
        <div>
            
            {
                hover ? <h3 style={title}>Logo</h3> : null
            }

            
            {/* <img src={logoImage} width = "100" alt="Logo"/>  */}
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo} src={logoImage.url} width = "100" alt="Logo"/> 
        </div>
    )
}

export default Logo
