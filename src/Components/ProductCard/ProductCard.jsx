import React, {Component} from "react";
import './productCar.css'

class ProductCard extends Component{

    render() {
        return (
            <div className="row">
                Nombre: {this.props.producto.name}<br/>
                Precio: {this.props.producto.price}<br/>
                Link : <a href="#">Ver producto</a>
            </div>
        );
    }
}

export default ProductCard;