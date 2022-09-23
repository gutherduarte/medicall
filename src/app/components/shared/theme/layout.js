import React from 'react';
import LayoutView from './layout.view';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <LayoutView
        open = { open }
        handleOpen = { this.handleOpen }
        handleClose = { this.handleClose }
        children = { children }
      />
    );
  }
}

export default Layout;
