const mainPage = document.getElementById("app")

//renders the client
updateView()
function updateView(){
  mainPage.innerHTML= /*html*/`
    hello world hello world hello world<br>
    hello world hello world hello world<br>
    hello world hello world hello world<br><br>
    <button>trykk her</button><br>
    <button>rediger</button><br>
    <button>slett</button><br><br><br><br>
    <button>fritt stående knapp</button>
  `;
}
