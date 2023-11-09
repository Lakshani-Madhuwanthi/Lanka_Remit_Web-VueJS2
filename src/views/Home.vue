<template>
    <div>
        <LoginNavbar></LoginNavbar>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container m-2">
                    <div class="columns">
                        <div class="column is-8-tablet is-6-desktop is-8-widescreen">
                            <div class="title-subtitle">
                                <p class="title" style="color: #0C4383; font-family:'Inter', sans-serif; font-size: 5em;">
                                    Faster. Safer. and Easy.
                                </p>
                                <p class="title" style="color: #0C4383; font-family:'Inter', sans-serif; font-size: 5em;">
                                    Money Transfer
                                </p>
                                <p class="subtitle mt-2" style="color: #0C4383; font-family: 'Inter', sans-serif;">
                                    Join Lanka Remittance with a few clicks
                                </p>
                            </div>
                            <div class="buttons mt-4">
                                <div class="column is-half pl-0">
                                    <b-button class="button is-medium is-fullwidth"
                                        style="background-color: #0C4383; color: white;"
                                        >
                                        <strong>Send money</strong>
                                    </b-button>
                                </div>
                                <div class="column is-half">
                                    <b-button class="button is-medium is-fullwidth"
                                        style="color: #0C4383; border-color: #0C4383;" @click="navigateTo('RequestMoney')" outlined>
                                        Request money
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>


<script>
import LoginNavbar from '../components/LoginNavbar.vue'

export default {
    name: "Home",
    components:{
        LoginNavbar
    }

}
</script>

<style></style>
