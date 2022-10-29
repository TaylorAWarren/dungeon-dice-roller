import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from "../constants/colors"

export default function Header() {
  return (
    <div style={styles.header}>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link></div>
  )
}

const styles = {
    header: {
      height: "100px",
      backgroundColor: colors.background1
    }
}