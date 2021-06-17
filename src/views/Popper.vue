<template>
  <popper
    trigger="clickToOpen"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,5px' } },
    }"
  >
    <div class="popper">Cheese is delicious</div>

    <button slot="reference">If you click on me you'll know something really important</button>
  </popper>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

export default {
  components: {
    popper: Popper,
  },
};
</script>
