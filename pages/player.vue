<template>
    <section class="section">
        <div class="container is-fluid">
            <div class="inventory-row is-emblem">
                <div class="columns is-multiline">
                    <div class="column is-3">
                        <div class="emblem" style="background-image: url(https://www.bungie.net/common/destiny2_content/icons/72e35d429f3e159af545b52f4677a910.jpg)">
                            <span class="emblem-class">Warlock</span>
                            <span class="emblem-race">Exo Male</span>

                            <span class="emblem-light">700</span>
                            <span class="emblem-level">50</span>
                        </div>
                    </div>
                </div>
            </div>




            <div class="columns is-multiline">
                <div class="column is-3">
                    <div class="char-engrams"></div>

                    <div class="char-post"></div>

                    <div class="char-inventory-slot is-slot-kinetic"></div>

                    <div class="char-inventory-slot is-slot-energy"></div>

                    <div class="char-inventory-slot is-slot-power"></div>

                    <div class="char-inventory-slot is-slot-armor is-slot-helmet"></div>

                    <div class="char-inventory-slot is-slot-armor is-slot-gauntlet"></div>

                    <div class="char-inventory-slot is-slot-armor is-slot-chest"></div>

                    <div class="char-inventory-slot is-slot-armor is-slot-class"></div>
                </div>

                <div class="column is-3">
                    copy char here!
                </div>

                <div class="column is-3">
                    copy char here!
                </div>

                <div class="column is-3">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .inventory-row {
        &.is-emblem {

        }
    }

    .emblem {
        background-position: left center;
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid #000;
        height: 96px;
        position: relative;
        width: auto;

        .emblem-light {
            color: #09d7d0;
            font-weight: bold;
            font-size: 50px;
            line-height: 1;
            position: absolute;
            right: 20px;
            top: 10px;
        }
    }
</style>