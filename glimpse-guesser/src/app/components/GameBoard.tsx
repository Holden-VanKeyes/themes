'use client'

import React, { useState } from 'react'
import css from './GameBoard.module.scss'

export default function GameBoard() {
  const [selected, setSelected] = useState(0)

  const grid = new Array(5).fill(0).map((_, indx) => indx + 1)

  const handleSelection = (indx: any) => {
    setSelected(indx)
  }

  const makeGrid = (indx: number) => {
    return (
      <div
        key={indx}
        className={`${css.row} ${selected === indx ? css.selected : ''}`}
        id={'row' + `${indx}`}
        onClick={() => handleSelection(indx)}
      />
    )
  }

  return (
    <div className={css.gridBoard}>
      {grid.map((_, indx) => makeGrid(indx + 1))}
      {/* <div className={css.row} id='row1'></div>
      <div className={css.row} id='row2'></div>
      <div className={css.row} id='row3'></div>
      <div className={css.row} id='row4'></div>
      <div className={css.row} id='row5'></div> */}
    </div>
  )
}
