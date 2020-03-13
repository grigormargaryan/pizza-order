import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListGroup, ListGroupItem
} from 'reactstrap';
import './Order.scss'


class MyOrders extends Component {


  render() {

    return (
      <div className="col-lg-12 m-2" >
        {
          this.props.order ?
            this.props.order.map((ord) => (
              <ListGroup horizontal className="mt-3" key={ord.id}>

                <ListGroupItem>
                  <img src={require(`../../assets/img/${ord.pizza.img}`)} alt="pizza" className="ord-img"/>
                </ListGroupItem>
                <ListGroupItem className="align-items-center d-flex">{ord.pizza.name}</ListGroupItem>
                <ListGroupItem className="align-items-center d-flex">{ord.pizza.type}</ListGroupItem>
                <ListGroupItem className="align-items-center d-flex">{ord.pizza.weight}</ListGroupItem>
                <ListGroupItem className="align-items-center d-flex">{ord.pizza.price}</ListGroupItem>
                <ListGroupItem>
                  {
                    ord.ingredients.map(ingredient => (
                      <p key={ingredient.name}>{ingredient.name} - {ingredient.price} դր</p>
                    ))
                  }

                </ListGroupItem>
                <ListGroupItem className="align-items-center d-flex">{ord.total}</ListGroupItem>
              </ListGroup>
            ))
            : ''
        }
      </div>

    );
  }
}

const mapStateToProps = state => ({
  order:state.order.order
});

export default connect(mapStateToProps, {})(MyOrders);
