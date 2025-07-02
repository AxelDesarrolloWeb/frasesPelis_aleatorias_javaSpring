// URL base de la API
const baseURL = 'http://localhost:8082';

export default function getDatos(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al acceder al endpoint /series/frases', error);
        });
}