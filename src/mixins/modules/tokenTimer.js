import jwtUtils from "@/helpers/jwtUtils";

const module = {
    timer: null,

    start: function (timeSpan = 5000){
        stop()

        if(this.timer === null) this.timer = setInterval(this.checkToken, timeSpan)
    },

    checkToken: function (timeSpan = 5000){
        // console.log('Check Token : ' + ( Date.now() / 1000 ).toFixed(0))
        jwtUtils.validateToken()
        if(this.timer !== null){
            setInterval(this.checkToken, timeSpan)
        }
    },

    stop: function (){
        if(this.timer !== null) {
            clearTimeout(this.timer)
            this.timer = null
        }
    }
}

export default module
