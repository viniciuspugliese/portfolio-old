<template>
    <div>
        <cNav></cNav>
        <router-view/>
        <cFooter></cFooter>
    </div>
</template>

<script>
import cNav from './components/pages/includes/nav'
import cFooter from './components/pages/includes/footer'

export default {
    name: 'app',

    components: {
        cNav,
        cFooter
    }
}
</script>