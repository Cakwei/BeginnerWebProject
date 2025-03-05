function burgerOpen() {
    document.getElementById("menu").style.transform = "translateX(0px)";
  }
  
  function burgerClose() {
    document.getElementById("menu").style.transform = "translateX(-250px)"; 
  }
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  