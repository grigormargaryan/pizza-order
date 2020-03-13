
const initialState = {
  pizzas : [
    {id:1, name:'Carbonara', weight:400, price:1500, type:'Neapolitan', properties:6, img:'pizza1.jpeg'},
    {id:2, name:'Margherita', weight:700, price:2500, type:'Neapolitan', properties:6, img:'pizza2.jpeg'},
    {id:3, name:'Marinara', weight:800, price:3000, type:'Neapolitan', properties:6, img:'pizza3.jpeg'},
    {id:4, name:'Romana', weight:600, price:2800, type:'Neapolitan', properties:6, img:'pizza4.jpeg'},
    {id:5, name:'Schiacciata', weight:500, price:2000, type:'Neapolitan', properties:6, img:'pizza5.jpeg'},
    {id:6, name:'Tonno', weight:350, price:1900, type:'Neapolitan', properties:6, img:'pizza6.jpeg'},
  ],
  ingredients:[
    {name:'tomato',price:50},
    {name:'cheese',price:150},
    {name:'sausage',price:250},
    {name:'mushrooms',price:300},
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
