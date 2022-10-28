const Header = ({selectedTeam,teamMemberCount}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
       <div className="col-8">
        <h1>Team Member Allocation</h1>
         <h3>{selectedTeam} has {teamMemberCount} Members</h3>
       </div>
      </div>
    </div>
  )
}
export default Header;