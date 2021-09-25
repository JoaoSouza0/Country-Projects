<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800&display=swap');

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
  display: block;
}
:root {
  --very-dark-blue: hsl(207, 26%, 17%);
  --dark-blue: hsl(209, 23%, 22%);
}

body {
  background-color: var(--very-dark-blue);
  font-family: "Nunito Sans", sans-serif;


}
</style>
