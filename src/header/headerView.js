// render header
function updateHeaderView() {
    return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
        </div>
        <ul>
        <button class="list-button" onclick="tekst2()">Tekst 1</button>
          <button class="list-button" onclick="tekst2()">Tekst 2</button>
          <li class="dropdown">
            <a>Profil</a>
            <ul class="dropdown-menu">
              <button class="list-button-dropdown" onclick="tekst2()">Se profil</button>
              <button class="list-button-dropdown" onclick="tekst2()">Endre profil</button>
              <button class="list-button-dropdown" onclick="goToLogin()">Log inn/ut</button> <!--endre til  dollar tag log inn/ logg ut-->
            </ul>
          </li>
          <button class="list-button" onclick="tekst3()">Søk</button>
        </ul>
        <div id="header-contact-button">
          <button>Kontakt oss</button>
        </div>
      </nav>
    </div>
  </header>
    `;
  }


  function currentHeader(){
    let currentHeader;
    if (headerVisible === 0) {
        currentMenu = renderMenuText()
    } 
    else if (headerVisible === 1) {
             currentHeader = renderMenuFight()
    }
    else if (headerVisible === 2){
             currentHeader = renderMenuBag()
    }
    else if (headerVisible === 3){
             currentHeader = renderMenuPokemon()
    }
    else if (headerVisible === 4){
             currentHeader = resetGame()
    }
    return currentMenu;
  }