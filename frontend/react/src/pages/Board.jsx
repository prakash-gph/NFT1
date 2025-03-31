import React from 'react'
import "./Board.css"

const Board = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>

      <div className="boardImage">
        <img src='images/5.svg' alt='image'></img>
        <h1>BOARD OF TRUSTEES</h1>
      </div>

      <div className="photo1">
        <img src='images/photo/S.Sampangi.svg' alt='image'></img>
      </div>

      <div className="roll">
        <h4>S.Sampangi</h4>
        <h6> Prisident</h6>
      </div>

      <div className="photo2">

        <div className='row1'>
          <img style={{ marginLeft: "30px" }} src='images/photo/S.Yogini.jpeg' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>S.Yogini</h4>
          <p style={{ textAlign: "center" }}>MA Let Vice Chairman/Trustee</p>
        </div>

        <div className='row1'>
          <img style={{ marginLeft: "22px" }} src='images/photo/Chandiraseakar.JPG' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>Chandiraseakar</h4>
          <p> Ex-Army Secretary/Trustee</p>
        </div>

        <div className='row1'>
          <img src='images/photo/M.Ramesh.svg' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>M.Ramesh</h4>
          <p>B.Tech Admin/Trustee</p>
        </div>
      </div>

      <div className="photo3">
        <div className='row2'>
          <img src='images/photo/G.RAJSEKAR.svg' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>G.RAJSEKAR</h4>
          <p style={{ textAlign: "center" }}>Secretary/Trustee</p>
        </div>

        <div className='row2'>
          <img src='images/photo/M.Boobalan.jpeg' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>M.Boobalan</h4>
          <p style={{ textAlign: "center" }}>Treasure/Trustee</p>
        </div>

        <div className='row2'>
          <img style={{ marginLeft: "60px" }} src='images/photo/Thirupathi.R.svg' alt='image'></img>
          <h4 style={{ textAlign: "center" }}>Thirupathi.R</h4>
        <p>B.E Aeronautical/DeputySecretary/Trustee</p>
        </div>
      </div>


    </div>
  )
}

export default Board
