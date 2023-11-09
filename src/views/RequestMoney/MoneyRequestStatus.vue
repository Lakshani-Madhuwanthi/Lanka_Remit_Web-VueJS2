<template>
    <div>
        <LoginNavbar></LoginNavbar>
        <section class="hero is-fullheight" style="position: relative;">
            <b-steps :has-navigation="false" size="is-medium" type="is-link" style="margin: 2%;">
                <b-step-item label="Request Money" icon="account-key"></b-step-item>
                <b-step-item label="Request person's Details" icon="account"></b-step-item>
                <b-step-item label="Confirm Request" icon="account-plus"></b-step-item>
                <b-step-item label="Recipient Information" icon="account-plus"></b-step-item>
            </b-steps>
            <div class="card"
                style="position: absolute; top: 20%; bottom: 20%; width: 50%; background-color: rgba(255,255,255,0.6);">
                <div class="card-content">
                    <div class="content">
                        <p class="has-text-centered" style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 20px;">Request money</p>
                        <p class="has-text-centered" style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif;">Enter your personal details to send the <br>money request</p>
                        <b-field label="Please Enter Your NIC Number*" style="width: 80%; margin: 5% 10% 0 10%;">
                            <!-- <b-label>Please Enter Your NIC Number<span style="color: red;">*</span></b-label> -->
                            <b-input class="is-link" maxlength="10" type="text">
                            </b-input>
                        </b-field>
                        <div class="card" style="width: 50%;">
                            <div class="card-content">
                                <div class="content">
                                    <label class="checkbox">
                                        <input type="checkbox">
                                        I'm not a robot
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="card-footer " style="display: flex; justify-content: center;  align-items: center;">
                    <div class="buttons" style="display: flex;  justify-content: center; width: 200%;">
                        <b-button type="is-link is-light" style="width: 20%; margin-right: 5%;" outlined>Back</b-button>
                        <b-button type="is-link" style="width: 40%;" @click="navigateTo('RequestPersonDetails')">Continue</b-button>
                    </div>
                </footer>
            </div>
        </section>
    </div>
</template>

<script>
import LoginNavbar from '../../components/LoginNavbar.vue'

export default {
    name: "MoneyRequestStatus",
    components:{
        LoginNavbar
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