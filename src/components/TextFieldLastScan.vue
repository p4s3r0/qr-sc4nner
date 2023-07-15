<template>
    <div id="container">
        <p key="1">
            Last Scan 
        </p>
        <p id="time" key="2">
            {{ this.data }}
        </p>
    </div>
</template>

<script>
export default {
name: 'TextFieldLastScan',
props: {
    data: String
},
}
</script>

<style scoped>
#container {
    position: relative;
    width: calc(70vw - 40px);
    background-color: var(--alpha-color-20);
    border-radius: 10px;
    padding: 5px 20px 5px 20px;
    display: flex;
    margin-bottom: 10px;
    margin-left: 10vw;
}

p {
    text-align: left;
}

#time {
    position: absolute;
    width: 100%;
    right: 20px;
    text-align: right;
}

</style>
