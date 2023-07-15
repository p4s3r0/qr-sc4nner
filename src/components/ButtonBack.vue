<template>
<div id="position">
    <div id="button" width="40" height="40">
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_71)">
            <path d="M16.25 17.875H3.33124C4.14374 9.66388 11.0727 3.25 19.5 3.25C28.4749 3.25 35.75 10.5251 35.75 19.5C35.75 28.4749 28.4749 35.75 19.5 35.75C11.0744 35.75 4.14536 29.3361 3.33124 21.125H16.25V26L24.375 19.5L16.25 13V17.875Z" fill="#1E1E1E"/>
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
