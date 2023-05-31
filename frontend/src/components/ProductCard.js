import React from 'react'
import { useState } from 'react';
import './ProductCard.css'


const ProductCard = (props) => {

  const [editBtn, setEditBtn] = useState(false);
  const [editProduct, setEditProduct] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price
  })

  const onChangeHandler = (e) => {

    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value
    })

  }

  const saveProduct = () => {
    props.editProduct(editProduct);
    setEditBtn(false);
  }

  return (
    <div className='product-card'>
      <h2><u> {props.title}</u></h2>
      {editBtn ?
        <div>
          <label name="title">Title: </label>
          <input
            type='text'
            name='title'
            value={editProduct.title}
            onChange={onChangeHandler} />
          <label name="publisher">Publisher: </label>
          <input
            type='text'
            name='publisher'
            value={editProduct.publisher}
            onChange={onChangeHandler} />
          <label name="genre">Genre: </label>
          <input
            type='text'
            name='genre'
            value={editProduct.genre}
            onChange={onChangeHandler} />
          <label name="price">Price: </label>
          <input
            type='text'
            name='price'
            value={editProduct.price}
            onChange={onChangeHandler} />
            <br/>
          <button onClick={saveProduct}> Save </button>
        </div> :
        <div>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre} </p>
          <p>Price: ${props.price} </p>
        </div>}

      <button
        onClick={() => {
          setEditBtn(!editBtn)
        }}>
        Edit </button>

      <button
        onClick={() => {
          props.deleteProduct(props.id)
        }}> Delete </button>
      {/* <button
        onClick={() => {
          props.editProduct(editProduct)
        }}> Edit </button> */}
    </div>
  )
}

export default ProductCard