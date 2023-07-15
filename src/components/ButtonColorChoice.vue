<template>
    <div id="position">
        <div id="button" :class="this.color_">    
        </div>
    </div>
</template>

<script>
export default {
name: 'ButtonBack',
props: {
    color_: String
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
    width: 50px;
    height: 50px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 20px;
}

.red {
    background: var(--color-red);
}

.orange {
    background: var(--color-orange);
}

.yellow {
    background: var(--color-yellow);
}

.green {
    background: var(--color-green)
}

.turkys {
    background: var(--color-turkys);
}

.cyan {
    background: var(--color-cyan);
}

.skyblue {
    background: var(--color-skyblue);
}

.blue {
    background: var(--color-blue);
}

.violet {
    background: var(--color-violet);
}

.magenta {
    background: var(--color-magenta);
}

.lightPink {
    background: var(--color-light-pink);
}

.pink {
    background: var(--color-pink);
}

.darkPink {
    background: var(--color-dark-pink);
}

.rosa {
    background: var(--color-rosa);
}

.gray {
    background: var(--color-gray);
}

.white {
    background: var(--color-white);
}

</style>
    