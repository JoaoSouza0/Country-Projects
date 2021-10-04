<template>
    <div class="home">
        <Inputs />
        <section>
            <div class="item-country" v-for="(country, index) in pagination" :key="index">
                <ItemCountry
                    :commonName="country.name"
                    :capital="country.capital"
                    :region="country.region"
                    :flag="country.flags.png"
                    :population="country.population"
                />
            </div>
        </section>
        <div class="pagination">
            <div class="pagination-itens">
                <button v-if="paginationStart > 0" @click="spliceArrayCountries(paginationStart - itensInPage)">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <p>{{ currentPage }}</p>
                <button
                    v-if="paginationStart + itensInPage < arrayCountry.length"
                    @click="spliceArrayCountries(paginationStart + itensInPage)"
                >
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <p>{{ lastPage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { api } from '../services.js';
import Inputs from '@/components/Inputs.vue';
import ItemCountry from '@/components/ItemCountry.vue';
export default {
    name: 'Home',
    components: {
        Inputs,
        ItemCountry
    },
    data() {
        return {
            arrayCountry: [],
            paginationStart: 0,
            pagination: [],
            itensInPage: 8
        };
    },
    computed: {
        url() {
            return this.$route.query;
        },
        lastPage() {
            return Math.round(this.arrayCountry.length / this.itensInPage);
        },
        currentPage() {
            return this.paginationStart / this.itensInPage;
        }
    },
    watch: {
        async url() {
            this.filterCountries(this.url);
        }
    },
    methods: {
        async filterCountries(query) {
            const { endpoint } = query;
            const countryFiltered = await api.getCountry(`${endpoint}`);
            !countryFiltered.status ? (this.arrayCountry = countryFiltered) : console.log('page not found');
        },
        async getAllCountry() {
            const all = await api.getCountry(`/all?fields=flags,name,capital,population,region`);
            this.arrayCountry = all;
            this.spliceArrayCountries(this.paginationStart);
        },
        spliceArrayCountries(start) {
            this.paginationStart = start;
            return (this.pagination = this.arrayCountry.slice(start, start + this.itensInPage));
        }
    },
    created() {
        this.getAllCountry();
    }
};
</script>

<style scoped>
.home {
    max-width: 1200px;
    padding: 40px 100px;
    margin: auto;
}
.item-country {
    width: 250px;
    height: 270px;
    margin-top: 40px;
    padding: 0 0 50px 0;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
}
section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.pagination {
    padding: 15px;
    display: flex;
    justify-content: center;
}
.pagination-itens {
    text-align: end;
    margin-left: 25px;
    width: 140px;
}

.pagination-itens p {
    display: inline;
    padding: 5px;
}

.pagination button {
    color: #fff;
    background: transparent;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
}
.pagination p {
    color: #fff;
}
</style>
