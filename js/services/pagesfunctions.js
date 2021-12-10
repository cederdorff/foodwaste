export default class PageFunctions {
    constructor() {
        this._products = [];
        this._sellerId; //use to find id of seller for Edit and Delete
        this.initData();
    }

    async initData() {
        this._products = await this.getData();
        this.appendProducts(this._products);
    }

    async getData() {
        const response = await fetch("Json/foods.json");
        const data = await response.json();
        return data;
    }

    appendProducts(foods) {
        let htmlTemplate = "";
        for (let food of foods) {
            htmlTemplate += /*html*/ `
                <article id="product-content">
                    <header class="product-grid">
                        <div>NO.</div>
                        <div>SELLER</div>
                        <div>CATEGORY</div>
                        <div>NAME</div>
                        <div>WEIGHT/KG</div>
                        <div>QUANTITY</div>
                        <div>IMG</div>
                    </header>
                     <section class="product-grid" id="sellers-list">
                        <div>${food.no}</div>
                        <div>${food.seller}</div>
                        <div>${food.category}</div>
                        <div>${food.name}</div>
                        <div>${food.weight}</div>
                        <div>${food.quantity}</div>
                        <div>${food.img}</div>
                        <button onclick="goToEdit(${food.id})">Edit</button>
                        <button onclick="deleteFood(${food.id})">Delete</button>
                        
                    </section>
                </article>
            `;
        }
        document.querySelector(".grid-container").innerHTML = htmlTemplate;
    }
}

//let pageFunctions = new PageFunctions();
//export default pageFunctions;
