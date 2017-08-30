import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ModalSubmission from './dashboard_modal_submission';

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmissionOpen: false }
  }

  render() {
    return (
        <Nav bsStyle="tabs">
          <NavItem>
            <Link to="/">Главное меню </Link>
          </NavItem>
          <NavItem onClick={ () => this.openSubmission() }>
            Создать коллекцию
          </NavItem>
          <ModalSubmission isOpen={this.state.isSubmissionOpen} onClose={ () => this.closeSubmission() } />
          <NavDropdown title="John Doe" id="dashboard-header-dropdown">
            <MenuItem>Настройки</MenuItem>
            <MenuItem>Выйти</MenuItem>
          </NavDropdown>
        </Nav>
    );
  }

  openSubmission() {
    this.setState({ isSubmissionOpen: true })
  }

  closeSubmission() {
    this.setState({ isSubmissionOpen: false })
  }
}
