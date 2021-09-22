<template>
  <header>
    <div class="nav">
      <h2>Where in the world?</h2>
      <span>
        <img src=".././assets/moon-outline.svg" alt="" srcset="" /> Dark
        Mode</span
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
header {
  background-color: var(--dark-blue);
}
.nav {
  margin: 0 auto;
  padding: 30px 0;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav span {
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-around;
}
.nav span,h2 {
  font-family: "Nunito Sans", sans-serif;
}

h2 {
  color: #ffff;
}

span {
  color: #ffff;
}

img {
  width: 20px;
}

</style>