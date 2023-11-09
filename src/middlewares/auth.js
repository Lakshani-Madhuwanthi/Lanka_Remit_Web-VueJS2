import JwtUtils from "@/helpers/jwtUtils"

export default function auth({ next, router }) {
    JwtUtils.loadToken() // this handles JWT validation part and
                         // redirects to login if not validated

    return next()
}
