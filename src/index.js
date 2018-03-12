// core react library knows how to render React components
import React from 'react';
// react-dom knows how to render it to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAQ1Sn208S7hes6rPrr666gZ0zKmX6f8D0';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

// Create a new decodeURIComponent. This component should produce some HTML

/*  const -> ES6 (declaring a variable that's never going to change)
'return <div>Hi!</div>' is called JSX, it looks like HTML but it is Javascript and
it is transpiled by Babel into Vanilla JavaScript
with the fat arrow (=>) the THIS reference is slightly different than if it is a function() {...}
 */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
// We have to provide an instance of the App component (class) so we wrap it in <> (JSX tag)
// second argument is the target DOM node in which we want to render an instance of the App component
ReactDOM.render(<App />, document.querySelector('.container'));
