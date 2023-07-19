<template>
<div id="position">
    <div id="container">
        <Transition>
            <div>
                <p>
                    {{ this.data }}
                </p>
                <button-copy-to-clipboard v-if="this.valid" @click="copyOutput"/>
                <button-open-link v-if="isValidUrl(this.data)" @click="openLink" />
            </div>
        </Transition>
    </div>
</div>
</template>

<script>
import ButtonCopyToClipboard from './ButtonCopyToClipboard.vue'
import ButtonOpenLink from './ButtonOpenLink.vue';

export default {
name: 'ButtonSettings',
components: {
    ButtonCopyToClipboard,
    ButtonOpenLink
}, 
props: {
    data: String,
    valid: Boolean
},
data() {
    return { 
    }
}, methods : {
    isValidUrl(url) {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(url);
    },
    copyOutput() {
        navigator.clipboard.writeText(this.data);
    },
    openLink() {
        window.location.href = this.data
    }
}
}
</script>

<style scoped>
#container {
    position: relative;
    width: 72vw;
    max-width: 380px;
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
