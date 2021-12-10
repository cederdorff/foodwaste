export default class Header {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <section id="header" class="">
            <section id=logo>
                <a href="#buy">
                    <img src="/images/app/BSSFood.png" alt="logo">
                </a>
            </section>
              <p class="logout">logout</p>
            
        </section>
      
    `;
    }
}
