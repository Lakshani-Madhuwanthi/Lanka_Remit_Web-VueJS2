<template>
    <div>
        <LoginNavbar></LoginNavbar>
        <section class="hero is-fullheight" style="position: relative;">
            <div class="hero-body">
                <div class="container">
                    <b-steps :has-navigation="false" size="is-medium" type="is-link">
                        <b-step-item label="Request Money"></b-step-item>
                        <b-step-item label="Request person's Details" icon="account"></b-step-item>
                        <b-step-item label="Confirm Request" icon="account-plus"></b-step-item>
                        <b-step-item label="Recipient Information" icon="account-plus"></b-step-item>
                    </b-steps>
                    <div class="columns is-centered">
                        <div class="column is-8-tablet is-6-desktop is-6-widescreen">
                            <div class="card" style=" background-color: rgba(255,255,255,0.6);">
                                <div class="card-content" style="text-align: center;">
                                    <div class="content">
                                        <p
                                            style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 0;">
                                            Request money</p>
                                        <p style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif;">
                                            Enter your personal details to send the <br>money request
                                        </p>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter Your NIC
                                                    Number<span style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10" v-model="nic">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="columns is-centered">
                                                <div class="column is-narrow">
                                                    <form action="?" method="POST">
                                                        <div class="g-recaptcha"
                                                            data-sitekey="6LeiUrImAAAAAPG8gwBDpY_8HN-pYkCzE4HffVEJ"></div>
                                                        <br />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons columns is-centered">
                                        <div class="column is-3">
                                            <b-button type="is-link is-light" style="width: 100%;" @click="goBack"
                                                outlined>Back</b-button>
                                        </div>
                                        <div class="column is-5">
                                            <b-button type="is-link" style="width: 100%;"
                                                @click="navigateTo('RequestPersonDetails')">Continue</b-button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
import LoginNavbar from '../../components/LoginNavbar.vue'

export default {
    name: "RequestMoney",
    components: {
        LoginNavbar
    },
    data() {
        return {
            nic:'',

        }
    },
    methods: {
  navigateTo(pageName) {
    this.$router.push({
      name: pageName,
      params: { nic: this.nic }
    })
  },
  goBack() {
    window.history.back();
  }
},
watch:{
    screenLoad(){
        self.hideFullScreenLoader()
    }
}

}
</script>

<style>
.hero {
    background-image: url(./../../assets/BG_Image.png);
    background-size: cover;
    background-position: center;

}
</style>
