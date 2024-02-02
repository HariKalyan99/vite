import React from 'react'
import styles from '../App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const WelcomeMeassage = () => {
  return (
    <center>
        <h1 className={styles.welcome}>There are no posts yet!</h1>
        {/* <button type="button" className="btn btn-warning" onClick={onFetchPostList}>Fetch Posts</button> */}
    </center>
  )
}

export default WelcomeMeassage