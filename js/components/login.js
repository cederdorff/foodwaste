export default class Login {
    constructor() {
        this.template();
        setTimeout(() => {
            this.attachEvents();
        }, 100);
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <section id="login" class="page">
            <section class="pages_body" id="login_body">
                
                <div class="logparts">
                    <img id="logpart1" src="/Images/app/BSSFood.png" alt="">
                
                    <!-- login form -->
                    <header class="topbar">
                         <h1>Log In</h1>
                    </header>
      
                    <p>please sign in to your account to continue with the app.</p>
                    <form>
                        <input id="loginMail" type="text" placeholder="Email">
                        <input id="loginPassword" type="password" placeholder="Password">
                        <button type="button" id="btnLogin">Login</button>
                    </form>
                </div>  
          
                <div class="logparts" id="logpart2">
                    <h1>Welcome Back!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="log_inner_child">
                        <p>Already have an account?</p>
                        <a href="#signup"><button>Sign Up</button></a>
                    </div>
                </div>  

            </section>
        </section>
      
    `;
    }

    async login() {
        console.log("Login function");
        const mail = document.querySelector("#loginMail").value;
        const password = document.querySelector("#loginPassword").value;
        const user = { mail: mail, password: password };
        console.log(user);

        const response = await fetch("../backend/phpservice/login.php", {
            method: "POST",
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log(data);
        localStorage.setItem("loggedUser", data.user);
        console.log(data.user);
        spaRoutes.showPage("#buy");
    }

    attachEvents() {
        document.querySelector("#btnLogin").onclick = () => this.login();
    }
}
