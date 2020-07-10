const API_URI = process.env.REACT_APP_API_URI;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const CORS_API_HOST = process.env.REACT_APP_CORS_API_HOST;
const ORIGIN_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://luksta1.github.io/ac-contacts';

console.log(process.env.NODE_ENV)

export {
    API_URI,
    API_TOKEN,
    CORS_API_HOST,
    ORIGIN_URI
}