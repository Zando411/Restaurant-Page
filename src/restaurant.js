const createRestaurantHomePage = () => {
  const create = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  // creates and appends image
  const image = document.createElement('img');
  image.src =
    'https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  image.height - '300';
  pageContent.appendChild(image);

  // creates and appends headline
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Super Sushi!';
  pageContent.appendChild(headline);

  // creates and appends copy
  const copy = document.createElement('p');
  copy.textContent = 'We have the best suchi around! Come and try some!';
  pageContent.appendChild(copy);

  // appends page content to content container
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
