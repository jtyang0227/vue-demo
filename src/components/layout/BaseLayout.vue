<template>
  <div class="container">
    <header>
      <h1>header</h1>
      <slot name="header"></slot>
    </header>
    <main>
      <h1>main</h1>
      <slot name="main"></slot>
    </main>
    <footer>
      <h1>footer</h1>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {}
</script>