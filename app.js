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
        price: 35.99,
        img: './images/menu-2.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 3,
        title: 'orange pancakes',
        catagory: 'lunch',
        price: 25.99,
        img: './images/menu-3.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 4,
        title: 'termerik pan',
        catagory: 'dinner',
        price: 49.99,
        img: './images/menu-4.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 5,
        title: 'hotmilk cakes',
        catagory: 'breakfast',
        price: 39.99,
        img: './images/menu-5.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 5,
        title: 'ifood panca',
        catagory: 'shakes',
        price: 26.99,
        img: './images/menu-6.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 6,
        title: 'yellow fruits',
        catagory: 'dinner',
        price: 32.99,
        img: './images/menu-7.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 7,
        title: 'ripe mango',
        catagory: 'shakes',
        price: 28.99,
        img: './images/menu-8.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 8,
        title: 'souer olive',
        catagory: 'breakfast',
        price: 20.99,
        img: './images/menu-4.jpeg',
        des: 'Find food text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.'
    },
    {
        id: 9,
        title: 'milk food',
        catagory: 'shakes',
        price: 29.99,
        img: './images/menu-9.jpeg',
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