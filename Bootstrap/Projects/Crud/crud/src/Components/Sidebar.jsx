import React, { useContext } from 'react'
import Logo from '../assets/Instagram-Icon-600x458.png'
import { StorePostList } from '../Store/Store'
const Sidebar = () => {


  const {selectedTab, selectTab} = useContext(StorePostList)

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px", height: "100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <img src={Logo} alt="" height={40} width={40}/>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className={`nav-link ${selectedTab === "Home" && "active"}`} aria-current="page" onClick={() => selectTab("Home")}>
          Home
        </a>
      </li>
      <li>
        <a href="#" className={`nav-link ${selectedTab === "Post" && "active"}`} onClick={() => selectTab("Post")}>
          My posts
        </a>
      </li>
    </ul>
    <hr />
  </div>
  )
}

export default Sidebar