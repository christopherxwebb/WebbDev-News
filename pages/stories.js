import view from '../utils/view.js';

export default async function Stories(path) {
   const stories = await getStories(path);
   const hasStories = stories.length > 0;

    view.innerHTML = `<div>
    ${hasStories ? stories.map(story => JSON.stringify(story)) : 'No stories'}
    </div>`;
}

async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new';
    if (isHomeRoute) {
        path = '/news';
    } else if (isNewRoute) {
        path = '/newest';
    }
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}

//https://node-hnapi.herokuapp.com

// /(Top) -> /new
// /(New) -> /newest
// /(Ask) -> /ask
// /(Show) -> /show

// Can add 'jobs' route too at a later date