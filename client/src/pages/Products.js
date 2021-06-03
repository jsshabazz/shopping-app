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
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.products.map((product, i) => (
                        <li className="list-group-item" key={i}>
                            {product.Product_name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
