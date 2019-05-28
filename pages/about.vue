<template>
    <div>
        <h2>{{$t('hello')}}</h2>
        <nuxt-link to="/">Home</nuxt-link>
        <div>
            <nuxt-link :to="switchLocalePath('it')">Italian</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
