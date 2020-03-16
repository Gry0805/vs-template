<template>
    <div>
      <div v-for="(com, index) in Object.keys(compsTemplate)" :key="index">
        <component
          ref="coms"
          v-bind:is="compsTemplate[com]"
          :property="getProperty(com)"
          ></component>
      </div>
    </div>
</template>

<script>
import { comps, config }  from './index.js';
export default {
    name: 'detail',
    data() {
        return {
        }
    },
    computed: {
      compsTemplate() {
        return comps
      },
    },
    components: {
        ...comps
    },
    methods: {
      getProperty(com) {
        return  config[`${com}Config`].property
      }
    }
}
</script>

<style lang="scss">

</style>