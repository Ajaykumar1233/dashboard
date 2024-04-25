import React from 'react'

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-1" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link active" href="#">Master info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Transaction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Display</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Report</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Utility</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Windows</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       {/* <hr/> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-1" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <button className='active'>Master info</button>
              <li className="nav-item">
                <a className="nav-link" href="#">Transactioon</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
       <div className='d-flex align-item-center' style={{border:"solid 1px grey", height:"40px", backgroundColor:"grey"}}>
        <button style={{marginTop:"3px", marginRight:"850px"}}>Item Master</button>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"120px",marginTop:"3px",marginRight:"10px", backgroundColor:"yellow"}}>ALIFA-2425</span>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"40px",marginTop:"3px",marginRight:"10px"}}> <i className="fa-regular fa-window-maximize mx-2"></i></span>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"40px",marginTop:"3px", marginRight:"10px"}}> <i className="fa-solid fa-database mx-2"></i></span>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"40px",marginTop:"3px", marginRight:"10px"}}> <i className="fa-solid fa-bars mx-2"></i></span>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"40px",marginTop:"3px", marginRight:"10px"}}><i className="fa-solid fa-folder-open mx-2"></i></span>
        <span style={{zIndex:"1", border:"solid 1px grey", backgroundColor:"lightgrey", height:"30px", width:"40px",marginTop:"3px" }}><i class="fa-solid fa-power-off mx-2"></i></span>
       </div>
       {/* sidebar */}
       <div className='container'>
        <div className='row'>
        <div className='col-md-2'>
         <div style={{height:"78vh", width:"300px", border:"solid 1px black", marginLeft:"-120px", boxShadow:" 2px 2px"}}>
            <ul style={{marginRight:"140px", textAlign:"start"}} >
              <b>
              <li>MASTER INFO</li>
              <li>TRANSACTION</li>
              <li>DISPLAY</li>
              <li>REPORT</li>
              <li>ACCOUNTS</li>
              <li>UTILITY</li>
              </b>
            </ul>
         </div>
        </div>
        <div className='col-md-10'>
          <div style={{marginRight:"-50px"}}>
          <img src='https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          height="500px"
          width="1200px"
          />
          </div>
        </div>
        </div>
       </div>
    </div>
  )
}