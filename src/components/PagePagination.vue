<template>
    <div class="pagination">
        <div class="pagination-itens">
            <button v-if="paginationDownCondition" @click="paginationDown">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <p>{{ currentPage }}</p>
            <button v-if="paginationUpCondition" @click="paginationUp">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <p>{{ lastPage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PagePagination',
    props: ['Paginate', 'paginationStart', 'itensInPage', 'numberOfItens'],
    computed: {
        paginationUpCondition() {
            return this.paginationStart + this.itensInPage < this.numberOfItens;
        },
        paginationDownCondition() {
            return this.paginationStart > 0;
        },
        lastPage() {
            return Math.round(this.numberOfItens / this.itensInPage);
        },
        currentPage() {
            return this.paginationStart / this.itensInPage;
        }
    },
    methods: {
        paginationDown() {
            this.$emit('paginate', this.paginationStart - this.itensInPage);
        },
        paginationUp() {
            this.$emit('paginate', this.paginationStart + this.itensInPage);
        }
    }
};
</script>

<style>
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
