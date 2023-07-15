<template>
<div :class="this.theme">
    <div id="button" width="40" height="40">
        <QrStream v-if="this.scanner_active" @decode="onDecodeEmit" />

        <div id="badge" v-if="!this.scanner_active" @click="this.scanner_active=true; this.$emit('newScan');">
            <p>{{ data }}</p>
        </div>
    </div>
</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';
import { QrStream } from 'vue3-qr-reader';
import { reactive, toRefs } from 'vue';

export default {
name: 'ButtonScanQr',
components: {
    QrStream
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
#button {
    position: relative;
    background: var(--striped-background);
    width: 70vw;
    height: 70vw;
    border-radius: 15px;
    cursor: pointer;
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
}

p {
    color: var(--background-color);
    user-select: none;
}
</style>
