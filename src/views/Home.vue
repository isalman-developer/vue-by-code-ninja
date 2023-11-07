<template>
    <div>
        <ol>
            <li>
                <router-link to="reaction-counter">Reation Counter Game (Props, Emit, Mounted, setInterval)</router-link>
            </li>
            <li>
                <router-link to="signup-form">
                    Signup Form (Form Submission, Form Prevent, v-model, Event Modifiers, Array filter & push)
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'jobs'}">
                    Jobs (Route (URL), Redirect url, 404 route, <b>(go, back and redirect router history)</b>)
                </router-link>
            </li>
        </ol>
    </div>
</template>

<style scoped>
li{
    padding: 5px 0px;
}
</style>