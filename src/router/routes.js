import Layout from "@/layout";
import ResetPassword from "@/views/User/ResetPassword";
import RequestMoney from "@/views/RequestMoney/RequestMoney"
import RequestPersonDetails from "@/views/RequestMoney/RequestPersonDetails"
import ConfirmRequest from "@/views/RequestMoney/ConfirmRequest"
import RecipientInformation from "@/views/RequestMoney/RecipientInformation"
import Congratulation from "@/views/RequestMoney/Congratulation"
import MoneyRequestStatus from "@/views/RequestMoney/MoneyRequestStatus"
import Login from "@/views/Login"
import PersonalInformation from "@/views/PersonalInformation/PersonalInformation"
import OtpVerification from "@/views/PersonalInformation/OtpVerification"

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home'),
        hidden: true
    },
    {
        path: '/resetPassword',
        name: 'ResetPassword',
        component: ResetPassword,
        hidden: true
    },
    {
        path: '/',
        hidden: true,
        redirect: 'Home',
    },
    {
        path: '/RequestMoney',
        name: 'RequestMoney',
        component: RequestMoney,
        hidden: true
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        hidden: true
    },
    {
        path: '/RequestPersonDetails',
        name: 'RequestPersonDetails',
        component: RequestPersonDetails,
        hidden: true
    },
    {
        path: '/ConfirmRequest',
        name: 'ConfirmRequest',
        component: ConfirmRequest,
        hidden: true
    },
    {
        path: '/RecipientInformation',
        name: 'RecipientInformation',
        component: RecipientInformation,
        hidden: true
    },
    {
        path: '/Congratulation',
        name: 'Congratulation',
        component: Congratulation,
        hidden: true
    },
    {
        path: '/MoneyRequestStatus',
        name: 'MoneyRequestStatus',
        component: MoneyRequestStatus,
        hidden: true
    },
    {
        path: '/PersonalInformation',
        name: 'PersonalInformation',
        component: PersonalInformation,
        hidden: true
    },
    {
        path: '/OTPverification',
        name: 'OtpVerification',
        component: OtpVerification,
        hidden: true
    }
]


export default routes
