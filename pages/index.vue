<template>
  <div />
</template>

<script>

  export default {
    middleware ({ redirect }) {
      return redirect('/logs/events')
    }
  }
</script>
