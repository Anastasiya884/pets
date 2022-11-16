// const modalDataKatrine = {
//     image: {
//         src: 'images/pets-katrine.svg',
//         alt: 'photo 1',
//         width: 400,
//         height: 400,
//     },
//     title: 'Katrine',
//     subtitle: 'Cat - British Shorthair',
//     description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
//     properties: {
//         one: 'Age: 2 months',
//         two: 'Inoculations: none',
//         three: 'Diseases: none',
//         four: 'Parasites: none',
//     }
// }
//
//
// const popupContainer = document.createElement('div');
// popupContainer.classList.add('popup-container');
// popupContainer.id = 'modal-popup';
// //  <div class="popup-container" id="modal-popup"></div>
//
// const popup = document.createElement('div');
// popup.classList.add('popup');
// popupContainer.append(popup);
//
// const close = document.createElement('span');
// close.classList.add('close');
// close.id = 'button-katrine-close';
// popup.append(close);
//
// const imgPetsPopup = document.createElement('div');
// imgPetsPopup.classList.add('img-pets-popup');
// popup.append(imgPetsPopup);
//
// const imgPetsSlidePopup = document.createElement('div');
// imgPetsSlidePopup.classList.add('img-pets-slide-popup');
// imgPetsPopup.append(imgPetsSlidePopup);
//
// const img = document.createElement('img');
// img.src = modalDataKatrine.image.src;
// img.alt = modalDataKatrine.image.alt;
// img.width = modalDataKatrine.image.width;
// img.height = modalDataKatrine.image.height;
// imgPetsSlidePopup.append(img);
//
// const text1 = document.createElement('div');
// text1.classList.add('text-1');
// imgPetsSlidePopup.append(text1);
//
// const titlePopup = document.createElement('h1');
// titlePopup.classList.add('title-popup');
// titlePopup.id = 'title-popup';
// titlePopup.innerText = modalDataKatrine.title;
// text1.append(titlePopup);
//
// const textPopup = document.createElement('p');
// textPopup.classList.add('text-popup');
// textPopup.id = 'text-popup';
// textPopup.innerText = modalDataKatrine.subtitle;
// text1.append(textPopup);
//
// const descriptionPopup = document.createElement('p');
// descriptionPopup.classList.add('description-popup');
// descriptionPopup.id = 'description-popup';
// descriptionPopup.innerText = modalDataKatrine.description;
// text1.append(descriptionPopup);
//
// const listPopup = document.createElement('ul');
// listPopup.classList.add('list-popup');
// text1.append(listPopup);
//
// const li1 = document.createElement('li');
// li1.classList.add('list-popup-text');
// li1.innerText = modalDataKatrine.properties.one;
// listPopup.append(li1);
//
// const li2 = document.createElement('li');
// li2.classList.add('list-popup-text');
// li2.innerText = modalDataKatrine.properties.two;
// listPopup.append(li2);
//
// const li3 = document.createElement('li');
// li3.classList.add('list-popup-text');
// li3.innerText = modalDataKatrine.properties.three;
// listPopup.append(li3);
//
// const li4 = document.createElement('li');
// li4.classList.add('list-popup-text');
// li4.innerText = modalDataKatrine.properties.foour;
// listPopup.append(li4);
//
//
// document.body.append(popupContainer);