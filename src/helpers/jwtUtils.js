import router from "@/router"
import {ToastProgrammatic as Toast} from 'buefy'
import NetworkManager from "@/network"

const jwtUtils = {

    status : {
        valid: 'valid',
        invalid: 'invalid',
        expired: 'expired',
        margin: 'margin'
    },

    loadToken: function (){
        try {
            let data = null

            const token = localStorage.getItem('token')
            const jwtObj = this.parseJwt(token)

            const status = this.validateJwt(jwtObj)

            switch (status){
                case this.status.valid:
                    data = {token, jwtObj}
                    break
                case this.status.margin:
                    data = {token, jwtObj}
                    setTimeout(()=>{
                        this.refreshJwt().then()
                    }, 5000)
                    break
                case this.status.expired:
                    console.error('Token expired!')
                    this.logoutTheUser()
                    break
                case this.status.invalid:
                    console.error('Token invalid!')
                    this.logoutTheUser()
                    break
            }

            return data
        }
        catch (e){
            console.error(e.message)
            this.logoutTheUser()

            return null
        }
    },

    saveToken: function (token){
        try {
            this.parseJwt(token)

            localStorage.setItem('token', token)
            localStorage.setItem('isTokenRefreshing', "false")
        }
        catch {
            console.error('Token save failed!')
        }
    },

    validateToken: function (){
        try {
            let isValid = true

            const token = localStorage.getItem('token')
            const jwtObj = this.parseJwt(token)

            const status = this.validateJwt(jwtObj)

            switch (status){
                case this.status.valid:
                    isValid = true
                    break
                case this.status.margin:
                    isValid = true
                    break
                case this.status.expired:
                    console.error('Token expired!')
                    this.logoutTheUser()
                    isValid = false
                    break
                case this.status.invalid:
                    console.error('Token invalid!')
                    this.logoutTheUser()
                    isValid = false
                    break
            }

            return isValid
        }
        catch (e){
            console.error(e.message)
            this.logoutTheUser()

            return false
        }
    },

    parseJwt: function (token){
        try{
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
        }
        catch (e){
            throw "Token parsing failed!"
        }
    },

    validateJwt: function (jwtObj){
        try {
            let status = this.status.valid

            const createdTime = jwtObj.iat
            const expireTime = jwtObj.exp
            const refreshMargin = jwtObj.rfh
            const currTime = Date.now() / 1000
            const timespan = currTime - createdTime

            if(currTime >= expireTime){
                status = this.status.expired
            }

            if(timespan >= refreshMargin / 1000) {
                status = this.status.margin
            }

            return status
        }
        catch {
            return this.status.invalid
        }

    },

    refreshJwt: async function (){
        const self = this

        const isRefreshing = localStorage.getItem('isTokenRefreshing')

        if(isRefreshing === "false"){
            console.log('Refreshing token...')
            localStorage.setItem('isTokenRefreshing', 'true')

            await NetworkManager.apiRequest('api/auth/token', {}, function (e) {
                if (e.statusCode === 200) {
                    let token = e.data.token
                    self.saveToken(token)
                }
            })
        }
    },

    logoutTheUser: function (manualLogOut = false){
        if(localStorage.getItem('token') != null){
            localStorage.removeItem('token')
        }

        if(router.currentRoute.name !== 'Login'){
            if(manualLogOut){
                router.replace({path: '/login'}).then(null)
            }
            else {
                const params = {
                    type: 'is-warning',
                    message: 'Session expired!. Please login again'
                }
                Toast.open(params)
                setTimeout(() => {
                    router.replace({path: '/login'}).then(null)
                }, 100)
            }
        }
    }
}

export default jwtUtils
