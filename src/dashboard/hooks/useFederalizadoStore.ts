import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCampos, getFederalizados } from "../../services";
import { setCampos, setFederalizado } from "../../store/dashboard/federalizadoSlice";
import { useUiStore } from "./useUiStore";

export const useFederalizadoStore = () => {
    const dispatch = useAppDispatch();
    const camposTabla = useAppSelector( state => state.federalizado.campos);
    const { hide, show } = useUiStore();

    const loadCamposFederalizados = async() => {
        try {
            show();
            const { data: { data }} = await getCampos();
            dispatch(setCampos(data));
            hide();
        } catch (error) {
            hide();
            console.error(error);
        }
    }

    const loadFederalizados = async(archivo: string) => {
        try {
            show();
            const { data: { data } } = await getFederalizados(archivo);
            dispatch(setFederalizado(data));
        } catch (error) {
            hide();
            console.error(error);
        }
    }

    return {
        camposTabla,
        loadCamposFederalizados,
        loadFederalizados
    }

}