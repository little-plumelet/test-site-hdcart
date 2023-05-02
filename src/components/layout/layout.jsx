import { Header } from "../header"
import React from "react"

export const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <main style={{padding: '0 1rem'}}> 
      {children}
    </main>
    </>
  )
}