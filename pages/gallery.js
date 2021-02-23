import Link from "next/link";
const Gallery=()=>{
    return(
        <div id="contact" style={{backgroundColor:"#ADB36E"}}>
            <title>gallery</title>
            <h1>Hello World ! <img src="wolrd.gif" style={{width:"70px",height:"70px"}}/></h1><hr></hr>
            <table style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
                <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
                <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> CAMERA ROLL </p></Link> </td>
                <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
                <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
                <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
            </table>
            <table style={{padding: "15px"}}></table> 
            <br></br><h1>Photos describe my life</h1>
            <table>  
                <h2>This is Me</h2><br></br>
                <td><br></br><img src="me1.JPG" style={{width:"170px",height:"220px"}}></img><br></br></td>
                <td><br></br><img src="me2.JPG" style={{width:"170px",height:"220px"}}></img><br></br></td>
                <td><br></br><img src="me3.JPG" style={{width:"170px",height:"220px"}}></img><br></br></td>
                <td><br></br>This is me in clearly filter. <br></br>I took all of this pics on Monday,Nov 30th 2020 at my room;</td>
            </table>
            <br></br>
            <table>
                <h2>My cuties pet</h2><br></br>
                <td><br></br><img src="to1.JPG" style={{width:"170px",height:"220px"}}></img></td>
                <td><br></br><img src="to2.JPG" style={{width:"170px",height:"220px"}}></img></td>
                <td><br></br><img src="to3.JPG" style={{width:"170px",height:"220px"}}></img></td>
                <td><br></br>This is my cuties rabbit. His name is Kato. <br></br>Since I came to study at Chiang Mai, 
                    My mom has renovated my bedroom to be his house TT <br></br>still love him anyway;</td>
            </table>
            <table>
                <h2>My Hometown</h2>
                    <td><br></br><img src="gg1.jpg" style={{width:"280px",height:"200px"}}></img></td>
                    <td><br></br><img src="gg2.jpg" style={{width:"280px",height:"200px"}}></img></td>
                    <td><br></br><img src="gg3.jpg" style={{width:"280px",height:"200px"}}></img></td>
                    <td><br></br>My hometown is Roi-Et. I was born and grew up in Roi-Et. <br></br> I stayed at Roi-Et all of my life 
                        before got lucky bring me to study at Chiang Mai. <br></br>And Definately I like Mho Lum and Rod Hea Lool;</td>
            </table>
            <table>
                <h2>Good Vibe n Chillin pics</h2>
                    <td><br></br><img src="vibe1.JPG" style={{width:"170px",height:"220px"}}></img></td>
                    <td><br></br><img src="vibe2.JPG" style={{width:"170px",height:"220px"}}></img></td>
                    <td><br></br><img src="vibe3.JPG" style={{width:"170px",height:"220px"}}></img></td>
                    <td><br></br>I love to travel and be with friends or family. <br></br> Every time with them, I don't feel alone;<br></br> </td>
            </table>  
        </div>
    )
}

export default Gallery;