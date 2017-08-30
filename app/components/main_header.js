import React from 'react';
import { Nav, NavItem, MenuItem } from 'react-bootstrap';
import Modal from './main_modal_window';
import { Link } from 'react-router-dom';

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <Nav bsStyle="tabs">
        <NavItem><Link to="/login">Login!!!</Link></NavItem>
        <NavItem onClick={ () => this.openModal() }>Войти</NavItem>
        <Modal isOpen={this.state.isModalOpen} onClose={ () => this.closeModal() } />
        <NavItem><Link to="/dashboard">Дашборд</Link></NavItem>
      </Nav>
    );
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}
