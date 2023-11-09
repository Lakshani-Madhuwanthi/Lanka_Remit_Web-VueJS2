import Auth from "@/mixins/modules/authMixins"
import router from "@/router"
import tokenTimer from "@/mixins/modules/tokenTimer"

const myMixin = {
    name: 'GlobalMixin',
    created: function () {

    },
    data(){
        return {
            regex: {
                passwordValidation: /((?=(.*\d))(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[@#$!%*?&()\[\]{}\-_+=|/\\:;"<>])))=?([\w@#$!%*?&()\[\]{}\-_+=|/\\:;"<>]{8,16})/,
                nameValidation: /^([A-Za-z\d]+\s?[A-Za-z\d]*){3,}$/,
                addressValidation: /^[A-Za-z\d@$!%*?&]{3,}[\w\W]+$/,
                contactValidation: /^\d{4,32}$/,
                //websiteValidation: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+(:\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z\d.-]+)((?:\/[+~%\/.\w-_]*)?\??#?)?)$/,
                websiteValidation: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+(:\d+)?)((?:\/[+~%\/.\w-_]*)?\??#?)?)$/,
                singleWordValidation: /^\w+$/,
                multiWordValidation: /^[\w\s]+$/,
                decimalValidation: /^\d+(.\d+)?$/,
                emptyOrWebsite: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+(:\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z\d.-]+)((?:\/[+~%\/.\w-_]*)?\??#?)?)$|^$/
            }
        }
    },
    props: {

    },
    methods: {
        showFullScreenLoader(){
            document.getElementById('fullScreenLoader').style.display = "block"
        },

        hideFullScreenLoader(){
            setTimeout(() => {
                document.getElementById('fullScreenLoader').style.display = "none"
            }, 200)
        },

        hasPermission: function (permission){
            return Auth.hasPermission(permission)
        },

        isSuperAdmin: function (){
            return Auth.hasSuperPermission()
        },

        authUser: function (){
            return Auth.authUser()
        },

        navigateTo: function (name, params = null){
            if(router.currentRoute.name !== name){
                if(params !== null){
                    router.push({name: name, params: params}).then(null)
                }
                else {
                    router.push({name: name}).then(null)
                }
            }
        },

        startTokenTimer: function (timeSpan){
            if(timeSpan) tokenTimer.start(timeSpan)
            else tokenTimer.start()
        },

        stopTokenTimer: function (){
            tokenTimer.stop()
        },

        vhToPixels: function(vh) {
            return Math.round(window.innerHeight / (100 / vh)) + 'px';
        },

        formatDate: function (date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        },

        formatDateTime: function (date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(),
                hour = '' + d.getHours(),
                minutes = '' + d.getMinutes(),
                seconds = '' + d.getSeconds();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            if (hour.length < 2)
                hour = '0' + hour;
            if (minutes.length < 2)
                minutes = '0' + minutes;
            if (seconds.length < 2)
                seconds = '0' + seconds;

            return [year, month, day].join('-') + 'T' + [hour, minutes, seconds].join(':');
        },

        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },

        generateRandomPassword: function (){
            const length = Math.floor(Math.random() * 8) + 8

            let result = ''
            const uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const lc = 'abcdefghijklmnopqrstuvwxyz'
            const num = '0123456789'
            const sp = '@#$!%*?&()[]{}-_+=|\/:;"<>?'

            const characters = uc + lc + num + sp
            const charactersLength = characters.length

            const x = Math.floor(Math.random() * (uc.length -1)) + 1
            const y = Math.floor(Math.random() * (length -1)) + 1
            const c1 = uc[x]

            const a = Math.floor(Math.random() * (lc.length -1)) + 1
            const b = Math.floor(Math.random() * (length -1)) + 1
            const c2 = lc[a]

            const p = Math.floor(Math.random() * (num.length -1)) + 1
            const q = Math.floor(Math.random() * (length -1)) + 1
            const c3 = num[p]

            const m = Math.floor(Math.random() * (sp.length -1)) + 1
            const n = Math.floor(Math.random() * (length -1)) + 1
            const c4 = sp[m]

            const d = Math.floor(Math.random() * (uc.length -1)) + 1
            const e = Math.floor(Math.random() * (length -1)) + 1
            const c5 = uc[d]

            const f = Math.floor(Math.random() * (lc.length -1)) + 1
            const g = Math.floor(Math.random() * (length -1)) + 1
            const c6 = lc[f]

            for (let i = 0; i < length; i++ ) {

                if(i === y) result += c1
                if(i === b) result += c2
                if(i === q) result += c3
                if(i === n) result += c4
                if(i === e) result += c5
                if(i === g) result += c6

                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength))
            }

            return result
        }
    }
}

export default myMixin
