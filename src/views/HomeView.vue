<template>
<div :class="this.theme">
    <div id="topBar">
        <button-settings />
        <h1>Home</h1>
    </div>
    <button-scan-qr id="positionScanQr" />
    <div id="positionOut">
        <text-field-out data="Scan a QR Code and see Content here" />
    </div>

</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

import ButtonSettings from '@/components/ButtonSettings.vue';
import ButtonScanQr from '@/components/ButtonScanQr.vue'
import TextFieldOut from '@/components/TextFieldOut.vue'

export default {
name: 'App',
components: {
    ButtonSettings,
    ButtonScanQr,
    TextFieldOut
}, 
data() {
    return { 
        theme: curr_theme,
    }
},
beforeMount() {
    console.log(curr_theme)
}
}
</script>

<style scoped>
#topBar {
    display: flex;
    margin-top: -30px;
}

h1 {
    text-align: center;
    width: calc(100% - 100px);
    transform: translateY(-30%);
}

#positionScanQr {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#positionOut {
    position: absolute;
    top: calc(20% + 70vw + 30px);
}
</style>
