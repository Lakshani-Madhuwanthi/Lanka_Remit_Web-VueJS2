<template>
    <div>
        <LoginNavbar></LoginNavbar>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-8-tablet is-6-desktop is-6-widescreen">
                            <div class="card" style=" background-color: rgba(255,255,255,0.6);">
                                <div class="card-content" style="text-align: center;">
                                    <div class="content">
                                        <img src="../../assets/Group.png" alt="">
                                        <p
                                            style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 20px;">
                                            Congratulations</p>
                                        <p
                                            style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif; color: #0C4383;">
                                            Your
                                            Money Request has been sent succesfully. <br> Thank you for using Lanka Remit
                                        </p>
                                    </div>
                                    <p style="margin-bottom: 20px;">Check <a @click="navigateTo('MoneyRequestStatus')"
                                            style="text-decoration: underline;">Your Money Request Status</a>
                                    </p>
                                    <div class="buttons columns is-centered">
                                        <div class="column is-6">
                                            <b-button type="is-link" style="width: 100%;"
                                                @click="navigateTo('Home')">Done</b-button>
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
    name: "Congratulation",
    components:{
    LoginNavbar
}
}

</script>

<style>
.image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero {
    background: #0C4383 url(./../../assets/BG_Image.png) no-repeat fixed center;
    /* background-image: url(./../../assets/BG_Image.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed; */
}

</style>