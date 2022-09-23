import React from 'react';
import HeaderView from './header.view';
import { connect } from 'react-redux';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { open, handleOpen, currentUser } = this.props;

    return (
      <HeaderView
        open={open}
        handleOpen={handleOpen}
        user={currentUser}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect( mapStateToProps, null )(Header);
