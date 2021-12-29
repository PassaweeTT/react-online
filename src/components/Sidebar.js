 import React from 'react'

const Sidebar = () => {

   // let fullname = 'John'
    const [fullname,setFullname] = React.useState('John')
    const [isShow,setIsShow] = React.useState(true)
    const changename = () => {
       // fullname = 'Marry'
       setFullname ('Marry')
       setIsShow(false)
    }

    React.useEffect(() => {
        console.log("sidebar use effect")
    })

    React.useEffect(() => {
        console.log("sidebar use effect onetime only")
    },[])
    React.useEffect(() => {
        console.log("sidebar use effect fullname")
    },[fullname])
    return (
        <div>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> :<p>World</p>
            }
            <button onClick={changename}>Change name</button>
        </div>
    )
}

export default Sidebar
