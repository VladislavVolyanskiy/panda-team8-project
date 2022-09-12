(() => {
    const refs = {
      openMenuBtn: document.querySelector(".tel-open"),
      closeMenuBtn: document.querySelector(".tel-close"),
      menu: document.querySelector(".tel-container"),
      body: document.querySelector("body"),
      menuList: document.querySelector(".tel"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
      refs.body.classList.toggle("no-scroll");
    }
  
    function removeMenu() {
      refs.menu.classList.add("is-hidden");
    }
  })();
  