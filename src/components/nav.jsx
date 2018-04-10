import React from 'react';
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    if(event.target.innerText) {
      let nextPage = event.target.innerText.toLowerCase();
      if(nextPage !== "resume") {
        this.props.history.push(`/${nextPage}`);

      }
    }
  }

  render () {
    return(
      <div>
        <ul onClick={this.handleSelection}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>RESUME</li>
          <li>CONTACT</li>
        </ul>



      </div>
    );
  }
}

export default withRouter(NavBar);
