<template>
    <div id="container">
        <p>
            Last Scan 
        </p>
        <p id="time">
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
    width: calc(60vw);
    background-color: var(--alpha-color-20);
    border-radius: 10px;
    padding: 5px 20px 5px 20px;
    display: flex;
    margin-bottom: 10px;
    max-width: 300px;
    margin-left: 7%;
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
