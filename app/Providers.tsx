"use client"
import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"

export default function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </ThemeProvider>
  )
}
