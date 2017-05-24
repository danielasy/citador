import { configure } from '@kadira/storybook';

function loadStories() {
  const allStories = require.context('../app', true, /.story.js$/);
  allStories.keys().forEach(filename => allStories(filename));
}

configure(loadStories, module);
