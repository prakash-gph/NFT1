import React from 'react'
import"./Board.css"

const Board = () => {
  return (
    <div style={{backgroundColor:"rgb(255, 255, 255)"}}>
      <div className="boardImage">
        <img src='images/5.svg'alt='image'></img>
      <h1>BOARD OF TRUSTEES</h1>
      </div>
      <div className="photo1">
        <img src='images/photo/S.Sampangi.jpeg' alt='image'></img>
      </div>
      <div className="roll">
      <h4>S.Sampangi</h4>
      </div>
      <div className="photo2">
        <div className='row1'>
        <img src='images/photo/S.Yogini.jpeg' alt='image'></img>
        <h4 style={{textAlign:"center"}}>S.Yogini</h4>
        </div>
        <div className='row1'>
        <img src='images/photo/Chandiraseakar.JPG' alt='image'></img>
        <h4 style={{textAlign:"center"}}>Chandiraseakar</h4>
        </div>
        <div className='row1'>
        <img src='images/photo/M.Ramesh.jpeg' alt='image'></img>
        <h4 style={{textAlign:"center"}}>M.Ramesh</h4>
        </div>
      </div>

      <div className="photo3">
        <div className='row2'>
        <img src='images/photo/G.RAJSEKAR.jpeg' alt='image'></img>
        <h4 style={{textAlign:"center"}}>G.RAJSEKAR</h4>
        </div>
        <div className='row2'>
        <img src='images/photo/M.Boobalan.jpeg' alt='image'></img>
        <h4 style={{textAlign:"center"}}>M.Boobalan</h4>
        </div>
        <div className='row2'>
        <img src='images/photo/Thirupathi.R.jpeg' alt='image'></img>
        <h4 style={{textAlign:"center"}}>Thirupathi.R</h4>
        </div>
      </div>


    </div>
  )
}

export default Board
