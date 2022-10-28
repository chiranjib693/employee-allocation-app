import femaleProfile from './Images/female.jpeg'
import maleProfile from './Images/male.jpeg'
const Employees = ({employees,selectedTeam,handleTeamSelectionChange, handleEmployeeCardClick}) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        <div className="col-8">
          
           <div className="card-collection">
              {employees.map((emp) => (
           <div className={(emp.teamName === selectedTeam)?"card m-2 standout":"card m-2"} key={emp.id} id={emp.id} style={{cusror: "pointer"}} onClick={handleEmployeeCardClick}>
             {emp.gender==='male'?<img src={maleProfile}/>:<img src={femaleProfile}/>}
            <div className="card-body">
              <h5 className="card=title">{emp.fullName}</h5>
              <p className="card-designation"><b>Designation:</b>{emp.designation}</p>
            </div>
          </div>
        ))}
           </div>
        </div> 
        
      </div>
    </main>
  )
}
export default Employees;