import React from 'react'
import { colors } from "../constants/colors"

export default function Footer() {
  return (
    <div style={styles.footer}>Footer</div>
  )
}

const styles = {
    footer: {
      height: "100px",
      backgroundColor: colors.background1
    }
}