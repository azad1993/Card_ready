<template>
    <div>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "./Header";

    export default {
        name: "MainLayout",
        components: {Header}
    }
</script>

<style scoped>

</style>