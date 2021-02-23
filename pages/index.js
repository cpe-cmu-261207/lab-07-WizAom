import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const password = '602a9b8ae38c9a1e9cf12c79'
const Home = () => {
  return (
    //   <h1>This is home page</h1>
    <div id="index" style={{backgroundColor:"#ADB36E"}}>
        <h1>Hello World ! <img src="wolrd.gif" style={{width:"70px",height:"70px"}}/></h1><hr></hr>
        <table style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> CAMERA ROLL </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
        </table>
            <table style={{padding: "15px"}}>
            <h1> About Me </h1><br></br>
            <td ><br></br><img src="home1.gif" style={{width:"220px",height:"300px"}}/></td>
                <td><hr></hr>
                  Crazy girl in the crazy world and just wanna be lazy with ma daddy
                    but it's not easy bcoz there are enemy wanna beast me... By the way I don't care tho <img src="emoji.png" style={{width:"35px",height:"35px"}}>
                    </img><hr></hr>
                </td>
                <tr></tr>
                    <td><h2>General Info</h2>
                    <p>Name : Sarinya Pamontree    Nickname : Aom  Student code : 620610810
                        <br></br>ชื่อ : นางสาวศริญญา ภามนตรี      ชื่อเล่น : ออม    รหัสนักศึกษา : 620610810 <br></br>
                        <br></br> Currently Education : 2nd Year, Computer Engineering, Faculty of Engineering, Chaing Mai University.
                        <br></br>กำลังศึกษาชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทลัยเชียงใหม่ <br></br>
                        <br></br> Graduated High School : Strisuksa School, Roi-Et.
                        <br></br>จบการศึกษาชั้นมัธยมปลายโรงเรียนสตรีศึกษา จังหวัดร้อยเอ็ด <br></br>
                        <br></br> Address : 11/2 Ronnachaichanyut Road Sub-District Nai Maueng District Maueng Roi-Et , Roi-Et 45000.
                        <br></br>ที่อยู่ : 11/2 ถนนรณชัยชาญยุทธ ซอย 45 ตำบลในเมือง อำเภอเมือง จังหวัดร้อยเอ็ด 45000 <br></br>
                        </p></td>
                        <hr></hr>
                <tr>
                    <td>
                        <h2>skills</h2>
                    </td>
                    <td>
                        <ul>
                            <li>Dance (Free style,Cover Dance)</li>
                            <li>Wot (traditional instrument)</li>
                            <li>Guitar (instrument)</li>
                            <li>Harmonica KEY C (instrument)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Hobbies</h2>
                    </td>
                    <td>
                        <ul>
                            <li>Read a book (Biology, History, Fiction)</li>
                            <li>Cooking</li>
                            <li>Singing</li>
                            <li>Travel and take photos</li>
                            <li>Seeing people and drinking coffee</li>
                        </ul>
                    </td>
                </tr>
                <tr><td><h2>E-Mail</h2></td>
                    <td>
                    <p><img src="outlook.png" style={{width:"35px",height:"25px"}}></img>  Outlook : <a href="mailto:name@yourdomain.com">Aom_ll2555@hotmail.com</a>
                    <br></br><img src="gmail.png" style={{width:"35px",height:"25px"}}></img> Gmail : <a href="mailto:name@yourdomain.com">sarinyapamotree@gmail.com</a>
                    <br></br><img src="cmu.png" style={{width:"35px",height:"25px"}}></img> Campus : <a href="mailto:name@yourdomain.com">sarinya_pa@cmu.ac.th</a>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td><h2>Application</h2></td>
                    <td><p><img src="line logo.png" style={{width:"25px",height:"25px"}}></img>  Line id : <a href="https://line.me/ti/p/tMsPJGtp7E"> aom_sp88</a>
                    <br></br><img src="facebook.png" style={{width:"25px",height:"25px"}}></img> Facebook : <a href="https://web.facebook.com/wiz.sarinya"> Wiz Sarinya</a>
                    <br></br><img src="insta.png" style={{width:"25px",height:"25px"}}></img> Instagram : <a href="https://www.instagram.com/wz.srny/"> wz.srny</a>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td><h2>PhoneCall</h2></td>
                    <td><p>(+66) 962217795</p></td>
                </tr>
                <tr>
                    <td><h2>My Lifestyle</h2></td>
                    <td><p><img src="spo.png" style={{width:"25px",height:"25px"}}></img><a href="https://open.spotify.com/user/21c3yomijpxlbajpwv4ij6cna?si=f5RQQoiJRlCAYrtuYbUkNA"> Click ! </a></p>
                    </td>
                </tr>
        </table>
    </div>
  )
}

export default Home;