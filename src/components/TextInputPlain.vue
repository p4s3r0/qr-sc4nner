<template>
    <div id="position">
        <input placeholder="QR Value" v-model="this.my_value" @input="$emit('valueChanged', this.my_value)">
    </div>
</template>

<script>

export default {
name: 'ButtonSettings',
components: {
}, 
props: {
    data: String,
    valid: Boolean
},
data() {
    return { 
        my_value: "",
    }
}, methods : {

}
}
</script>

<style scoped>
input {
    margin-top: 50px;
    position: relative;
    width: 72vw;
    max-width: 380px;
    border: 1px solid var(--main-color);
    border-radius: 10px;
    padding: 0px 20px 0px 20px;
    overflow-wrap: break-word;
    background: var(--alpha-color-20);
    padding: 10px;
    font-size: 1em;
    margin-left: 50%;
    transform: translateX(-50%);
    color: white;
}
</style>
