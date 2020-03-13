import React, {PureComponent} from 'react';
import {
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

import './App.scss'

// import "react-toastify/dist/ReactToastify.css";


class App extends PureComponent {


  render() {
  const {pizzas} = this.props.pizzas;
    return (
      <Row className="m-0">
        {
          pizzas.map(pizza => (
            <Col sm="4" key={pizza.id} className="mb-4">
              <Card>
                <CardImg className="img-fluid pizza-img" src={require(`../../assets/img/${pizza.img}`)} alt="Card image cap"/>
                <CardBody>
                  <CardTitle>{pizza.name}</CardTitle>
                  <CardSubtitle>{pizza.type}</CardSubtitle>
                  <CardSubtitle>{pizza.price} դր</CardSubtitle>
                  <Link color="primary" to={`/order/${pizza.id}`} className="btn btn-primary">Choose</Link>
                </CardBody>
              </Card>
            </Col>
          ))
        }

      </Row>
    );
  }
}

const mapStateToProps = state => ({
  pizzas: state.pizzas
});

export default connect(mapStateToProps, { })(App);
