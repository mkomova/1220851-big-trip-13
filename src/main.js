import {createRouteTemplate} from "./view/route.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createWaypointTemplate} from "./view/waypoints_list.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.page-body`);
const routeElement = tripMainElement.querySelector(`.trip-main`);

render(routeElement, createRouteTemplate(), `afterbegin`);


const menuElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(menuElement, createNavigationTemplate(), `afterbegin`);
render(menuElement, createFiltersTemplate(), `beforeend`);

const sortingElement = tripMainElement.querySelector(`.trip-events`);

render(sortingElement, createSortingTemplate(), `afterbegin`);
render(sortingElement, createWaypointTemplate(), `beforeend`);
