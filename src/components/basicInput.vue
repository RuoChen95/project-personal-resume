<template>
  <div>
    <input
        :placeholder="placeholderKey"
        :value="value"
        :class="type"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('inputBlur')">
  </div>
</template>
<script>
  export default {
    props: ['placeholderKey', 'value', 'type']
  }
</script>
<style>
  input {
    background: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: none;
    color: black;
    font-size: 12px;
    line-height: 26px;
    height: 26px;
    margin-left: -5px;
    padding: 0 5px;
    position: relative;
    top: -1px;
    width: 730px;

    transition: all 0.3s ease;
    outline: none;
  }
  input:hover {
    background: hsla(0,0%,100%,.2);
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.5);
  }
  input:focus {
    background: #fff;
    box-shadow: inset 0 2px 4px rgba(35,54,86,.3);
    color: #6d757a;
  }
  .h1 {
    font-size: 26px;
    font-weight: bold;
    line-height: 30px;
    color: #000;
  }
  .textarea {
  }
</style>