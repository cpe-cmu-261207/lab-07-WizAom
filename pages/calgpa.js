import Link from "next/link";
import { createContext, useEffect, useReducer } from "react";
import CourseCard from "../components/CourseCard";
import CourseForm from "../components/CourseForm";
import { useContext, useState } from "react";

export const sample = createContext()

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({name:"",grd:"A",crd:"1"});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    var r_gpa = 0
    var r_cre  = 0 
    var cal_gpa = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          r_gpa = 4
          r_cre += Number(item.crd) 
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'B+' :
          r_gpa = 3.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'B' :
          r_gpa = 3
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'C+' :
          r_gpa = 2.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'C' :
          r_gpa = 2
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'D+' :
          r_gpa = 1.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'D' :
          r_gpa = 1
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'F' :
          r_gpa = 0
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
      }  
    });
    setGPA(cal_gpa / r_cre) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log(inputData.name)
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <div  style={{backgroundColor:"#ADB36E"}}>
      <h1>Hello World ! <img src="wolrd.gif" style={{width:"70px",height:"70px"}}/></h1><hr></hr>
      <table style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}> CAMERA ROLL </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
      </table>
      <h1>GPA CALCULATOR </h1>
      <div  style={{backgroundColor:"#ADB36E"}}>
        <h1>My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
        <select onChange = { e => 
            setInputData({...inputData,crd: e.currentTarget.value}) 
          }>
          {credit.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
        <select type="text" onChange = { e => 
           setInputData({...inputData,grd: e.currentTarget.value}) 
          }>
          {grade.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <form onSubmit ={
          e => addCourse(e)}>
          <input type="text" placeholder="Course" onChange = { e => 
            setInputData({...inputData,name: e.currentTarget.value}) 
          }/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit"> Add</button>
       </form>
      </div>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <p style={{width:"100%",textAlign: "center",backgroundColor:"#E79E4F",borderStyle:"double",borderWidth: "10px",borderColor:"#fcf7e9"}}> gpa is {GPA} </p>
    </div>
  );
}

export default App;