const hostUrl = process.env.NODE_ENV === 'production'
  ? 'https://merngroceryapp.herokuapp.com'
  : 'http://localhost:7777';
export default hostUrl