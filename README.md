# Ember-timeline

Demo: https://ember-timeline-demo.firebaseapp.com

## Backlog and ideas

* Tests!!
* Handle pan/pinch on the zoomed timeline using Hammer.js, translate to mouse/wheel events and push them to the slider...
* or write another slider plugin with native support for pan/pinch (so that no translation is required)
* Improve the color picker layout on wide screens
* Figure out a better way to layout the "tableform" on small screens ([some ideas from a similar problem](https://css-tricks.com/responsive-data-table-roundup))
* ~~Improve the label collision detection algorithm and hidding strategy~~
* Replace the beam implementation for something more performant (jsPlumb?)
* Apply validations at the model level ([ember-changeset-validations](https://github.com/DockYard/ember-changeset-validations) seems to be a good option)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-timeline`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
