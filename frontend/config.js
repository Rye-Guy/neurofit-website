let wpUrl = 'https://webapi.neurofit.ca/wp-json';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  wpUrl = 'https://webapi.neurofit.ca/wp-json';
}
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: 'auth-token',
  USERNAME: 'username',
};

export default Config;
