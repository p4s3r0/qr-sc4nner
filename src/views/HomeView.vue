<template>
<div :class="this.theme">
    <div id="topBar">
        <button-settings />
        <h1>Home</h1>
    </div>
    <button-scan-qr id="positionScanQr" @gotNewScan="gotNewScan" @newScan="this.last_scan = null; this.out_data = 'Capturing new QR Code'" />
    <div id="positionOut">
        <text-field-last-scan :data="this.last_scan" v-if="this.last_scan != null"/>
        <text-field-out :data="this.out_data" />
    </div>

</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

import ButtonSettings from '@/components/ButtonSettings.vue';
import ButtonScanQr from '@/components/ButtonScanQr.vue'
import TextFieldOut from '@/components/TextFieldOut.vue'
import TextFieldLastScan from '@/components/TextFieldLastScan.vue';

export default {
name: 'App',
components: {
    ButtonSettings,
    ButtonScanQr,
    TextFieldOut,
    TextFieldLastScan
}, 
data() {
    return { 
        theme: curr_theme,
        out_data: "Scan a QR Code and see Content here",
        last_scan: null
    }
},
methods: {
    gotNewScan(data) {
        this.out_data = data
        var today = new Date();
        this.last_scan = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
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
    left: 50%;
    transform: translateX(-50%);
}
</style>
