<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div style="width: 100%">
        <img
            src="../../assets/lanka_remit_logo.png"
            alt="logo">
        <div class="columns" >
          <div class="column"></div>
          <div class="column is-two-fifths-mobile">
            <div class="card">
              <div class="card-content">
                <b-field label="Old Password"
                         label-position="on-border"
                         :type="oldPassword.class"
                         :message="oldPassword.message">
                  <b-input type="password" icon="form-textbox-password" maxlength="30" v-model="oldPassword.value" @input="oldPassword.blur()" password-reveal expanded></b-input>
                </b-field>

                <b-field label="New Password"
                         label-position="on-border"
                         :type="newPassword.class"
                         :message="newPassword.message">
                  <b-input type="password" icon="form-textbox-password" maxlength="30" v-model="newPassword.value" @input="newPassword.blur()" password-reveal expanded></b-input>
                </b-field>

                <b-field label="Confirm Password"
                         label-position="on-border"
                         :type="confirmPassword.class"
                         :message="confirmPassword.message">
                  <b-input type="password" icon="form-textbox-password" maxlength="30" v-model="confirmPassword.value" @input="confirmPassword.blur()" password-reveal expanded></b-input>
                </b-field>
                <div class="buttons">
                  <b-button type="is-primary" @click="resetPassword()" :loading="isLoading" expanded>Reset Password</b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {FieldValidator} from "@/helpers/validators/fieldValidator";
import NetworkManager from "@/network";

export default {
  name: "ResetPassword",
  data(){
    return {
      isLoading: false,

      oldPassword: new FieldValidator(),
      newPassword: new FieldValidator(),
      confirmPassword: new FieldValidator()
    }
  },

  methods: {
    validate: function (){
      const self = this
      let isValid = true

      if(!self.newPassword.validate()) isValid = false
      if(!self.oldPassword.validate()) isValid = false
      if(!self.confirmPassword.validate()) isValid = false

      if(isValid){
        if(self.newPassword.value !== self.confirmPassword.value){
          self.newPassword.invalidate("Passwords does not match")
          self.confirmPassword.invalidate("Passwords does not match")

          isValid = false
        }
      }

      return isValid
    },

    resetPassword: function (){
      const  self = this

      if(self.validate()){
        self.isLoading = true

        const data = {
          username: self.authUser().username,
          old_password: self.oldPassword.value,
          new_password: self.newPassword.value
        }

        NetworkManager.apiRequest('api/user/reset-password', data, function (e){
          if(e.statusCode === 200){
            const params = {
              type: 'is-success',
              message: 'Password reset successful'
            }
            self.$buefy.toast.open(params)

            setTimeout(function (){
              self.isLoading = false
              self.navigateTo('Dashboard')
            }, 1000)
          }
          else if (e.statusCode === 406){
            self.isLoading = false

            const params = {
              type: 'is-warning',
              message: 'Old password is invalid!'
            }
            self.$buefy.toast.open(params)
          }
          else {
            self.isLoading = false

            const params = {
              type: 'is-warning',
              message: 'Reset password failed!'
            }
            self.$buefy.toast.open(params)
          }
        })
      }
    },
  },

  mounted() {
    this.confirmPassword.regex = this.oldPassword.regex = /^[\w\W]+$/
    this.confirmPassword.errorMessage = "Please enter password confirmation"
    this.oldPassword.errorMessage = "Please enter the old-password"
    this.newPassword.regex = this.regex.passwordValidation
    this.newPassword.errorMessage = "Password should contain minimum 8 characters maximum 32, at least two uppercase letters, two lowercase letters, one number and one special character (@#$!%*?&()[]{}-_+=|\/\\:;\"<>?)"
  }
}
</script>


