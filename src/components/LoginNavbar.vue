<template>
    <div>
        <b-navbar style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="../assets/lanka_remit_logo.png" alt="logo" style="margin-left: 2.5rem;">
                </b-navbar-item>
            </template>
            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button" style="color: #0C4383; border-color: #0C4383; width: 120px; "
                            @click="navigateTo('Login')" outlined>
                            Log in
                        </a>
                        <a class="button" style=" background-color: #0C4383; color: white; width: 120px;">
                            <strong>Sign up</strong>
                        </a>

                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "LogiNavbar"

}

</script>

</style>