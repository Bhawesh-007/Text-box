function Navbar({mode,togglemode}) {
  return (
    
   <nav className={`navbar navbar-expand-lg ${mode==='white'?"navbar-light bg-light":"navbar-dark bg-secondary"} d-flex align-items-center`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Text-Utils</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another</a></li>
              </ul>
            </li>
           
          </ul>
           <button type = "button" className = "btn btn-primary ms-auto"
           onClick={togglemode}
           
           >
            {mode=== "white"? "Dark mode":"Light mode"}
            </button>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar
