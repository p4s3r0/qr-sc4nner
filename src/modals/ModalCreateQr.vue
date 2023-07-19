<template>
    <div class="container">
            <h1>Create QR Code</h1>

            <text-input-plain @valueChanged="updateValueQrData"/>
            

            <div id="positionQrCode">
                <QRCodeVue3 v-if="this.value"
                :key="this.value"
                :width="300"
                :height="300"
                :value="this.value"
                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'L' }"
                :imageOptions="{ hideBackgroundDots: true, imageSize: 1, margin: 0 }"
                :dotsOptions="{
                    type: 'square',
                    color: '#FFFFFF',
                    
                }"
                :backgroundOptions="{ color: '#ffffff00' }"
                :cornersSquareOptions="{ type: 'square', color: '#FFFFFF' }"
                :cornersDotOptions="{ type: undefined, color: '#FFFFFF' }"
                fileExt="png"
                :download="true"
                myclass="my-qur"
                imgclass="img-qr"
                :downloadOptions="{ name: 'qr-code', extension: 'png' }"
                />
            </div>


        <button-back id="positionButtonBack" @click="this.$emit('exitModal')"/>
    </div>
</template>

<script>
import ButtonBack from '@/components/ButtonBack.vue'
import QRCodeVue3 from "qrcode-vue3";
import TextInputPlain from '@/components/TextInputPlain.vue';

export default {
name: 'App',
components: {
    ButtonBack,
    QRCodeVue3,
    TextInputPlain
}, 
data() {
    return { 
        value: "default"
    }
},
methods: {
    updateValueQrData(val) {
        this.value = val;
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


#button {
    position: relative;
    background-color: var(--main-color);
    width: 50px;
    height: 50px;
    border-radius: 15px;
    bottom: 0px;
}


#positionButtonBack {
    position: absolute;
    bottom: 15px;
    right: 15px;
}


h1 {
    text-align: center;
}

#positionQrCode {
    position: absolute;
    margin-top: 10vh;
    left: 50%;
    transform: translateX(-50%);
}
</style>