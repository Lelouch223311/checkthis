

// ! const output = document.querySelector('.output')
//! ot suda
// let products = []

// // const data = await fetch('https://dummyjson.com/product')
// function prod(){
//     const list = document.querySelector('.output')
//     //* console.log(typeof(products))
//     //* console.log(products[0][0].title)
//     products.forEach(item => {
//         const elem = document.createElement('li')
//         elem.textContent = item.title
//         list.appendChild(elem)
//         // console.log(item)
//     })
//     //! prods.forEach(element => {
//     //     const titleElem = document.createElement('li')
//     //     titleElem.textContent = element.title
//     //     list.appendChild(titleElem)
        
//         // const li = document.createElement('li')
//         // li.textContent = 'text kakoy to'
//         // output.appendChild(li)
//     // !});
// }
// async function prods(){
//     const data = await fetch('https://dummyjson.com/product')
//     let prodd = await data.json()
//     products = prodd.products
// }
// prods()
//! do suda

async function getProducts(){
    let products = []
    const list = document.querySelector('.output')
    fetch('https://dummyjson.com/product')
        .then(res => res.json())
        .then(json => {
            products  = json.products
            products.forEach(item => {
                let elem = document.createElement('li')
                elem.textContent = item.title
                list.appendChild(elem)
            });
        })
        .catch(error => console.log(error))
}


function changeColor(){
    alert('ERROR: Функция ещё не сделана ! :)')
}

//* async function getProducts(){
//     let products = []
//     try {
//         const data = await fetch('https://dummyjson.com/product')
//         let prod = await data.json()
//         products = prod.products
//         console.log(products)

//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
//* }