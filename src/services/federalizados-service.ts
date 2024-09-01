import { AxiosResponse } from "axios";
import api from './api';
import { CamposTabla, Federalizado, ResponseSuccess } from "../interfaces";

export const getCampos = async(): Promise<AxiosResponse<ResponseSuccess<CamposTabla[]>>> => await api.get('/gastos-federalizados');

export const getFederalizados = async(archivo: string): Promise<AxiosResponse<ResponseSuccess<Federalizado[]>>> => await api.get(`/gastos-federalizados/ecxel?url=${archivo}`);