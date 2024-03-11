import React from "react";
import Group5 from "../Components/Svg/Group5.svg"
import "../Components/Style.css" 
function Header() {
  return (
    <>
      <nav className="navbar navbarcss navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Group5}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

        </div>
      </nav>

    </>
  )
}

export default Header