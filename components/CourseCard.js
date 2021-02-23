const CourseCard = (props) => {
  return (
    <>
    <p>
    <div style={{width:"100%",borderStyle: "double",borderWidth: "10px",borderRadius: "10px",borderColor:"#fcf7e9",backgroundColor:"#E79E4F"}} id="courseCard">
      <br></br>
      <p>-  Course name : {props.name}</p>
      <p>-  Credit : {props.crd}</p>
      <p>-  Grade : {props.grd}</p>
      <p style={{textAlign:"center"}} id="deleteButton"><button onClick = {() =>props.del(props.name)}> ----- Delete this course ----- </button></p>
      <br></br>
    </div>
    <br></br>
    </p>
    </>
  );
};

export default CourseCard;