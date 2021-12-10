export default class MessagePage {
    constructor() {
        this.template();

    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="messages" class="page">
                <section class="pages_body" id="message_body">
                    <div>
                    
                    </div>
                </section>             
            </main>
                
        `;
    }




}