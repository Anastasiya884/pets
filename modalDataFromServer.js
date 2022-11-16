const modalDataFromServer = [
  {
    image: {
      src: 'images/pets-katrine.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Katrine',
    subtitle: 'Cat - British Shorthair',
    description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    properties: {
      one: 'Age: 2 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',
    }
  },


  {
    image: {
      src: 'images/pets-jennifer.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Jennifer',
    subtitle: 'Dog - Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    properties: {
      one: 'Age: 4 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },


  {
    image: {
      src: 'images/pets-woody.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Woody',
    subtitle: 'Dog - Golden Retriever',
    description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    properties: {
      one: 'Age: 3 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },

  {
    image: {
      src: 'images/pets-katrine%20(1).svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Sophia',
    subtitle: 'Dog - Shih tzu',
    description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
    properties: {
      one: 'Age: 2 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },

  {
    image: {
      src: 'images/pets-timmy.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Timmy',
    subtitle: 'Cat - British Shorthair',
    description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    properties: {
      one: 'Age: 2 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },

  {
    image: {
      src: 'images/pets-charly.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Charly',
    subtitle: 'Dog - Jack Russell Terrier',
    description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    properties: {
      one: 'Age: 5 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },

  {
    image: {
      src: 'images/pets-scarlet.svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Scarlett',
    subtitle: 'Dog - Jack Russell Terrier',
    description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    properties: {
      one: 'Age: 3 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  },

  {
    image: {
      src: 'images/pets-katrine%20(2).svg',
      alt: 'photo 1',
      width: 400,
      height: 400,
    },
    title: 'Freddie',
    subtitle: 'Cat - British Shorthair',
    description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    properties: {
      one: 'Age: 5 months',
      two: 'Inoculations: none',
      three: 'Diseases: none',
      four: 'Parasites: none',

    }
  }
]

let buttonsCard = document.getElementsByClassName('button-pets');
buttonsCard = Array.from(buttonsCard)

buttonsCard.forEach(function (button) {

  button.addEventListener('click', function () {
    createPopup(button.dataset.popup);
  });
});

function createPopup(number) {
  console.log('number', number);

  // логика созд попапа
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.id = 'modal-popup';
  //  <div class="popup-container" id="modal-popup"></div>

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popupContainer.append(popup);

  const close = document.createElement('span');
  close.classList.add('close');
  close.id = 'button-katrine-close';
  popup.append(close);
  close.addEventListener('click', function () {
    document.body.removeChild(popupContainer);
  });

  const imgPetsPopup = document.createElement('div');
  imgPetsPopup.classList.add('img-pets-popup');
  popup.append(imgPetsPopup);

  const imgPetsSlidePopup = document.createElement('div');
  imgPetsSlidePopup.classList.add('img-pets-slide-popup');
  imgPetsPopup.append(imgPetsSlidePopup);

  const img = document.createElement('img');
  img.src = modalDataFromServer[number].image.src;
  img.src = modalDataFromServer[number].image.src;
  img.alt = modalDataFromServer[number].image.alt;
  img.width = modalDataFromServer[number].image.width;
  img.height = modalDataFromServer[number].image.height;
  imgPetsSlidePopup.append(img);

  const text1 = document.createElement('div');
  text1.classList.add('text-1');
  imgPetsSlidePopup.append(text1);

  const titlePopup = document.createElement('h1');
  titlePopup.classList.add('title-popup');
  titlePopup.id = 'title-popup';
  titlePopup.innerText = modalDataFromServer[number].title;
  text1.append(titlePopup);

  const textPopup = document.createElement('p');
  textPopup.classList.add('text-popup');
  textPopup.id = 'text-popup';
  textPopup.innerText = modalDataFromServer[number].subtitle;
  text1.append(textPopup);

  const descriptionPopup = document.createElement('p');
  descriptionPopup.classList.add('description-popup');
  descriptionPopup.id = 'description-popup';
  descriptionPopup.innerText = modalDataFromServer[number].description;
  text1.append(descriptionPopup);

  const listPopup = document.createElement('ul');
  listPopup.classList.add('list-popup');
  text1.append(listPopup);

  const li1 = document.createElement('li');
  li1.classList.add('list-popup-text');
  li1.innerText = modalDataFromServer[number].properties.one;
  listPopup.append(li1);

  const li2 = document.createElement('li');
  li2.classList.add('list-popup-text');
  li2.innerText = modalDataFromServer[number].properties.two;
  listPopup.append(li2);

  const li3 = document.createElement('li');
  li3.classList.add('list-popup-text');
  li3.innerText = modalDataFromServer[number].properties.three;
  listPopup.append(li3);

  const li4 = document.createElement('li');
  li4.classList.add('list-popup-text');
  li4.innerText = modalDataFromServer[number].properties.foour;
  listPopup.append(li4);

  document.body.append(popupContainer);

  // логика созд попапа

  // пример обращения modalDataFromServer[number]
  //
  // вызывать логику создание попапа
}

// вызов ф-ии createPopup(3)

// article.dataset.columns
// button.dataset.popup
