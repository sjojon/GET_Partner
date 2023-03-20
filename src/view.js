const mainPage = document.getElementById("app")

// render whole page
updateView()

function updateView() {
  mainPage.innerHTML = `
    ${updateHeaderView()}
  `;
}

// render header
function updateHeaderView() {
  return /*html*/ `
    <nav>
      <ul>
        <li>tekst1</li>
        <li>tekst2</li>
        <li class="dropdown">
          <a href="#">dropdown</a>
          <ul class="dropdown-menu">
            <li><a href="#">tekst4</a></li>
            <li><a href="#">tekst5</a></li>
            <li><a href="#">tekst6</a></li>
          </ul>
        </li>
        <li>tekst3</li>
      </ul>
    </nav>
  `;
}