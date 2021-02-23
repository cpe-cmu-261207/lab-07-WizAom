import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const password = '602a9b8ae38c9a1e9cf12c79'
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL+"/post", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPosts(respond.data.data)
        })
    },[] )
    return (
        <div style={{backgroundColor:"#ADB36E"}}>
        <h1>Hello World ! <img src="wolrd.gif" style={{width:"70px",height:"70px"}}/></h1><hr></hr>
        <table style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> CAMERA ROLL </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
        </table>
            <h2>All Posts</h2>
            {posts.map((item)=>{
                return <div key={item.id} >
                    <h4>{"Post : "+item.text}</h4>
                    <p style={{textAlign:"center"}}>
                        <Link href={"/post/"+item.id}>
                        <img className="imgflame" src={item.image} style={{width:"70%"}}></img>
                        </Link>
                        <p style={{color:"#ff9f80"}}>{"Likes : "+item.likes}</p>  
                    </p>
                </div>
            })}
        </div>
    )
}

export default  Posts