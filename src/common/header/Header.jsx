import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

import './Header.scss';
import Logo from '../../../public/logo.svg';
import SlideFilters from '../slide-filters/SlideFilters';

class Header extends Component {
  state = {
    drawerIsOpened: false,
    title: ''
  };

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({title : this.props.setTitle()});
    }, 100);
  }

  toggleDrawer = () => {
    this.setState({
      drawerIsOpened: !this.state.drawerIsOpened
    });
  };

  isHomepage = () => {
    let pathname = window.location.pathname;
    let pathnameArray = pathname.split('/');
    if (pathnameArray[2]) {
      return false;
    }
    return true;
  }

  render() {
    this.isHomepage();
    return (
      <div id="page-header">
        <nav>
          <div className="logo-bg">
            <Logo className="logo"/>
          </div>
          <div className="opened-module-title">
            {this.state.title}
          </div>
          {this.isHomepage() && (
            <Button className="menu-toggle" onClick={this.toggleDrawer}>
              <SettingsIcon aria-label="Settings"/>
            </Button>
          )}
        </nav>
        <Drawer
          anchor="right"
          open={this.state.drawerIsOpened}>
            <SlideFilters 
              config={this.props.config} 
              onChanges={this.props.onChanges}
              onClose={this.toggleDrawer}
            />
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  setTitle: PropTypes.func,
  config: PropTypes.object,
  onChanges: PropTypes.func
};

export default Header;
