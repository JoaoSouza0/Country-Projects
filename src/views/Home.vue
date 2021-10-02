<template>
    <div class="home">
        <Inputs />
        <section>
            <div class="item-country" v-for="(country, index) in arrayCountry" :key="index">
                <ItemCountry
                    :commonName="country.name"
                    :capital="country.capital"
                    :region="country.region"
                    :flag="country.flags.png"
                    :population="country.population"
                />
            </div>
        </section>
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
            arrayCountry: [
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                },
                {
                    name: 'Afghanistan',
                    topLevelDomain: ['.af'],
                    alpha2Code: 'AF',
                    alpha3Code: 'AFG',
                    callingCodes: ['93'],
                    capital: 'Kabul',
                    altSpellings: ['AF', 'Afġānistān'],
                    subregion: 'Southern Asia',
                    region: 'Asia',
                    population: 38928341,
                    latlng: [33, 65],
                    demonym: 'Afghan',
                    area: 652230,
                    gini: 29.4,
                    timezones: ['UTC+04:30'],
                    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
                    nativeName: 'افغانستان',
                    numericCode: '004',
                    flags: {
                        svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                        png:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png'
                    },
                    currencies: [
                        {
                            code: 'AFN',
                            name: 'Afghan afghani',
                            symbol: '؋'
                        }
                    ],
                    languages: [
                        {
                            iso639_1: 'ps',
                            iso639_2: 'pus',
                            name: 'Pashto',
                            nativeName: 'پښتو'
                        },
                        {
                            iso639_1: 'uz',
                            iso639_2: 'uzb',
                            name: 'Uzbek',
                            nativeName: 'Oʻzbek'
                        },
                        {
                            iso639_1: 'tk',
                            iso639_2: 'tuk',
                            name: 'Turkmen',
                            nativeName: 'Türkmen'
                        }
                    ],
                    translations: {
                        br: 'Afeganistão',
                        pt: 'Afeganistão',
                        nl: 'Afghanistan',
                        hr: 'Afganistan',
                        fa: 'افغانستان',
                        de: 'Afghanistan',
                        es: 'Afganistán',
                        fr: 'Afghanistan',
                        ja: 'アフガニスタン',
                        it: 'Afghanistan',
                        hu: 'Afganisztán'
                    },
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
                    regionalBlocs: [
                        {
                            acronym: 'SAARC',
                            name: 'South Asian Association for Regional Cooperation'
                        }
                    ],
                    cioc: 'AFG',
                    independent: true
                }
            ]
        };
    },
    computed: {
        url() {
            return this.$route.query;
        },
        arrayPagination() {
            const array = this.arrayCountry;
            return array;
        }
    },
    watch: {
        async url() {
            //this.filterCountries(this.url);
        }
    },
    methods: {
        async filterCountries(query) {
            const { endpoint } = query;
            const countryFiltered = await api.getCountry(`${endpoint}`);
            console.log(countryFiltered);
            !countryFiltered.status ? (this.arrayCountry = countryFiltered) : console.log('page not found');
        },
        async getAllCountry() {
            const all = await api.getCountry(`/all?fields=flags,name,capital,population,region`);
            this.arrayCountry = all;
        }
    },
    created() {
        //this.getAllCountry();
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
</style>
