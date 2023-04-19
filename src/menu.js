const createMenuPage = () => {
  const create = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact us!';
  pageContent.appendChild(headline);

  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  const menuItem2 = document.createElement('li');
  const menuItem3 = document.createElement('li');
  menuItem1.textContent = 'Edamame';
  menuItem2.textContent = 'Califonia Roll';
  menuItem3.textContent = 'Spring Rolls';
  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  pageContent.appendChild(menuList);
  // appends page content to content container
  content.appendChild(pageContent);
};

export default createMenuPage;
