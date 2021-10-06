<template>
    <section class="item-country-container">
        <a href="/" class="item-country" v-for="(country, index) in pagination" :key="index">
            <div>
                <div>
                    <img :src="country.flags.png" alt="flag pais" />
                </div>
                <div class="information">
                    <h3>{{ country.commonName }}</h3>
                    <p><span>Population:</span> {{ country.population | numberPoint }}</p>
                    <p><span>Region: </span>{{ country.region }}</p>
                    <p><span>Capital: </span>{{ country.capital }}</p>
                </div>
            </div>
        </a>
    </section>
</template>

<script>
export default {
    name: 'itemCountry',
    props: ['commonName', 'flag', 'capital', 'region', 'population', 'pagination']
};
</script>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}
.item-country-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 720px;
}
.item-country {
    width: 250px;
    height: 270px;
    margin-top: 40px;
    padding: 0 0 50px 0;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
}
img {
    border-radius: 5px 5px 0px 0px;
    height: 150px;
}

.information {
    width: 200px;
    padding-left: 15px;
}
.information p {
    font-size: 14px;
}
.information span {
    font-weight: 600;
}
</style>
