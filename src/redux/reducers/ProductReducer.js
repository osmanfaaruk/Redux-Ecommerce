const initialState ={
    products:[
        {id:1, name:'Man t-shirt summer season', image:'1.jpg', price:20, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id:2, name:'Woman jacker for summer', image:'2.jpg', price:30, discount: 2, discountPrice: 30 - 2 / 100 * 30, quantity: 1, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id:3, name:'Man trouser ', image:'3.jpg', price:15, discount: 2, discountPrice: 15 - 2 / 100 * 15, quantity: 5, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id:4, name:'Shoes for all seasons', image:'4.jpg', price:35, discount: 2, discountPrice: 35 - 2 / 100 * 35, quantity: 1, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id:5, name:'Female soot for summer', image:'5.jpg', price:25, discount: 2, discountPrice: 25 - 2 / 100 * 25, quantity: 1, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id:6, name:'Men Jins-Pant', image:'6.jpg', price:75, discount: 7, discountPrice: 75 - 7 / 100 * 75, quantity: 10, desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi molestiae officiis, perspiciatis nemo incidunt tempore eligendi distinctio magnam laborum laudantium similique iure, sint culpa, excepturi obcaecati sit voluptatum odio?"},

        {id: 7, name: 'Male trouser for all seasons', image: '7.jpg', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},

        {id: 8, name: 'Male jacket for winter', image: '8.jpg', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},

        {id: 9, name: 'Male jacket for all season', image: '9.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},   

        {id: 10, name: 'Male winter jacket', image: '10.jpg', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},  
    ]
}

const ProductRuderer = (state = initialState, action) => {
    switch (action.type){
        default: 
        return state;
    }
}
export default ProductRuderer;