export default class ProfilePage {
    constructor() {
        this.template();

    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="profile" class="page">
                <section class="pages_body" id="profile_body">
                    
                </section>             
            </main>
                
        `;
    }




}