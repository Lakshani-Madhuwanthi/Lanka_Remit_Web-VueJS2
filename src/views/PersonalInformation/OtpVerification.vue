<template>
    <div>
        <LoginNavbar></LoginNavbar>
        <section class="hero is-fullheight" style="position: relative;">
            <div class="hero-body">
                <div class="container">
                    <b-steps :has-navigation="false" size="is-medium" type="is-link">
                                <b-step-item label="Personal Information" ></b-step-item>
                                <b-step-item label="OTP Verification" icon="account"></b-step-item>
                                <b-step-item label="Create Pin" icon="account-plus"></b-step-item>
                            </b-steps>
                    <div class="columns is-centered">      
                        <div class="column is-8-tablet is-6-desktop is-6-widescreen">
                            <div class="card" style=" background-color: rgba(255,255,255,0.6);">
                                <div class="card-content" style="text-align: center;">
                                    <div class="content">
                                        <p
                                            style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 0;">
                                            Personal Information</p>
                                        <p style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif; margin-bottom: 0;">
                                            Tell us about you!
                                        </p>
                                        <p style="font-weight: 500;">Fill out the form on the left.You can always edit the data using back button.</p>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Mobile Number<span style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">NIC/Passport Number<span style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Email Address<span style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons columns is-centered">
                                        <div class="column is-3">
                                            <b-button type="is-link is-light" style="width: 100%;"
                                                @click="goBack" outlined>Back</b-button>
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

<script>
import LoginNavbar from '../../components/LoginNavbar.vue'

export default {
    name: "OtpVerification",
    components: {
        LoginNavbar
    },
    methods: {
    goBack() {
      window.history.back();
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