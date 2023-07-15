<template>
    <div class="container">
        <h1>Settings</h1>
        <div id="containerColors">
            <button-color-choice color_="red" @click="changeTheme('theme-red')"/>
            <button-color-choice color_="orange" @click="changeTheme('theme-orange')"/>
            <button-color-choice color_="yellow" @click="changeTheme('theme-yellow')"/>
            <button-color-choice color_="green" @click="changeTheme('theme-green')"/>
            <button-color-choice color_="turkys" @click="changeTheme('theme-turkys')"/>
            <button-color-choice color_="cyan" @click="changeTheme('theme-cyan')"/>
            <button-color-choice color_="skyblue" @click="changeTheme('theme-skyblue')"/>
            <button-color-choice color_="blue" @click="changeTheme('theme-blue')"/>
            <button-color-choice color_="violet" @click="changeTheme('theme-violet')"/>
            <button-color-choice color_="magenta" @click="changeTheme('theme-magenta')"/>
            <button-color-choice color_="lightPink" @click="changeTheme('theme-light-pink')"/>
            <button-color-choice color_="pink" @click="changeTheme('theme-pink')"/>
            <button-color-choice color_="darkPink" @click="changeTheme('theme-dark-pink')"/>
            <button-color-choice color_="rosa" @click="changeTheme('theme-rosa')"/>
            <button-color-choice color_="gray" @click="changeTheme('theme-gray')"/>
            <button-color-choice color_="white" @click="changeTheme('theme-white')"/>
        </div>
        <button-back id="positionButtonBack" @click="this.$emit('exitModal')"/>
    </div>
</template>

<script>
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonColorChoice from '@/components/ButtonColorChoice.vue'

import { setTheme } from '@/db/session_db'

export default {
name: 'App',
components: {
    ButtonBack,
    ButtonColorChoice
}, 
data() {
    return { 

    }
},
methods: {
    changeTheme(theme) {
        console.log("change theme", theme)
        setTheme(theme)
        this.$router.go(this.$router.currentRoute)
    }
}
}
</script>

<style scoped>
.container {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 20px;
    background-color: var(--background-alpha-20);
    backdrop-filter: blur(15px);
    border: 1px solid var(--main-color);
    border-radius: 15px;
}

#containerColors {
    margin-top: 20vh;
    position: relative;
    height: 40vh;
    left: 8%;
    width: 80%;
}

#button {
    position: relative;
    background-color: var(--main-color);
    width: 50px;
    height: 50px;
    border-radius: 15px;
    bottom: 0px;
}

svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

#positionButtonBack {
    position: absolute;
    bottom: 15px;
    right: 15px;
}
</style>