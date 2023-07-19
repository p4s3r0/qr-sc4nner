<template>
<div id="position">
    <div id="button" width="40" height="40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_18128)">
            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" fill="black"/>
            </g>
        </svg>
    </div>
</div>
</template>

<script>
export default {
name: 'ButtonBack',
components: {
}, 
data() {
    return { 
    }
}
}
</script>

<style scoped>
#position {
    position: absolute;
    right: 20px;
}

#button {
    position: relative;
    background-color: var(--main-color);
    width: 50px;
    height: 50px;
    border-radius: 15px;
    cursor: pointer;
}

svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-32%, -32%);
    scale: 1.6;
}
</style>
