<template>
    <div>
        <div class="background"></div>
        <div class="container">
            <div class="item">
                <h2 class="logo"><i class='bx bxl-xing'></i>aliyu</h2>
                <div class="text-item">
                    <h2>Welcome!<br><span>To Our Channel</span></h2>
                    <p>多人协作，方便快捷</p>
                    <SocialIcon />
                </div>
            </div>
            <div class="login-section">
                <transition>
                    <div class="form-box" v-if="showLogin">
                        <LoginForm v-model:show-value="showLogin" />
                    </div>
                    <div class="form-box register" v-else>
                        <RegisterForm v-model:show-value="showLogin" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from './NavbarComponent.vue';
import SearchBar from './SearchBar.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue'
import SocialIcon from './SocialIcon.vue';
import { ref } from 'vue';

const showLogin = ref(true);


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,500&display=swap');
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background: black;

}

.background {
    background: url(../../assets/background.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    filter: blur(10px);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 13%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

}

.navbar a {
    position: relative;
    font-size: 16px;
    color: black;
    margin-right: 30px;
    text-decoration: none;
}

.navbar a::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: black;
    bottom: -5px;
    border-radius: 5px;
    transform: translateY(10px);
    opacity: 0;
    transition: .5s ease;
}

.navbar a:hover:after {
    transform: translateY(0);
    opacity: 1;
}

.search-bar {
    width: 250px;
    height: 45px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 6px;
    display: flex;
    align-items: center;
}

.search-bar input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: black;
    font-size: 16px;
    padding-left: 10px;
}

.search-bar button {
    width: 40px;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: black;
    cursor: pointer;
}

.search-bar input::placeholder {
    color: black;
}

.search-bar button i {
    font-size: 22px;
}

.container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 600px;
    margin-top: 20px;
    background: url(../../assets/background.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;


}

.item {
    position: absolute;
    top: 0;
    left: 0;
    width: 58%;
    height: 100%;
    color: black;
    background: transparent;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.item .logo {
    color: black;
    font-size: 30px;

}

.text-item h2 {
    font-size: 40px;
    line-height: 1;
}

.text-item p {
    font-size: 16px;
    margin: 20px 0;
}

.social-icon a i {
    color: black;
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
    transition: .5s ease;
}

.social-icon a:hover i {
    transform: scale(1.2);
}

.container .login-section {
    position: absolute;
    top: 0;
    right: 0;
    /* width: calc(100% - 58%); */
    width: 40%;
    height: 100%;
    color: black;
    backdrop-filter: blur(10px);
}

.login-section .form-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

}

.v-enter-active {
    transition: transform .6s ease;
    transition-delay: 0.7s;
}

.v-enter-from {
    transform: translateX(430px);
}

.v-enter-to {
    transform: translateX(0);
}

.v-leave-active {
    transition: transform .6s ease;
}

.v-leave-from {
    transform: translateX(0);
}

.v-leave-to {
    transform: translateX(430px);
}

.login-section .form-box h2 {
    text-align: center;
    font-size: 25px;
}

.form-box .input-box {
    width: 340px;
    height: 50px;
    border-bottom: 2px solid black;
    margin: 30px 0;
    position: relative;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    padding-right: 28px;


}

.input-box label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600px;
    pointer-events: none;
    transition: .5s ease;

}

.input-box .icon {
    position: absolute;
    top: 13px;
    right: 0;
    font-size: 19px;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}

.remember-password {
    font-size: 14px;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-password label input {
    accent-color: black;
    margin-right: 3px;

}

.remember-password a {
    color: black;
    text-decoration: none;
}

.remember-password a:hover {
    text-decoration: underline;
}

.btn {
    background: black;
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: black;
    font-size: 16px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.4);

}

.create-account {
    font-size: 14.5px;
    text-align: center;
    margin: 25px;
}

.create-account p a {
    color: black;
    font-weight: 600px;
    text-decoration: none;
}

.create-account p a:hover {
    text-decoration: underline;
}
.password-mismatch {
    color: red;
    font-size: 12px;
    margin-top: 0px;
}
</style>
