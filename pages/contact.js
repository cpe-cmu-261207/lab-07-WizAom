import Link from "next/link";
const Contact=()=>{
    return(
        <div id="contact" style={{backgroundColor:"#ADB36E"}}>
            <h1>Hello World ! <img src="wolrd.gif" style={{width:"70px",height:"70px"}}/></h1><hr></hr>
            <table style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
                <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
                <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> CAMERA ROLL </p></Link> </td>
                <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
                <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
                <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
            </table>
            <h2>Contact</h2>
            <table style={{width:"100%",borderCollapse: "collapse",borderStyle: "double",borderWidth: "10px",borderColor:"#fcf7e9",backgroundColor:"#E79E4F"}} >
            <tr>
                <td>
                    <section>
                        <nav style={{width:"40%",float: "left"}}>
                            <ul>
                                <li><h4>First name :</h4></li>
                                <li><h4>Last name :</h4></li>
                                <li><h4>Subject :</h4></li>
                                <li><h4>Massage :</h4></li>
                                <li><h4>Phone :</h4></li>
                                <li><h4>E-mail :</h4></li>
                            </ul>
                        </nav>
                    </section>
                </td>
                <td>
                    <section>
                        <article style={{width:"60%"}}>
                            <form action="/action_page.php">
                                <br></br>
                                <p><input type="text" id="fname" name="fname"></input></p>
                                <p><input type="text" id="lname" name="lname"></input></p>
                                <p><input type="text" id="subject" name="subject"></input></p>
                                <p><input type="text" id="massage" name="massage"></input></p>
                                <p><input type="text" id="phone" name="phone"></input></p>
                                <p><input type="text" id="mail" name="mail"></input></p>
                                <br></br><input type="submit" value="Submit" ></input>
                            </form>
                        </article>
                    </section>
                    <br></br>
                    <br></br>
                </td>
            </tr>
            </table>
        </div>
    )
}

export default Contact;