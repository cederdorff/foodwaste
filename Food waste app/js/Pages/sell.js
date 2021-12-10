export default class SellPage {
    constructor() {
        this.template();

    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="sell" class="page">
                <section class="pages_body" id="sell_body">
                    
                </section>             
            </main>
                
        `;
    }




}