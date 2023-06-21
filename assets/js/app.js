const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/*const $n = document.querySelector('name'); falta el selector de clase*/
const $n = document.querySelector('.name');
/*const $b = document.querySelector('#blog');Esta usando el selector de id cuando debería ser el selector de clase*/
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

  /*function displayUser(username) { En esta línea falta colocar el async*/
  async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  
  const data = await response.json();/*Se agrega esta línea de código*/ 
  
  /*console.log(data); no es data porque data no existe*/
  console.log(response);
  /*$n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  El lugar de ser comillas simples tendrían que ser backticks*/



  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /*n.textContent = `Algo salió mal: ${err}` falta el signo de pesos */
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);