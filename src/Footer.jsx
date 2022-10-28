const Footer = () => {
  let today = new Date();
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
       <div className="col-8">
        <h1>Team Member Allocation App - {today.getFullYear()}</h1>
       </div>
      </div>
    </div>
  )
}
export default Footer;