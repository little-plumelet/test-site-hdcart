import { Header } from "../header"
import React from "react"

export const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <main> 
      {children}
    </main>
    </>
  )
}