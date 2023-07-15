<template>
<div :class="this.theme" id="position">
    <div id="button" width="40" height="40">
        <div id="badge">
            <p>Scan QR</p>
        </div>
    </div>
</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

export default {
name: 'ButtonScanQr',
components: {
}, 
data() {
    return { 
        theme: curr_theme,
    }
}
}
</script>

<style scoped>
#position {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#button {
    position: relative;
    background: var(--striped-background);
    width: 70vw;
    height: 70vw;
    border-radius: 15px;
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
    color: var(--background-color)
}
</style>
