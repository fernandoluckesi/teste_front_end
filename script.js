const navBar = document.querySelector('.nav-bar-horizontal');
const menuHamburgerBtn = document.querySelector('.menu-hamburger-button');

function displayNavBar() {
  menuHamburgerBtn.addEventListener('click', () => {
    const { animationName } = navBar.style;
    const { display } = navBar.style;
    if (!animationName || animationName === 'coverNav' && display !== 'flex') {
      navBar.style.display = 'flex';
      navBar.style.animationName = 'displayNav';
    } else if (animationName === 'displayNav') {
      navBar.style.animationName = 'coverNav';
      setTimeout(() => {
        navBar.style.display = 'none'
      }, 300);
    }
  });
}

function menuHamburgerBtnAnimation() {
  const menuLineOne = document.querySelector('.menu-line-1');
  const menuLineTwo = document.querySelector('.menu-line-2');
  const menuLineThree = document.querySelector('.menu-line-3');
  menuHamburgerBtn.addEventListener('click', () => {
    if (navBar.style.display !== 'flex') {
      menuLineOne.style.transform = 'translate(0px, 9px) rotate(45deg)';
      menuLineTwo.style.opacity = '0';
      menuLineThree.style.transform = 'translate(0px, -9px) rotate(-45deg)';
    } else if (navBar.style.display === 'flex') {
      menuLineOne.style.transform = 'translate(0px, 0px) rotate(0deg)';
      menuLineTwo.style.opacity = '1';
      menuLineThree.style.transform = 'translate(0px, 0px) rotate(0deg)';
    }
  })
}

menuHamburgerBtnAnimation();

displayNavBar();

window.addEventListener('resize', () => {
  if (window.innerWidth > 999) {
    navBar.style.display = 'flex'
  } else {
    navBar.style.display = 'none'
  }
});
