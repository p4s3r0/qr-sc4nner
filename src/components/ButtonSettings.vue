<template>
<div id="position">
    <div id="button" width="40" height="40">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g clip-path="url(#clip0_3_11)">
            <path d="M18 1.5L32.25 9.75V26.25L18 34.5L3.75 26.25V9.75L18 1.5ZM18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5V22.5Z" fill="var(--background-color)"/>
            </g>
        </svg>
    </div>
</div>
</template>

<script>
export default {
name: 'ButtonSettings',
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
    float: left;
    margin-left: 20px;
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
    transform: translate(-50%, -50%);
}
</style>
