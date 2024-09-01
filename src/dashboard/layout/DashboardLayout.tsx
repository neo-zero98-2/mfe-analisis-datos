import { Box, Toolbar } from "@mui/material"
import { ReactNode } from "react"
import { NavBar } from "../components/NavBar"


interface Props {
    children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar/>
                { children }
            </Box>
        </Box>
  )
}
