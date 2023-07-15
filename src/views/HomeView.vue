<template>
<div :class="this.theme">
    <div id="topBar">
        <button-settings />
        <h1>Home</h1>
    </div>
    <button-scan-qr />

</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

import ButtonSettings from '@/components/ButtonSettings.vue';
import ButtonScanQr from '@/components/ButtonScanQr.vue';

export default {
name: 'App',
components: {
    ButtonSettings,
    ButtonScanQr
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
</style>
