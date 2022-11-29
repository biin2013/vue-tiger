<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  prefix: {
    type: String,
    default: 'icon'
  },
  classes: {
    type: [String, Array],
    default: ''
  },
  marginLeft: {
    type: String,
    default: '0.5rem'
  },
  marginRight: {
    type: String,
    default: '0.5rem'
  }
});

const resolveClasses = computed(() => {
  const classes = [props.prefix];
  classes.push(
    typeof props.classes === 'string' ? props.classes.split(' ') : props.classes
  );
  return classes;
});

const resolveHref = computed(() => {
  return '#' + props.prefix + '-' + props.name;
});

const resolveStyle = computed(() => {
  return {
    marginLeft: props.marginLeft,
    marginRight: props.marginRight
  };
});
</script>

<template>
  <svg :class="resolveClasses" aria-hidden="true" :style="resolveStyle">
    <use :xlink:href="resolveHref"></use>
  </svg>
</template>
