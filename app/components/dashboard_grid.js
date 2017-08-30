import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollections } from '../actions/index';


class DashboardGrid extends React.Component {
  componentWillMount() {
    // console.log('this component is being mounted');
    this.props.fetchCollections();
  }

  render() {
    return (
      <Grid>
        <h2 className="some-writing">Мои коллекции</h2>
        <Row>
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCollections }, dispatch)
}

export default connect(null, mapDispatchToProps)(DashboardGrid);
