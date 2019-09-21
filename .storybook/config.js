import { configure } from '@storybook/react';

const importAll = (req) => {
    req.keys().forEach(filename => req(filename))
}

const loadStories = () => {
    let req;
    req = require.context('../src', true, /\.story\.js$/);
    importAll(req);
}

configure(loadStories, module);