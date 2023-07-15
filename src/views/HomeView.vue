<template>
<div :class="this.theme">
    <div id="topBar">
        <button-settings @click="this.settings_modal_active = true;" />
        <h1>Home</h1>
    </div>
    <scan-qr id="positionScanQr" @gotNewScan="gotNewScan" 
                                @newScan="this.last_scan = null; this.out_data = 'Capturing new QR Code'" 
                                @scanClosed="this.out_data = 'Scan a QR Code and see Content here'"/>
    <div id="positionOut">
        <text-field-last-scan :data="this.last_scan" v-if="this.last_scan != null"/>
        <text-field-out :data="this.out_data" />
    </div>

    <modal-setting-vue v-if="this.settings_modal_active" @exitModal="this.settings_modal_active = false" />
    
</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

import ButtonSettings from '@/components/ButtonSettings.vue';
import ScanQr from '@/components/ScanQr.vue'
import TextFieldOut from '@/components/TextFieldOut.vue'
import TextFieldLastScan from '@/components/TextFieldLastScan.vue';

import ModalSettingVue from '@/modals/ModalSetting.vue';

export default {
name: 'App',
components: {
    ButtonSettings,
    ScanQr,
    TextFieldOut,
    TextFieldLastScan,
    ModalSettingVue
}, 
data() {
    return { 
        theme: curr_theme,
        out_data: "Scan a QR Code and see Content here",
        last_scan: null,
        settings_modal_active: false
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
    position: relative;
    display: flex;
    margin-top: -30px;
}

h1 {
    text-align: center;
    width: calc(100% - 150px);
    transform: translateY(-30%);
}

#positionScanQr {
    width: calc(80vw + 2 * 10px);
    position: relative;
    margin-top: 55%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
}

#positionOut {
    position: absolute;
    top: calc(27.5% + 70vw + 30px);
    left: 50%;
    transform: translateX(-50%);
}
</style>
