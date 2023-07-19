<template>
<div id="position">
    <div id="button" width="40" height="40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_18220)">
            <path d="M10 6V8H5V19H16V14H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H10ZM21 3V12L17.206 8.207L11.207 14.207L9.793 12.793L15.792 6.793L12 3H21Z" fill="black"/>
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
    bottom: -15px;
}

#button {
    position: relative;
    background-color: var(--main-color);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
}

svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
