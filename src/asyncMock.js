
const products = [
    {
        id: "1",
        name: "Bacardi",
        price: 20,
        category: "Premium",
        img: "https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/r/o/ron-bacardi-8.jpg", 
        stock: 22,
        description: "Ron Bacardi"
    },
    {
        id: "2",
        name: "Barcelo",
        price: 15,
        category: "Premium",
        img:"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/3/1/3109.jpg",
        stock: 30,
        description: "Ron Barcelo"
    },
    {
        id: "3",
        name: "Brugal",
        price: 12,
        category: "Tradicional",
        img:"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/b/r/brugal-anejo-nueva-imagen_1.jpg",
        stock: 35,
        description: "Ron Brugal"
    },
    {
        id: "4",
        name: "Cacique",
        price: 10,
        category: "Tradicional",
        img:"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/3/8/3883.jpg",
        stock: 21,
        description: "Ron Cacique"
    },
    {
        id: "5",
        name: "Havanna",
        price: 10,
        category: "Tradicional",
        img:"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/r/o/ron_havana_club_5_a_os_70cl.jpg",
        stock: 28,
        description: "Ron Havanna"
    },
    {
        id: "6",
        name: "Zacapa",
        price: 40,
        category: "Premium",
        img:"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/z/a/zacapa-ambar-12-anos-1l.jpg",
        stock: 15,
        description: "Ron Zacapa"
    }
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve (products.find(prod=> prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve (products.find(prod=> prod.category === categoryId))
        }, 500)
    })
}