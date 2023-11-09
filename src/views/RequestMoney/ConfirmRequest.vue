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
                                            Confirm Your Request</p>
                                        <p style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif;">
                                            We have send OTP to your mobile!
                                        </p>
                                    </div>
                                    <div class="columns is-centered mb-0">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Check Your Mobile and
                                                    Enter the OTP Code Below<span style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths pt-0 pb-0">
                                            <div class="columns">
                                                <div class="column">
                                                    <p style="text-align: left;">Didn't Receive?</p>
                                                </div>
                                                <div class="column">
                                                    <p style="text-align: right;">Resend OTP in <span style="color: blue;">30s</span></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="columns is-centered mt-4 mb-4">
                                        <div class="column is-four-fifths">
                                            <p style="text-align: left;">Change your <a
                                                    @click="navigateTo('RequestPersonDetails')"
                                                    style="text-decoration: underline;">Mobile Number</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="buttons columns is-centered">
                                        <div class="column is-3">
                                            <b-button type="is-link is-light" style="width: 100%;" @click="goBack"
                                                outlined>Back</b-button>
                                        </div>
                                        <div class="column is-5">
                                            <b-button type="is-link" style="width: 100%;"
                                                @click="navigateTo('RecipientInformation')">Continue</b-button>
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
    name: "ConfirmRequest",
    components: {
        LoginNavbar
    },
  methods: {
    navigateTo(pageName) {
    const nic = this.$route.params.nic;
    const name = this.$route.params.name;
    const countryCode = this.$route.params.countryCode;
    const mobileNumber = this.$route.params.mobileNumber;
    this.$router.push({
      name: pageName,
      params: { nic,
        name,
        countryCode,
        mobileNumber
    }
    });
  },
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
    position: relative;
}


.card {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
</style>