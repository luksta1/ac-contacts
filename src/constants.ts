const API_URI = 'https://lamppoststudios.api-us1.com/api/3';
const API_TOKEN = '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5';
const CORS_API_HOST = 'https://cors-anywhere.herokuapp.com';
const ORIGIN_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://luksta1.github.io/ac-contacts';

console.log(process.env.NODE_ENV)

export {
    API_URI,
    API_TOKEN,
    CORS_API_HOST,
    ORIGIN_URI
}