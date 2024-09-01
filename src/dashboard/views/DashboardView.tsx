import { Button, Grid2, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useUiStore } from "../hooks";

export const DashboardView = () => {
  const navigate = useNavigate();
  const { loader } = useUiStore();

  const handleNavigate = (link: string) => {
    navigate(link);
  }

  return (
    <Grid2 container justifyContent='space-between' alignItems='center'>
      <Grid2 size={12}>
        <Typography textAlign='center' variant="h4">
          Proyecto de analisis de datos
        </Typography>
      </Grid2>
      <Grid2 size={12} textAlign='center'>
        <Button variant="text" sx={{ m: 2 }}
          disabled={loader}
          onClick={() => handleNavigate('federalizado')}
        >
          Gastos Federalizados
        </Button>
        <Button variant="text" sx={{ m: 2 }}
          disabled={loader}
          onClick={() => handleNavigate('fideicomisos')}
        >
          Fideicomisos
        </Button>
      </Grid2>
    </Grid2>
  )
}
