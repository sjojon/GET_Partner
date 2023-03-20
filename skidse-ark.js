


$(function() {
    $('.dropdown').hover(function() {
      $(this).children('.dropdown-menu').show();
    }, function() {
      $(this).children('.dropdown-menu').hide();
    });
  });


header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    display: inline-block;
    margin: 0 10px;
  }
  
  nav li.dropdown:hover .dropdown-menu {
    display: block;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }





  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="dropdown">
        <a href="#">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>