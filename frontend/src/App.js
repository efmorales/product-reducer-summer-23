import React, {useReducer, useEffect} from 'react'
import './App.css';
import {v4 as uuidv4} from 'uuid'
import productReducer from './reducers/productReducer'
import ProductCard from './components/ProductCard';

function App() {
  // const initialState = [
  //   {
  //     id: uuidv4(),
  //     title: "Hogwart's Legacy",
  //     publisher: "Warner Bros.",
  //     genre: "Adventure",
  //     price: 59.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Destiny 2",
  //     publisher: "Bungie",
  //     genre: "FPS",
  //     price: 29.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "The Last of Us",
  //     publisher: "Sony",
  //     genre: "Adventure",
  //     price: 69.99
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Total War: Warhammer III",
  //     publisher: "Sega",
  //     genre: "Strategy",
  //     price: 49.99
  //   }
  // ]

  const [product, dispatch] = useReducer(productReducer, [])

  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetch('http://localhost:4000/api/products/all-products')
  //     const data = await response.json()
  //     dispatch({
  //       type: 'get-products',
  //       payload: data,
  //     })
  //   }
  //   loadData();
  // }, [])
  
 let onClickHandler = () => {
  const dataFetch = async () => {
    const response = await fetch('http://localhost:4000/api/store/products');
    const data = await response.json();
    const newData = [];

    data.map((e)=>{
      newData.push({
        id: e.id,
        title: e.gameTitle,
        publisher: e.publisherName,
        genre: e.genre,
        price: e.MSRP,
      })
    })
    dispatch({
      type: 'get-products',
      payload: newData,
    })
  console.log(data[0]);
  console.log(newData[0]);

  }
  dataFetch();
 }

  return (
    <div className="App">
      <h1>Video Game Products</h1>

      <button onClick={onClickHandler}> Steam API </button>

      <button onClick={
        () => dispatch({
          type: 'add-product'
        })
      }>Add Product</button>
      {
        product.map((element) => {
          return (
          <ProductCard
            key={element.id}
            id={element.id}
            title={element.title}
            publisher={element.publisher}
            genre={element.genre}
            price={element.price}
            deleteProduct={
              (id) => dispatch ({
                type: 'delete-product',
                id: id,
              })
            }
            editProduct={
              (param) => dispatch ({
                type: 'edit-product',
                editedObj: param
              })
            }
          /> 
          )
        })
     }
    </div>
  );
}

export default App;