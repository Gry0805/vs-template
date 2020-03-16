<template>
  <div class="hdc-test">
    <div :style="property && property.style">{{ property.data.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'hdc-test',
  props: ['property']
}
</script>

<style lang="scss">
.hdc-test {
  width: 100%;
  color: #999;
  font-size: 16px;
  text-align: center;
}
</style>
