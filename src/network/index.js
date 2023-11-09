import JwtUtils from "@/helpers/jwtUtils"
import axios from "axios"
import { ToastProgrammatic as Toast } from 'buefy'
import {appSettings} from "@/appSettings"

class NetworkResponse{
    statusCode
    data

    constructor() {
        this.statusCode = 0
        this.data = null
    }
}

const NetworkManager = {
    apiRequest: function (endpoint, data, callBack, withToken = true){
        console.log(window.location.host)

        let URL = appSettings.$api_url + "/" + endpoint

        if(appSettings.canAccessInternally){
            if(window.location.host.includes(':' + appSettings.internalWebPort)){
                URL = appSettings.$api_url_internal + "/" + endpoint
            }
        }

        console.log(URL)

        let config = {
            headers: {},
            timeout: appSettings.timeoutDuration
        }

        if(withToken){
            config.headers = {
                Authorization: `Bearer ${JwtUtils.loadToken().token}`,
                'Content-Type': 'application/json'
            }
        }

        axios.post(
            URL,
            data,
            config
        )
            .then(function (e){
                callBack(e.data)
            })
            .catch(function (e){
                let resp = new NetworkResponse()
                console.log(e)

                if(e.response){
                    resp.statusCode = e.response.status

                    if(e.response.data){
                        resp = e.response.data
                    }

                    if(resp.statusCode === 401){
                        JwtUtils.logoutTheUser()
                    }
                }
                else {
                    resp.statusCode = 502
                }

                callBack(resp)
            })
    }
}

export default NetworkManager
