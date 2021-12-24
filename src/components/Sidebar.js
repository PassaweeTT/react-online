import React from 'react'

const Sidebar = () => {

    // let fullname = 'John'

    const [fullname,setFullname] = React.useState('John')

    const [isShow, setIsShow] = React.useState(true)

    const changeName = () => {
        // fullname = "Marry"
        setFullname("Marry")
        setIsShow(false)
    }

    React.useEffect(() => {
        console.log("sidebar useEffect") 
        // ทำงานครั้งแรกที่ render component และ ทำงานทุกครั้งที่มีการอัพเดท UI
    })

    React.useEffect(() => {
        console.log("sidebar useEffect one time only")
        // ทำงานแค่ครั้งแรกครั้งเดียวพอ ครั้งที่ render component
    },[])

    React.useEffect(() => {
        console.log("sidebar useEffect fullname")
        // ทำงานครั้งแรกที่ render component และทำงานอีกครั้งเมื่อ fullname เปลี่ยนแปลง
    },[fullname])
 

    return (
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changeName}>Change name</button>
        </>
    )
}

export default Sidebar
