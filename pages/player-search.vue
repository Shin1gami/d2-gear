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
            </div>

            <div class="columns is-multiline">
                <div class="column is-4" v-for="user in items">
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control" v-if="user.name">
                            <div class="tags">
                                <span class="tag is-light">{{user.name}}</span>
                            </div>
                        </div>

                        <div class="control" v-if="user.pc">
                            <router-link class="tags has-addons" :to="{name: 'page-player', params: {platform: 4, name: user.pc}}">
                                <span class="tag is-dark">{{user.pc}}</span>
                                <span class="tag is-info"><i class="fab fa-sm fa-battle-net"></i></span>
                            </router-link>
                        </div>

                        <div class="control" v-if="user.xbox">
                            <router-link class="tags has-addons" :to="{name: 'page-player', params: {platform: 2, name: user.xbox}}">
                                <span class="tag is-dark">{{user.xbox}}</span>
                                <span class="tag is-info"><i class="fab fa-sm fa-xbox"></i></span>
                            </router-link>
                        </div>

                        <div class="control" v-if="user.psn">
                            <router-link class="tags has-addons" :to="{name: 'page-player', params: {platform: 1, name: user.psn}}">
                                <span class="tag is-dark">{{user.psn}}</span>
                                <span class="tag is-info"><i class="fab fa-sm fa-playstation"></i></span>
                            </router-link>
                        </div>
                    </div>
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
                query: null,
                items: [],
                count: 0
            };
        },
        methods: {
            search: function () {
                if (this.query === null || !this.query.length) {
                    return;
                }

                fetch(`/api/user/${this.query}`)
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                    this.count = data.length || 0;
                });
            }
        }
    };
</script>

<style scoped>
    .has-addons {
        justify-content: flex-end;
    }
</style>