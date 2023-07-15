<template>
<div id="position">
    <div id="container">
        <Transition>
            <p>
                {{ this.data }}
            </p>
        </Transition>
    </div>
</div>
</template>

<script>
export default {
name: 'ButtonSettings',
components: {
}, 
props: {
    data: String
},
data() {
    return { 
    }
}
}
</script>

<style scoped>
#container {
    position: relative;
    width: calc(90vw - 40px);
    border: 1px solid var(--main-color);
    border-radius: 10px;
    padding: 0px 20px 0px 20px;
    overflow-wrap: break-word;
}

p {
    text-align: left;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
