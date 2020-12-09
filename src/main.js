import {createRouteTemplate} from "./view/route.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createContentTemplate} from "./view/content.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.page-body`);
const routeElement = tripMainElement.querySelector(`.trip-main`);

render(routeElement, createRouteTemplate(), `afterbegin`);


const menuElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(menuElement, createMenuTemplate(), `afterbegin`);
render(menuElement, createFiltersTemplate(), `beforeend`);

const sortingElement = tripMainElement.querySelector(`.trip-events`);

render(sortingElement, createSortingTemplate(), `afterbegin`);
render(sortingElement, createContentTemplate(), `beforeend`);
