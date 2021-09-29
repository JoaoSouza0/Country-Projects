<template>
  <a href="/">
    <section>
      <div>
        <img :src=flag alt="flag pais" />
      </div>
      <div>
        <h1>{{commonName}}</h1>
        <p><b>Population:</b>{{population}}</p>
        <p><b>Region:</b>{{region}}</p>
        <p><b>Capital:</b>{{capital}}</p>
      </div>
    </section>
  </a>
</template>

<script>
export default {
  name: "itemCountry",
  props: ["commonName", "flag", "capital", "region", "population"],
};
</script>

<style>
</style>