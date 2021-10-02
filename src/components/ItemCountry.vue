<template>
    <a href="/">
        <section>
            <div>
                <img :src="flag" alt="flag pais" />
            </div>
            <div class="information">
                <h3>{{ commonName }}</h3>
                <p><span>Population:</span> {{ population | numberPoint }}</p>
                <p><span>Region: </span>{{ region }}</p>
                <p><span>Capital: </span>{{ capital }}</p>
            </div>
        </section>
    </a>
</template>

<script>
export default {
    name: 'itemCountry',
    props: ['commonName', 'flag', 'capital', 'region', 'population']
};
</script>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
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
