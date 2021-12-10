export default class SellPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML +=
            /*html*/
            `
            <section id="sell" class="page">
                <section class="pages_body" id="sell_body">
                    
                </section>             
            </section>
                
        `;
    }
}
