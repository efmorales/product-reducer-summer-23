export default function productReducer(product, action) {
    switch (action.type) {
        case 'delete-product':
            console.log(action.id);
            let filteredArray = product.filter((e) =>
                e.id !== action.id
            )
            return filteredArray;
        case 'edit-product':
            // take in the edited object (action.editedObj) and replace the original with it.
            // map through product state, if element.id matches the edited obj id, replace it, else return original
            // let editedArray = product.map(element =>  {
            //     if (element.id === action.editedObj.id) {
            //         return action.editedObj
            //     } else {
            //         return element
            //     } 
            // })
            let editedArray = product.map(element => element.id === action.editedObj.id ? action.editedObj : element)
            return editedArray

        default:
            alert("not matching types");
            return product
    }
}