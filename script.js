const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redirectedPath = urlParams.get('p');
let activeRoute = '';
if (redirectedPath) {
  activeRoute = redirectedPath;
} else {
  const segments = window.location.pathname.split('/').filter(Boolean);
  activeRoute = segments[1] ? '/' + segments[1] : '/';
}
if (activeRoute != '/') {
  let parts = activeRoute.split('/').filter(Boolean);
  console.log(parts); //= ['game', 'mods']
  console.log(parts[0]); //= game
  if (parts[1] = undefined) {
    const newWindow = window.open('app.html', '_blank', 'width=2560,height=1440');
  } else {
    alert('Sorry, mods are not supported yet for scachyapp.');
  }
}
