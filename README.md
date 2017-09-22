# VICE Front-end Coding Exercise

Below is a HTML/CSS/JS exercise that involves building out a web component, or single page app, to navigate through various VICE shows.

- Use HTML5 semantic markup elements.
- Write your CSS using a preprocessor (Sass, LESS or Stylus).
- Use any JS framework you'd like or vanilla JavaScript.
- Bonus: use a module bundler or task manager such as Webpack, Gulp or Grunt to compile static assets.

## Exercise
In index.html, rebuild the mocks in the designs folder in semantic HTML, CSS and JS. The designs represent layouts in a smaller screen and a larger screen. It is not 2 pages. Feel free to diverge from the designs and apply your own creativity. The goal is to build a simple UI that allows users to navigate between various shows while displaying the corresponding meta data for each.

## Specs:
- There are 10 shows, each with an id, title, episode count, and cover art. (see shows.json).
- When landing on the page initially, the first show should be selected.
- When clicking through the show selector the single show image, title, and episode count also updates.
- The url updates with the currently selected show. (http://{{page_url}}?id=2, if second show is selected)
- A url with http://{{page_url}}?id=2 should have the second show selected on page reload.
- When clicking between shows, hitting “Back” and “Forward” on the browser will also update the url, cover image, title, and episode count according to the show id.
- The minimum width of the screen is 320px. The horizontal breakpoint is at 980px. Build with a mobile first approach.

## Approach

Add a hero component and a selector component. 

The selector component accepts a list of IDs, and then just links to those IDs with a bunch of gray boxes. It also accepts a selected ID.

The hero component accepts an imageUrl prop, a title prop, and an episodes prop. And it displays them.

It seems like Redux is really unnecessary in this case. We have a single route, and one root component that gets the ID of the show from the URL, then passes that ID into the components. It gets the current show, the selected ID, and a list of IDs, and passes them into the selector and the hero. Let's just absolutely position the selector, so we can move it above and below responsively.

