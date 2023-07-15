<template>
<div :class="this.theme" id="position">
    <div id="container">
        <p>
            {{ this.data }}
        </p>
    </div>
</div>
</template>

<script>
import { curr_theme } from '@/db/session_db';

export default {
name: 'ButtonSettings',
components: {
}, 
props: {
    data: String
},
data() {
    return { 
        theme: curr_theme,
    }
}
}
</script>

<style scoped>
#container {
    position: relative;
    left: 17%;
    width: calc(70vw - 40px);
    border: 1px solid var(--main-color);
    border-radius: 10px;
    padding: 0px 20px 0px 20px;

}

p {
    text-align: left;
}
</style>
