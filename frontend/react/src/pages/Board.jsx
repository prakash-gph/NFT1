import React from 'react'
import "./Board.css"

const Board = () => {
  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>

      <div className="boardImage">
        <img src='images/board.svg' alt='image'></img>
      </div>

      <h1 className='board-head'>BOARD OF TRUSTEES</h1>

      <div className="photo1">
        <img src='images/photo/S.Sampangi.svg' alt='image'></img>
      </div>

      <div className="roll">
        <h4>S.Sampangi</h4>
        <h5> Prisident</h5>
      </div>



      <div className="photo2">

        <div className='row1'>
          <img src='images/photo/S.Yogini.svg' alt='image'></img>
          <h4 >S.Yogini</h4>
          <p style={{ textAlign: "center" }}>MA Let Vice Chairman/Trustee</p>
        </div>

        <div className='row1' >
          <img src='images/photo/Chandiraseakar.svg' alt='image'></img>
          <h4>Chandiraseakar</h4>
          <p style={{ textAlign: "center" }}> Ex-Army Secretary/Trustee</p>
        </div>

        <div className='row1' >
          <img src='images/photo/M.Ramesh.svg' alt='image'></img>
          <h4>M.Ramesh</h4>
          <p style={{ textAlign: "center" }}>B.Tech Admin/Trustee</p>
        </div>






        {/* <div className="photo"> */}
        <div className='row1' >
          <img src='images/photo/G.RAJSEKAR.svg' alt='image'></img>
          <h4>G.RAJSEKAR</h4>
          <p>Secretary/Trustee</p>
        </div>

        <div className='row1' >
          <img src='images/photo/Thirupathi.R.svg' alt='image'></img>
          <h4 >Thirupathi.R</h4>
          <p style={{ textAlign: "center" }}>B.E Aeronautical<br></br>/DeputySecretary/Trustee</p>
        </div>

       <div className='row1'>
          <img src='images/photo/M.Boobalan.svg' alt='image'></img>
          <h4>M.Boobalan</h4>
          <p>Treasure/Trustee</p>
        </div>


      </div>






    </div>


    // </div>


  )
}

export default Board
