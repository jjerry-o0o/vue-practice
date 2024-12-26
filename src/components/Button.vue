<template>
  <button :class="buttonClass" @click="emitClick">{{props.text}}</button>

</template>
<script setup>
import {computed} from "vue";

const props = defineProps(['class', 'text']);
const emit = defineEmits(['click'])

const buttonClass = computed(() => {
  switch(props.class) {
    case 'amber':
      return 'block bg-amber-400 rounded-md p-2 hover:bg-amber-500 hover:font-bold';
    case 'blue':
      return 'bg-blue-200';
    default:
      return '';
  }
});

const emitClick = () => {
  emit('click');
}

</script>
