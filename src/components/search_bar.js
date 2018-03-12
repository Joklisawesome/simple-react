// React.createElement will be called anyway so we need this import!
import React, { Component } from 'react';
// const Component = React.Component;

/* Functional component versus class-based component
-> just returns some plain JSX
const SearchBar = () => {
  return <input />;
};

*/

class SearchBar extends Component {
  // every class must have a render function
  // we want SearchBar to have more functionality, that's why we use class-based component instead of functional one
  constructor(props) {
    super(props);

    // initialize state object - object contains states we want to track
    this.state = { term: '' };
  }

  render() {
    //   onChange is the standard onChange event (property) which points to our onInputChange event handler
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

// Value of the input: {this.state.term}

/* 
state:
plain javascript object that is used to record and to react to user events
each class component has its own state object
we have to initialize the state object

value={this.state.term}
it's called controlled component (has it's value set by state) because every time we type sth into the input field
we change the state of our class-based component
after the state has been set to the newly typed word the component gets rerendered and the the value of the input is
set to the value of the state!
 */

export default SearchBar;
