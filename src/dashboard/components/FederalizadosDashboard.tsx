import { Button, Grid2 } from "@mui/material";
import { useFederalizadoStore } from "../hooks";
import { Select } from "./Select";
import { useCallback, useState } from "react";
import { CamposTabla as tabla } from "../../interfaces";

const intialCampos = {
  id: 0,
  Año: "",
  Nombre: "",
  Descarga: "",
  Periodo: ""
}

export const FederalizadosDashboard = () => {

  const { camposTabla, loadFederalizados } = useFederalizadoStore();
  const [campoSelect, setCampo] = useState<tabla>(intialCampos);

  const handleClick = () => {
    if (campoSelect.Descarga.length > 0) {
      console.log("length ", campoSelect.Descarga.length > 0);
      
      loadFederalizados(campoSelect.Descarga);
    }
  }

  return (
    <>
      <Grid2 container alignItems='center'>
        <Grid2 size={{ xs: 12, sm: 5 }} m={1}>
          <Select camposTabla={camposTabla} search={true} campo="Nombre" setValue={setCampo} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 3 }}>
          <Button
            variant="outlined"
            sx={{ m: 1 }}
            size="large"
            disabled={campoSelect.Descarga.length === 0}
            onClick={handleClick}
            >
            Aceptar
          </Button>
        </Grid2>
      </Grid2>
    </>
  )
}
