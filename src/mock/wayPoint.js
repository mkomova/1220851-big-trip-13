import flatpickr from "flatpickr";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateType = () => {

  const types = [
    `Taxi`,
    `Bus`,
    `Train`,
    `Ship`,
    `Transport`,
    `Drive`,
    `Flight`,
    `Check-in`,
    `Sightseeng`,
    `Restaurant`
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};

const generateCity = () => {

  const cities = [
    `Amsterdam`,
    `Chamonix`,
    `Geneva`
  ];

  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

// const generateOffers = () => {
//
//   if (type === `Taxi`) {
//     offers = {
//       option: `Order Uber`,
//       price: `20`
//     }
//   }
// };

const generateDescription = () => {

  const descriptons = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`
  ];

  const randomIndex = getRandomInteger(0, descriptons.length - 1);

  return descriptons[randomIndex];
};

const generatePhoto = () => {

  const randomIndex = getRandomInteger(0, 10);
  const photos = `http://picsum.photos/248/152?r=` + randomIndex;
  return photos;
};

export const generateForm = () => {

  return {
    type: generateType(),
    destination: generateDescription(),
    photo: generatePhoto(),
  };
};

export const generateWayPoint = () => {

  return {
    type: generateType(),
    city: generateCity(),
    offers: null,
    isFavorite: Boolean(getRandomInteger(1, 0))
  };
};
