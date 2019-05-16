<template>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <!-- title -->
                    <div class="column is-8">
                        <h1 class="title">Guardian search</h1>
                        <h2 class="subtitle">search a Destiny 2 player by entering his platform tag</h2>
                    </div>

                    <!-- search input -->
                    <div class="column is-4">
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" type="text" placeholder="User platform tag" v-model="query">
                            </div>
                            <div class="control">
                                <a class="button is-info" @click="search">
                                    <span>Search</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- search result -->
                    <div class="column is-12">

                    </div>
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        name: 'page-search',
        data: function () {
            return {
                query: null
            };
        },
        methods: {
            search: function () {
                if (this.query === null || !this.query.length) {
                    return;
                }

                this.$router.push({path: this.$route.path + '/' + this.query});
            }
        }
    };
</script>

<style scoped>
    .has-addons {
        justify-content: flex-end;
    }
</style>