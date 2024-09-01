export interface CamposTabla {
    id: number;
    Nombre:   string;
    Año:      string;
    Periodo:  string;
    Descarga: string;
}

// Campos de gastos federalizado
export interface Federalizado {
    id:           number;
    año:          number;
    entidad:      string;
    municipio:    string;
    programa:     string;
    aprobado:     string;
    modificado:   string;
    recaudado:    string;
    comprometido: string;
    devengado:    string;
    ejercido:     string;
    pagado:       string;
}
