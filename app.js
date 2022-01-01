const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        catagory: 'lunch',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 2,
        title: 'parro apple',
        catagory: 'breakfast',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'orange pancakes',
        catagory: 'lunch',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'termerik pan',
        catagory: 'dinner',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'hotmilk cakes',
        catagory: 'breakfast',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'ifood panca',
        catagory: 'shakes',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'yellow fruits',
        catagory: 'dinner',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'ripe mango',
        catagory: 'shakes',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'souer olive',
        catagory: 'breakfast',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 1,
        title: 'milk food',
        catagory: 'shakes',
        price: 15.99,
        img: './images/download.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    }
]
const menuItems = document.querySelector('.menu-items')
btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function(){
    displayItems(menu)
    displayMenuButtons()
})

function displayItems(menuList){
    let displayMenu = menuList.map(function(item){
        const {title, catagory, price, img, des} = item
        return `<div class="item">
        <div class="image">
            <img src=${img} alt="first-image">
        </div>
        <div class="info">
            <div class="flex">
                <h3>${title}</h3>
                <p>price: <span class="price">$${price}</span></p>
            </div>
            <div class="info-underline"></div>
            <div class="para">
                <p class="des">${des}
                </p>
            </div>
        </div>
    </div>`
    })
    displayMenu = (displayMenu.join(''))
    menuItems.innerHTML = displayMenu
}

function displayMenuButtons(){
    const catagories = menu.reduce(function(values, item){
        if(!values.includes(item.catagory)){
            values.push(item.catagory)
        }
        return values
    }, ['all'])
    const catagroyBtns = catagories.map(function(btn){
        return `<button class="filter-btn" type="button" data-id=${btn}>${btn}</button>`
    }).join('')
    btnContainer.innerHTML = catagroyBtns
    const filterBtns = btnContainer.querySelectorAll('.filter-btn')
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const btnName = e.currentTarget.dataset.id
            const menuCatagory = menu.filter(function(menuItem){
                if(menuItem.catagory === btnName){
                    return menuItem
                }
            })
            if(btnName === 'all'){
                displayItems(menu)
            }
            else{
                displayItems(menuCatagory)
            }
        })
    })
}