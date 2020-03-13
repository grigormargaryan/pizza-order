import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Button
} from 'reactstrap';
import { toast } from 'react-toastify';
import {addOrderRequest} from '../../actions/order';
import DndComponent from '../Utils/DndComponent';


class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: {
        id: Date.now().toString(),
        pizza: {},
        ingredients: [],
        total: 0
      }
    }
  }

  componentDidMount() {
    const pizza = this.props.pizzas.find(pizza => pizza.id == this.props.match.params.id)
    this.setState((prevState, props) => {
      return {
        order: {
          ...prevState.order,
          pizza: pizza,
          total: pizza.price

        }
      }
    })

  }

  addOrder = () => {
    this.props.addOrderRequest(this.state.order)
    toast.success("Added Successfully");
    this.props.history.push('/my-orders');
  };

  selectedIngredients = (ingredients) => {
    this.setState((prevState) => {
      return {
        order: {
          ...prevState.order,
          ingredients: ingredients,
        }
      }
    }, () => {
      let total = 0;
      for (let item of ingredients) {
        total += item.price
      }
      this.setState((prevState, props) => {
        return {
          order: {
            ...prevState.order,
            total: prevState.order.pizza.price + total,
          }
        }
      })
    })

  };

  render() {
    const {name, price, img, weight, type} = this.state.order.pizza;
    return (
      <Row className="m-0">
        <Card sm="3">
          {
            img ?
              <CardImg top width="100%" src={require(`../../assets/img/${img}`)} alt="Card image cap"/> : ''

          }

        </Card>
        <Card sm="3">
          <CardBody>
            <CardTitle>Name - {name}</CardTitle>
            <CardSubtitle>Type - {type}</CardSubtitle>
            <CardSubtitle>Price - {price} դր</CardSubtitle>
            <CardSubtitle>Weight - {weight} դր</CardSubtitle>
            {/*<Button>Button</Button>*/}
          </CardBody>
        </Card>
        <Card sm="3">
          <CardBody>
            <CardTitle>Total - {this.state.order.total}</CardTitle>
          </CardBody>
        </Card>
        <DndComponent ingredients={this.props.ingredients} selectedIngredients={this.selectedIngredients}/>
        <Card>
          <CardBody className="d-flex align-items-center">
            <Button color="success" width="10" onClick={this.addOrder}>Order</Button>
          </CardBody>
        </Card>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  pizzas: state.pizzas.pizzas,
  ingredients: state.pizzas.ingredients,
});

export default connect(mapStateToProps, {addOrderRequest})(Order);
