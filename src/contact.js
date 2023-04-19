const createContactPage = () => {
  const create = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  // creates and appends headline
  const headline = document.createElement('h1');
  headline.textContent = 'Contact us!';
  pageContent.appendChild(headline);

  // creates and appends email
  const email = document.createElement('p');
  email.textContent = 'Email: example@email.com';
  pageContent.appendChild(email);

  // creates and appends phone
  const phone = document.createElement('p');
  phone.textContent = 'Phone number: (123)-456-7890';
  pageContent.appendChild(phone);

  // creates and appends address
  const address = document.createElement('p');
  address.textContent = 'Address: 123 Example St.';
  pageContent.appendChild(address);

  // appends page content to content container
  content.appendChild(pageContent);
};

export default createContactPage;
