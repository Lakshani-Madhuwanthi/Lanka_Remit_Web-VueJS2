import JwtUtils from '@/helpers/jwtUtils'

const authMixin = {
    hasPermission: function (permission){
        try {
            let isOk = false

            const pair = JwtUtils.loadToken()
            const jwtObj = pair.jwtObj

            const permissions = JSON.parse(jwtObj.permissions)

            if(this.hasSuperPermission()){
                isOk = true
            }
            else {
                permissions.forEach(function (item, index){
                    if(item === permission){
                        isOk = true
                    }
                })
            }

            return isOk
        }
        catch {
            return false
        }
    },

    hasSuperPermission: function (){
        let isOk = false

        const pair = JwtUtils.loadToken()
        const jwtObj = pair.jwtObj

        const permissions = JSON.parse(jwtObj.permissions)

        permissions.forEach(function (item, index){
            if(item === 'super-permission'){
                isOk = true
            }
        })

        return isOk
    },

    authUser: function (){
        const pair = JwtUtils.loadToken()
        return pair.jwtObj
    }
}

export default authMixin
