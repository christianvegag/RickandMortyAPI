const API = "https://swapi.dev/api/people/1/";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error in the API" , error);
    });
};

const fillData = (data) => {
  let html = "";

    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += '<div class="card-body">';
    html += `<h3 class="card-title">Name : ${data.name}</h3>`
    html += `<h5 class="card-title">Height : ${data.height}</h5>`
    html += `<h5 class="card-title">Mass : ${data.mass}</h5>`
    html += `<h5 class="card-title">Hair_color : ${data.hair_color}</h5>`
    html += `<h5 class="card-title">Skin_color : ${data.skin_color}</h5>`
    html += `<h5 class="card-title">Eye_color : ${data.eye_color}</h5>`
    html += `<h5 class="card-title">Birth_year : ${data.birth_year}</h5>`
    html += `<h5 class="card-title">Gender : ${data.gender}</h5>`
    html += `<h5 class="card-title">Created : ${data.created}</h5>`
    html += `<h5 class="card-title">Edited : ${data.edited}</h5>`
    html += "</div>";
    html += "</div>";
    html += "</div>";

  document.getElementById("characters").innerHTML = html;
};

getAPI(API);
