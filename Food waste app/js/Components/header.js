export default class Header {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <main id="header" class="">
            <section id=logo>
                <a href="#buy">
                    <img src="/Images/app/BSSFood.png" alt="logo">
                </a>
            </section>
              <p class="logout">logout</p>
            
        </main>
      
    `;
    }
}