import {createRouteTemplate} from "./view/route.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createFormTemplate} from "./view/form.js";
import {createWaypointTemplate} from "./view/waypoints_list.js";
import {generateWayPoint} from "./mock/wayPoint.js";
import {generateForm} from "./mock/wayPoint.js";

const FORM_COUNT = 1;
const WAYPOINT_COUNT = 3;

const descriptions = new Array(FORM_COUNT).fill().map(generateForm);
const waypoints = new Array(WAYPOINT_COUNT).fill().map(generateWayPoint);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.page-body`);
const routeElement = tripMainElement.querySelector(`.trip-main`);

render(routeElement, createRouteTemplate(), `afterbegin`);


const menuElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(menuElement, createNavigationTemplate(), `afterbegin`);
render(menuElement, createFiltersTemplate(), `beforeend`);

const tripEventsElement = tripMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createSortingTemplate(), `afterbegin`);


for (let k = 0; k < FORM_COUNT; k++) {
  render(tripEventsElement, createFormTemplate(descriptions[k]), `beforeend`);
}

for (let i = 0; i < WAYPOINT_COUNT; i++) {
  render(tripEventsElement, createWaypointTemplate(waypoints[i]), `beforeend`);
}
