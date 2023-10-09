let responseDom = document.getElementById("response");

function getResponse() {
  axios.get("http://localhost:3000/").then(function (response) {
    console.log(response);
    responseDom.innerHTML = response;
  });
}
