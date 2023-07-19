<template>
<div :class="this.theme" id="container">
    <div id="topBar">
        <button-settings @click="this.settings_modal_active = true;" />
        <h1>Home</h1>
    </div>
    <div id="wholeContainer">

        <scan-qr id="positionScanQr" @gotNewScan="gotNewScan" 
                                    @newScan="this.last_scan = null; this.out_data = 'Scanning QR-Code...'" 
                                    @scanClosed="this.out_data = 'Scan a QR-Code to see the Content here!'"/>
        <div id="positionOut">

            <transition name="lastscan" mode="out-in">
                <div v-if="this.last_scan == null">
                    <transition name="lastscan" mode="out-in">
                        <text-field-out v-if="this.out_data != 'Scanning QR-Code...'" :data="this.out_data" style="transition-delay: 0.5s;" :valid="false"/>
                        <text-field-out v-else :data="this.out_data" :valid="false" />
                    </transition>
                </div>
                <div v-else>
                    <text-field-last-scan :data="this.last_scan" />
                    <text-field-out :data="this.out_data" :valid="true" />
                </div>
            </transition>

            <transition name="lastscan" >
            </transition>


        </div>
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
    ModalSettingVue,
}, 
data() {
    return { 
        theme: curr_theme,
        out_data: "Scan a QR-Code to see the Content here!",
        last_scan: null,
        settings_modal_active: false
    }
},
methods: {
    gotNewScan(data) {
        this.out_data = data
        var today = new Date();
        this.last_scan = today.getHours().toString().padStart(2, "0") + ":" + today.getMinutes().toString().padStart(2, "0") + ":" + today.getSeconds().toString().padStart(2, "0")
    }
}
}
</script>

<style scoped>
@media (min-aspect-ratio: 3/2) {
  body {
    background-color: #9ff; /* cyan */
  }
}

#topBar {
    position: relative;
    display: flex;
    margin-top: 30px;
}

h1 {
    text-align: center;
    width: calc(100% - 150px);
    transform: translateY(-30%);
}

#positionScanQr {
    position: relative;
    margin-top: 60px;
    margin-left: 10px;
}

#positionOut {
    position: relative;
    left: 50%;
    margin-top: 20px;
    transform: translateX(-50%);
}

.lastscan-enter-from,
.lastscan-leave-to {
    opacity: 0;
}

.lastscan-enter-active,
.lastscan-leave-active {
    transition: opacity 0.5s ease;
}

#wholeContainer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    max-width: 450px;
} 

</style>
