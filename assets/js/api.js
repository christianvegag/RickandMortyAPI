const API = "https://rickandmortyapi.com/api/character";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";

  html += `<li style="cursor:pointer;" class="page-item ${info.prev == null ? "disabled" : ""}"><a class="page-link" onclick="getAPI('${info.prev}')">Prev</a></li>`;
  html += `<li style="cursor:pointer;" class="page-item ${info.next == null ? "disabled" : ""}"><a class="page-link" onclick="getAPI('${info.next}')">Next</a></li>`;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API);
