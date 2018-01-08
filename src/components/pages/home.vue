<template>
    <div>
        <cHeader></cHeader>
        <portfolio></portfolio>
        <timeline></timeline>
        <contact></contact>
    </div>
</template>

<script>
import cHeader from '../header'
import portfolio from '../portfolio'
import timeline from '../timeline'
import contact from '../contact'

export default {
    name: 'home',
    components: {
    	cHeader,
    	portfolio,
        timeline,
    	contact
    }
}
</script>