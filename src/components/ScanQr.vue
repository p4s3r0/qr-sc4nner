<template>
<div :class="this.theme">
    <div id="button">
        <div v-if="this.scanner_active" id="containerStream">
            <QrStream @decode="onDecodeEmit"/>
            <button-close-stream @click="this.scanner_active = false; this.$emit('scanClosed')"/>
        </div>

        <transition name="scan">
            <div id="badge" v-if="!this.scanner_active" @click="this.scanner_active=true; this.$emit('newScan');">
                <p>{{ data }}</p>
            </div>
        </transition>
    </div>
</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';
import { QrStream } from 'vue3-qr-reader';
import { reactive, toRefs } from 'vue';
import ButtonCloseStream from './ButtonCloseStream.vue';

export default {
name: 'ButtonScanQr',
components: {
    QrStream,
    ButtonCloseStream
}, 
data() {
    return { 
        theme: curr_theme,
        scanner_active: false
    }
},
setup() {
    const state = reactive({
      data: "Scan QR"
    })
    function onDecode(data) {
      state.data = data
      console.log("son", state.data)
      this.$emit("newScan", state.data)
    }
    return {
      ...toRefs(state),
      onDecode
    }
},
methods: {
    onDecodeEmit(data) {
        this.$emit("gotNewScan", data)
        this.scanner_active = false
    }
}
}
</script>

<style scoped>

#containerStream {
    height: 100%;
}
#button {
    position: relative;
    background: var(--striped-background);
    height: 80vw;
    border-radius: 15px;
    max-width: 400px;
    max-height: 400px;
}

#badge {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 5px 30px 5px 30px;
    transform: translate(-50%, -50%);
    background-color: var(--main-color);
    border-radius: 15px;
    border: 2px solid var(--background-color);
    cursor: pointer;
    transition-delay: 0.5s;
}

p {
    color: var(--background-color);
    user-select: none;
}



.scan-enter-from,
.scan-leave-to {
    opacity: 0;
}

.scan-enter-active,
.scan-leave-active {
    transition: opacity 1s ease;
}
</style>
