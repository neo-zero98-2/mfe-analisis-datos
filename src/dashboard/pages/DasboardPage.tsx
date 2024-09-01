import { Box, CircularProgress, Grid2, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { Outlet } from "react-router-dom"
import { DashboardView } from "../views/DashboardView"
import { useFederalizadoStore, useUiStore } from "../hooks"
import { useEffect } from "react"

export const DasboardPage = () => {
  const { loadCamposFederalizados } = useFederalizadoStore();
  const { loader } = useUiStore();

  useEffect(() => {
    loadCamposFederalizados();
  }, []);

  if (loader) {
    return (
      <Grid2 
        container 
        display='flex' 
        justifyContent='center'
        alignItems='center'
        sx={{ height: '100vh' }}
        >
        <CircularProgress />
      </Grid2>
    )
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <DashboardView />
        <Outlet />
      </Box>
    </Box>
  )
}
