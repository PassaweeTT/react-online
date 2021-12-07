import React from 'react'

const Sidebar = () => {

    //let fullname = 'John';

    const [fullname,setFullname] = React.useState('John')

    const [isShow , setIsshow] = React.useState(true)

    React.useEffect(() =>{
        console.log("sidebar useEffect")
        //ทำงานครั้งแรกที่ Render Component และ ทำงานทุกครั้งที่อัพเดท UI
    })

    React.useEffect(() =>{
        console.log("sidebar useEffect one time only")
        //ทำงานครั้งแรกครั้งเดียวครั้งที่ render component ใส่,[] ลงไปตรงท้าย
    },[])

    React.useEffect(() =>{
        console.log("sidebar useEffect Fullname")
        //ทำงานครั้งแรกครั้งเดียวครั้งที่ render component และ อีกครั้งตอน Fullname ทำงาน
    },[fullname])
    

    const changeName = () =>{
        //fullname = "Marry"
        setFullname("Marry")
        setIsshow(false)
    }

    

    return (
        
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changeName}>Chang Name</button>
        </>
    )
}

export default Sidebar



