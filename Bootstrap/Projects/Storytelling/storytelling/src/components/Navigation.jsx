import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.nav}>
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="https://www.svgrepo.com/show/298470/book.svg" alt="story book" height={40} width={40} />
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"></use></svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"></use></svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </header>
  )
}

export default Navigation