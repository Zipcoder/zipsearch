import React from 'react';

/*fix className once props are set up for connection-status*/
class Header extends React.Component {
  render() {
    return(
      <header>
        <div>
          <h1>Calculator</h1>
        </div>
        <div>
          <span id="connection-status" className={this.props.status}>&nbsp;</span>
        </div>
      </header>
    );
  }
}

export default Header;
