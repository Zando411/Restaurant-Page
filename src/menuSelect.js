import createContactPage from './contact';
import createMenuPage from './menu';
import createRestaurantHomePage from './restaurant';

const createSelectMenu = () => {
  const content = document.querySelector('#content');

  const menuSelect = document.createElement('div');
  menuSelect.setAttribute('id', 'menu-select');

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');

  div1.classList.add('menu');
  div2.classList.add('menu');
  div3.classList.add('menu');

  div1.textContent = 'Home';
  div2.textContent = 'Menu';
  div3.textContent = 'Contact';

  menuSelect.appendChild(div1);
  menuSelect.appendChild(div2);
  menuSelect.appendChild(div3);

  content.appendChild(menuSelect);

  div1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
  });
  div2.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  });
  div3.addEventListener('click', () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');

  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createSelectMenu;
