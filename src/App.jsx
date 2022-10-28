import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Content from "./Content.jsx"
import Employees from "./Employees"
import { useState,useEffect} from "react";
export default function App() {
  const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeams'))||"TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeelist'))||[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  useEffect(()=>{localStorage.setItem('employeelist',JSON.stringify(employees))},[employees]);
  useEffect(()=>{localStorage.setItem('selectedTeams',JSON.stringify(selectedTeam))},[selectedTeam]);
  function handleTeamSelectionChange(event){
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee)=> employee.id === parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:" "}:{...employee,teamName:selectedTeam}:employee);
    setEmployees(transformedEmployees);
  }
  return (
    <main>
      <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}/>
      
      <Employees employees={employees} selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} handleEmployeeCardClick={handleEmployeeCardClick}/>
      <Content />
      <Footer />
    </main>
  )
}

