//import pageFunctions from "../services/pagesfunctions";

export default class BuyPage {
    constructor() {
        this.template();
        //this.pageFunctions() = pageFunctions;
    }

    template() {
        document.querySelector("#webapp").innerHTML +=
            /*html*/
            `
            <section id="buy" class="page">
                <section class="buy-container" id="buy_content">
                     <label for="filtertBy">Filter:
                        <select id="filterBy" onchange="filterBy(this.value)">
                        <option value="" selected>All</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="dairies">Dairies</option>
                        <option value="proteins">Proteins</option>
                        <option value="grains">Grains</option>
                        <input type="search" placeholder="Search" onkeyup="search(this.value)" onsearch="search('')">
                        </select>
                    </label>
                </section>  
                <section id="products-container" class="grid-container"></section>
                </section>           
            </section>
                
        `;
    }
}
