<template>
    <div>
        <cHeader></cHeader>
        <portfolio></portfolio>
        <timeline></timeline>
    </div>
</template>

<script>
import cHeader from '../header'
import portfolio from '../portfolio'
import timeline from '../timeline'

export default {
    name: 'home',
    components: {
    	cHeader,
    	portfolio,
    	timeline
    }
}
</script>