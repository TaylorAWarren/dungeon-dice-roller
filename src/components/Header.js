import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from "../constants/colors"

export default function Header() {
  return (
    <div style={styles.header}>
        <Link to="/"> Home</Link> {" "}
        <Link to="/about"> About</Link>
        <Link to="/teamBuilder"> Team Builder</Link>
        <Link to="/CharacterSheet"> Character Sheet</Link>
    </div>
  )
}

const styles = {
    header: {
      height: "100px",
      backgroundColor: colors.background1
    }
}