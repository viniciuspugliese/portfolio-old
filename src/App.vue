<template>
    <div>
        <cHeader></cHeader>

        <div class="content">
            <router-view/>
        </div>

        <cFooter></cFooter>
    </div>
</template>

<script>
import cHeader from './components/includes/header'
import cFooter from './components/includes/footer'

export default {
    name: 'app',

    components: {
        cHeader,
        cFooter
    }
}
</script>