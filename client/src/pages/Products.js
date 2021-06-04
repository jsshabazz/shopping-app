import React, { Component } from 'react'




export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { products: ["product 1", "product 2"] };
        
    }
    componentDidMount() {
        fetch("/api/product")
        .then(function (data) {
            return data.json()
        })
            .then(function (data) {
                console.log("data",data);
this.setState({ products: data }); 
            }.bind(this))
            .catch(function (error) {
                console.log("error",error)

            });
        //   to make a fetch call to our backend and then we want to store that to our state for this component
    }
    // write handlebutton click function here
    handleBtnClick = (event) => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        fetch("/api/user/:id/cart/product")
        .then(function (data) {
            return data.json()})

            
    }
    // make Fetch api call which is a Post request to /api/user/:id/cart/product
   

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.products.map((product, i) => (
                        <li className="list-group-item" key={i}onClick={this.handleBtnClick}data-value={product.id}>
                            {product.Product_name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
