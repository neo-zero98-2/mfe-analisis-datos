import { Box, Chip, FormControl, MenuItem, TextField, Typography } from "@mui/material";
import { CamposTabla } from "../../interfaces";
import { useMemo, useState } from "react";

interface Props {
    camposTabla: CamposTabla[],
    search: boolean,
    campo: string,
    setValue: React.Dispatch<React.SetStateAction<CamposTabla>>
}

export const Select = ({ camposTabla, search, campo, setValue }: Props) => {

    const [searchKey, setSearchKey] = useState("");

    const filterCampos = useMemo(() => {
        if (searchKey.length === 0) return camposTabla;
        return camposTabla.filter(item => {
            const hasWord = item.Nombre.toLowerCase().indexOf(searchKey.toLowerCase());
            const hasYear = item.Año.toString().indexOf(searchKey.toLocaleLowerCase());
            if (hasWord > -1 || hasYear >-1) {
                return item;
            }
        });
    }, [searchKey]);

    const hadleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.stopPropagation();
        setSearchKey(e.target.value);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.stopPropagation();
        const finKey = camposTabla.find( item => item.id.toString() === e.target.value.toString());
        setValue(value =>  !!finKey ? finKey : value );
    }
    

    return (
        <FormControl fullWidth>
            <TextField
                id="standard-select-currency"
                select
                label={campo}
                onChange={handleChange}
                defaultValue=""
                disabled={camposTabla.length === 0}
            >
                {
                    search && (
                        <MenuItem key={0} value="0" defaultValue="" >
                            <TextField
                                fullWidth
                                placeholder="Buscar"
                                variant="outlined"
                                value={searchKey}
                                onClick={(e) => e.stopPropagation()}
                                onChange={hadleSearch}
                            />
                        </MenuItem>
                    )
                }
                {filterCampos.map((option, index) => (
                    <MenuItem key={index + 1} value={option.id}>
                        <Typography sx={{ mr: 1 }}>

                            {option.Nombre}
                        </Typography>
                        <Typography color="primary">
                            {option.Año}
                        </Typography>
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}
