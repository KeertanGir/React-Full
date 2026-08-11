import "../src/style.css"
function App() {
  return (
    
    <div className="card-container" >
      <Card avatarLoc="images/Keertan.jpeg" avatarName="Keertan"  Username = "Keertan Gir Goswami"  UserAbout = "Iam Keertan gir A Java and React FullStack Developer With Spring Boot."  skills= { [ 
        {
          name : "Java",
          emoji : "✅",
          color : "Red"      
        },
        {
          name : "SpringBoot",
          emoji : "✅",
          color : "green"      
        },
        {
          name : "React",
          emoji : "✅",
          color : "blue"      
        },
        {
          name : "Mysql",
          emoji : "✅",
          color : "Orange"      
        },
        {
          name : "JavaScript",
          emoji : "✅",
          color : "yellow"      
        }

           ] } />

          
    

    </div>

  );
}

// Card Component
function Card(props) {
  return(
    <div className="card" >
       <Avatar imgLoc = {props.avatarLoc} name = {props.avatarName} />
       <div className="data" >
        <Intro name={props.Username} about={props.UserAbout} ></Intro>

          {/* Yahan Into Banana hy */}
          {/* <h1>{props.avatarName}</h1> */}

        <SkillsList skills = {props.skills} />  
       </div>
    </div>
  );
}

// Avtar Component
function Avatar(props){
    return (
      <img className="avatar" src={props.imgLoc} alt={props.name} ></img>
    )
}

// Introduction Component
function Intro(props){
  return(
    <div>
      <h1> {props.name} </h1>  
      <p>
          {props.about}
      </p>
    </div>
  )
}

// Skill Lists components
function SkillsList(props){
  return(
    <div className="skill-list">
      {
        props.skills.map((skill) =>  {
          return (
          <Skill skillName= {skill.name} emoji={skill.emoji} color={skill.color}/> 
        )})
      }
    </div>
  )
}

function Skill(props){
  return(
    <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skillName}</span>
        <span>{props.emoji}</span>
    </div>
  )
}


export default App;
