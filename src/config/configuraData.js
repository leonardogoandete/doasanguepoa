import { format } from 'date-fns';

export const padronizaData = (data) => {
    const ano = format(data, 'Y')
    const mes = format(data, 'M')
    const dia = format(data, 'd') 

    const dataAjustada = (ano +"/"+ mes +"/"+ dia);
    return dataAjustada
}