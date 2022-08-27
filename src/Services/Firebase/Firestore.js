
import { getDocs, collection, query, where} from 'firebase/firestore';
import { db} from '.'
import { getDoc,doc } from "firebase/firestore";
import { productAdapterFromFirestorDb } from '../../adapters/productAdapter';



export const GetProducts=(categoryId)=>{
    const collectionRef = !categoryId
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category', '==', categoryId))
       return getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
             return productAdapterFromFirestorDb(doc)
            })
            return(products)
        }).catch(error => {
            return error
        })
}

export const getDetail =(productId)=>{
    return getDoc(doc(db,'products',productId)).then(response=>{
        const product={id:response.id,...response.data()}
        return (product)
    }).catch(error => {
        return(error)
    })
}

export const getCategories=()=>{
    const collectionRef = collection(db, 'categories')
    return getDocs(collectionRef).then(response => {
        const categories = response.docs.map(doc => {
            return ({ id: doc.id, ...doc.data() })
        })
        return(categories)
    }).catch(error => {
        console.log(error)
    })

}
