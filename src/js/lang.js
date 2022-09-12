(() => {
    const refs = {
      openMenuBtn: document.querySelector(".lang-top__open"),
      closeMenuBtn: document.querySelector(".lang-top__close"),
      menu: document.querySelector(".lang-sub"),
      body: document.querySelector("body"),
      menuList: document.querySelector(".lang-sub"),
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
  