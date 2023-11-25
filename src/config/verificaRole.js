import jwt_decode from "jwt-decode";

export const validaRole = () => {
    const token = localStorage.getItem('u'); // Pega o token do Local Storage

    if (token) {
        try {
            const decoded = jwt_decode(token); // Decodifica o token
            const role = decoded['groups'][0]; // Obtém a primeira função do array 'groups'
            return role;
        } catch (error) {
            console.error('Erro ao decodificar o token JWT:', error);
            return null; // Retorne null em caso de erro na decodificação
        }
    }

    return null; // Retorne null se o token não estiver presente no Local Storage
}
