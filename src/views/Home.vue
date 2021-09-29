<template>
  <div class="home">
    <Inputs />
    <div v-for="(country, index) in arrayCountry" :key="index">
      <ItemCountry
        :commonName="country.name"
        :capital="country.capital"
        :region="country.region"
        :flag="country.flag"
        :population="country.population"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { api } from "../services.js";
import Inputs from "@/components/Inputs.vue";
import ItemCountry from "@/components/ItemCountry.vue";
export default {
  name: "Home",
  components: {
    Inputs,
    ItemCountry,
  },
  data() {
    return {
      arrayCountry: [
        {
          name: "Anguilla",
          topLevelDomain: [".ai"],
          alpha2Code: "AI",
          alpha3Code: "AIA",
          callingCodes: ["1"],
          capital: "The Valley",
          altSpellings: ["AI"],
          subregion: "Caribbean",
          region: "Americas",
          population: 13452,
          latlng: [18.25, -63.16666666],
          demonym: "Anguillian",
          area: 91,
          timezones: ["UTC-04:00"],
          nativeName: "Anguilla",
          numericCode: "660",
          flags: {
            svg: "https://restcountries.com/data/aia.svg",
            png: "https://restcountries.com/data/aia.png",
          },
          currencies: [
            {
              code: "XCD",
              name: "East Caribbean dollar",
              symbol: "$",
            },
          ],
          languages: [
            {
              iso639_1: "en",
              iso639_2: "eng",
              name: "English",
              nativeName: "English",
            },
          ],
          translations: {
            br: "Anguila",
            pt: "Anguila",
            nl: "Anguilla",
            hr: "Angvila",
            fa: "آنگویلا",
            de: "Anguilla",
            es: "Anguilla",
            fr: "Anguilla",
            ja: "アンギラ",
            it: "Anguilla",
            hu: "Anguilla",
          },
          flag: "https://restcountries.com/data/aia.svg",
          independent: false,
        },
      ],
    };
  },
  computed: {
    url() {
      return this.$route.query;
    },
  },
  watch: {
    async url() {
      this.getCountryByContinent(this.url);
    },
  },
  methods: {
    async getCountryByContinent(query) {
      const { continent } = query;
      const countryFiltered = await api.getCountry(`/continent/${continent}`);
      console.log(countryFiltered);
    },
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  padding: 40px 0;
  margin: auto;
}
</style>
