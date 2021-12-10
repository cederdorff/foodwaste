export default class LogIn {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <main id="logIn" class="page">
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
                        <button type="button" id="btnLogin"  >Login</button>
                    </form>
                </div>  
                </div> 
          
                <div class="logparts" id="logpart2">
                    <h1>Welcome Back!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="log_inner_child">
                        <p>Already have an account?</p>
                        <a href="#signUp"><button>Sign Up</button></a>
                    </div>
                </div>  

            </section>
        </main>

    
            
    <script src="../app.js"></script>
      
    `;
    }
}