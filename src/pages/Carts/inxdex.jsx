import React from "react";
import { useCart } from "react-use-cart";
import Header from '../../layouts/Header'

const Carts = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div>
        <h2>is empty</h2>
      </div>
    );
  return (
    <div>
      
      <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4>
            Cart ({totalUniqueItems}) Total Items: ({totalItems}){" "}
          </h4>
          
            <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item) => {
                return(
                  <tr key={item.id}>
                  <td>
                    <img src={item.image} style={{ height: "6rem" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button 
                    className="btn btn-info ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <button 
                    className="btn btn-info ms-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</button>
                    <button 
                    className="btn btn-danger ms-2"
                    onClick={() => removeItem(item.id)}
                     >Remove Item</button>
                  </td>
                </tr>
                )
              })}
              </tbody>
            </table>
          
        </div>
        <div className="col-auto ms-auto ">
              <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
              <button 
              className="btn btn-danger m-2"
              onClick={() => emptyCart()}
              >Clear Cart</button>
              <button className="btn btn-primary m-2">Bay Now</button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Carts;
