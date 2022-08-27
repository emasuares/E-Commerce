export const productAdapterFromFirestorDb =(doc)=>{
    const data=doc.data()

    const AdaptedProducts ={
        id:doc.id,
        name: data.name,
        price:data.price,
        category:data.category,
        img:data.img,
        stock:data.stock,
    }
    return AdaptedProducts
}