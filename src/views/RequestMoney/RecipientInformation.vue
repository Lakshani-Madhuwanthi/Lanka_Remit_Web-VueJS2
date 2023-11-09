<template>
    <div style="height: 1100px; overflow-y: auto;">
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
                            <div class="card" style=" background-color: rgba(255,255,255,0.6);height: 1000px; overflow-y: auto;">
                                <div class="card-content" style="text-align: center;">
                                    <div class="content">
                                        <p
                                            style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 0;">
                                            Request Details</p>
                                        <p style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif;">
                                            We need a way to connect with your sender!
                                        </p>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter Sender's Name<span
                                                        style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10" v-model="senderName">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter Sender's NIC<span
                                                        style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10" v-model="senderNIC">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter Sender's Mobile No<span
                                                        style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10" v-model="senderMobileNumber">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter amount that is required(LKR)<span
                                                        style="color: red;">*</span></label>

                                                <input class="input is-link" type="text" maxlength="9">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Select the Bank of Reciever<span
                                                        style="color: red;">*</span></label>

                                                <input class="input is-link" type="text" maxlength="9">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <div class="field">
                                                <label class="label" style="text-align: left;">Please Enter Account Number of Reciever<span
                                                        style="color: red;">*</span></label>

                                                <input class="input is-link" type="text" maxlength="9">

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
                                                @click="navigateTo('Congratulation')">Submit</b-button>
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
  name: "RecipientInformation",
  components: {
    LoginNavbar
  },
  data() {
  return {
    senderNIC: this.$route.params.nic || '',
    senderName: this.$route.params.name || '',
    senderCountryCode: this.$route.params.countryCode || '',
    senderMobileNumber: this.$route.params.mobileNumber || '',
  }
},

  methods: {
    goBack() {
      window.history.back();
    },
    formatMobileNumber() {
            this.senderMobileNumber = `${this.senderCountryCode}${this.senderMobileNumber}`;
        }
  },
  watch: {
        senderCountryCode: {
            handler() {
                this.formatMobileNumber();
            },
            immediate: true
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
</style>