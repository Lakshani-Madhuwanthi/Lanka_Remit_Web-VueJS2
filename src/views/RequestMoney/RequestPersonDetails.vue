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
                                                <label class="label" style="text-align: left;">Please Enter Your Name<span
                                                        style="color: red;">*</span></label>
                                                <div class="control">
                                                    <input class="input is-link" type="text" maxlength="10" v-model="name">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns is-centered">
                                        <div class="column is-four-fifths">
                                            <label class="label" style="text-align: left;">Please Enter Your Mobile
                                                Number<span style="color: red;">*</span></label>
                                            <div class="field is-grouped">
                                                <div class="control">
                                                    <div class="select is-link">
                                                        <select v-model="countryCode">
                                                            <option value="+94">+94</option>
                                                            <option v-for="country in countryCodeList" :value="country">+{{ country }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control is-expanded">
                                                    <input class="input is-link" type="text" maxlength="9"
                                                        v-model="mobileNumber">
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
                                                @click="navigateTo('ConfirmRequest')">Continue</b-button>
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
import NetworkManager from "@/network"
import LoginNavbar from '../../components/LoginNavbar.vue'

export default {
    name: "RequestPersonDetails",
    components: {
        LoginNavbar
    },
    data() {
        return {
            name: '',
            countryCodeList:[],
            countryCode: '+94',
            mobileNumber: '',
        }
    },
    methods: {
        navigateTo(pageName) {
            const nic = this.$route.params.nic;
            this.$router.push({
                name: pageName,
                params: {
                    nic,
                    name: this.name,
                    countryCode: this.countryCode,
                    mobileNumber: this.mobileNumber
                }
            });
        },
        goBack() {
            window.history.back();
        },
        loadData: function () {
            const self = this

            NetworkManager.apiRequest('api/MoneyRequest/country-code-list', {}, function (e) {
                if (e.statusCode === 200) {
                    self.countryCodeList = e.data.dialCodes
                    console.log(self.countryCodeList) // Check the fetched data
                }
            })
        },

    },
    mounted() {
        this.loadData()
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

