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
    html += `<div class="card" >
    <div class="image">
      <img
        src="${ch.image}" />
    </div>
    <div class="details">
      <div class="center">
        <h1>${ch.name}</h1>
        <p class="text-center text-white"><span class="${
          ch.status == "Alive" ? "dot" : "dotDead"
        }"></span>&nbsp;${ch.status} - ${ch.species}</p>
        <br>
        <p><span class="text-white-50">Gender : </span>${ch.gender} </p>
        <p><span class="text-white-50">Location : </span> ${
          ch.location.name
        }</p>
      </div>
    </div>
  </div>`;
  });

  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";

  html += `<li style="cursor:pointer;" class="page-item ${
    info.prev == null ? "disabled" : ""
  }"><a class="page-link bg-transparent" onclick="getAPI('${
    info.prev
  }')">Prev</a></li>`;
  html += `<li style="cursor:pointer;" class="page-item ${
    info.next == null ? "disabled" : ""
  }"><a class="page-link bg-transparent" onclick="getAPI('${
    info.next
  }')">Next</a></li>`;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API);
