import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status" style={{width: "5rem", height: "5rem"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Loading