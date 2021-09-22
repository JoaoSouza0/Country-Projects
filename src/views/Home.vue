<template>
  <div class="home">
    <div class="input">
      <div class="search-input">
<!--         <ion-icon size="medium" name="search-outline"></ion-icon>
 -->        <input
          class="search"
          name=""
          id=""
          placeholder="Search for a country..."
        />
      </div>
      <select
        class="filter"
        name="filter"
        id="filter"
        placeholder="Filter By Region"
      >
        <option value="teste">teste 1</option>
        <option value="teste">teste 1</option>
        <option value="teste">teste 1</option>
      </select>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home {
  max-width: 1200px;
  padding: 40px 0;
  margin: auto;
}

.input {
  display: flex;
  justify-content: space-between;
}

.search,
.filter,
ion-icon {
  background-color: var(--dark-blue);
  padding: 12px;
  border: none;
  box-shadow: black;
}

.search-input {
  display: flex;
}

.search {
  width: 300px;
  padding: 17px;
  border-radius: 0 5px 5px 0;
}

ion-icon {
  text-align: right;
 
  padding: 17px;
  border-radius: 5px 0 0;
  color: white;
}
</style>
