<template>
  <div>
    <v-container>
      <div class="row">
        <div class="row text-center">
          <div
            v-for="pro in products"
            :key="pro.id"
            class="col-md-3 col-sm-6 col-xs-12"
          >
            <v-hover>
              <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  class="white--text align-end"
                  :aspect-ratio="16 / 9"
                  height="200px"
                  :src="pro.src"
                />
                <v-card-text class="text--primary">
                  <div>
                    <p style="text-decoration: none">
                      {{ pro.name }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup></script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
