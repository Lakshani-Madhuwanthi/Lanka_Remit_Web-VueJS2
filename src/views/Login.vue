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
                    <p style="font-weight: 800; font-size: 40px; font-family:'Inter', sans-serif; margin-bottom: 0;">
                      Log in</p>
                    <p style="font-weight: 800; font-size: 20px; font-family:'Inter', sans-serif;">
                      Enter Your Personal Details Log in to Lanka Remit
                    </p>
                  </div>
                  <div class="columns is-centered">
                    <div class="column is-four-fifths">
                      <div class="field">
                        <label class="label" style="text-align: left;">Please Enter Your NIC/Passport Number<span
                            style="color: red;">*</span></label>

                        <input class="input is-link" type="text" maxlength="9">

                      </div>
                    </div>
                  </div>
                  <div class="columns is-centered mb-0">
                    <div class="column is-four-fifths">
                      <div class="field">
                        <label class="label" style="text-align: left;">Please Enter Your PIN<span
                            style="color: red;">*</span></label>
                        <input class="input is-link" type="text" maxlength="9">
                      </div>
                    </div>
                  </div>
                  <div class="columns is-centered">
                    <div class="column is-four-fifths pt-0 pb-0">
                      <p style="text-align: right;">Forget PIN? <span
                          style="color: blue; text-decoration: underline; cursor: pointer;" @click="navigateTo('PersonalInformation')">Reset Pin</span></p>
                      <p style="text-align: left;">Don't have an Acoount? <span
                          style="color: blue; text-decoration: underline;">Sign Up</span></p>
                    </div>
                  </div>
                  <div class="card mb-4" style="width: 50%;">
                    <div class="card-content p-4">
                      <div class="content columns is-vcentered">
                        <div class="column is-three-quarters is-narrow">
                          <label class="checkbox">
                            <input type="checkbox" style="transform: scale(1.2);">
                            I'm not a robot
                          </label>
                        </div>
                        <div class="column">
                          <img src="../assets/Frame.png" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="buttons columns is-centered">
                    <div class="column is-3">
                      <b-button type="is-link is-light" style="width: 100%;" @click="navigateTo('RequestPersonDetails')"
                        outlined>Back</b-button>
                    </div>
                    <div class="column is-5">
                      <b-button type="is-link" style="width: 100%;"
                        @click="navigateTo('RequestPersonDetails')">Log In</b-button>
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
import LoginNavbar from '../components/LoginNavbar.vue'
export default {
  name: "Login",
  components: {
    LoginNavbar
  }
}

</script>

<style>
.hero {
  background: white url(../assets/BG_Image.png) no-repeat fixed center;
  background-size: cover;
  /* background-image: url(./../../assets/BG_Image.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed; */
}
</style>