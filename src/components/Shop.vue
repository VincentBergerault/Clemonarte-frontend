<template>
  <div>
    <v-container>
      <div class="row">
        <div class="row text-center">
          <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
            <v-hover>
              <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img class="white--text align-end" :aspect-ratio="16 / 9" height="200px" :src="pro.src">
                </v-img>
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

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  name: 'Shop',
  data: () => ({
    range: [0, 10000],
    select: 'Popularity',
    options: [
      'Default',
      'Popularity',
      'Relevance',
      'Price: Low to High',
      'Price: High to Low',
    ],
    page: 1,
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home',
      },
      {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing',
      },
      {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts',
      },
    ],
    min: 0,
    max: 10000,
    products: [
      {
        id: 1,
        name: 'Flowers of the year',
        price: '18.00',
        src: '../static/images/shop/dessin1.png'
      },
      {
        id: 2,
        name: 'Sakura',
        price: '40.00',
        src: '../static/images/shop/dessin2.png'
      },
      {
        id: 3,
        name: 'THis one is copyrighted ',
        price: '25.00',
        src: '../static/images/shop/dessin3.png'
      },
      {
        id: 4,
        name: 'HAOUUUUUUUU',
        price: '30.00',
        src: '../static/images/shop/dessin4.png'
      },
      {
        id: 5,
        name: 'Flowzers of the month',
        price: '50.00',
        src: '../static/images/shop/dessin5.png'
      },
      {
        id: 6,
        name: 'Flowers of the week',
        price: '34.00',
        src: '../static/images/shop/dessin6.png'
      }, {
        id: 7,
        name: 'BLUE',
        price: '18.00',
        src: '../static/images/shop/dessin7.png'
      },
      {
        id: 8,
        name: 'Swag de fou',
        price: '40.00',
        src: '../static/images/shop/dessin8.png'
      },
      {
        id: 9,
        name: 'City landscape',
        price: '25.00',
        src: '../static/images/shop/dessin9.png'
      },
      {
        id: 10,
        name: 'natural landscape',
        price: '30.00',
        src: '../static/images/shop/dessin10.png'
      },
      {
        id: 11,
        name: 'Rosasse swag 2 ',
        price: '50.00',
        src: '../static/images/shop/dessin11.png'
      },
      {
        id: 12,
        name: 'World Map Unified',
        price: '34.00',
        src: '../static/images/shop/dessin12.png'
      }, {
        id: 13,
        name: 'Psychedelic deer',
        price: '18.00',
        src: '../static/images/shop/dessin13.png'
      },
      {
        id: 14,
        name: '5D pink',
        price: '40.00',
        src: '../static/images/shop/dessin14.png'
      },
      {
        id: 15,
        name: 'Budha',
        price: '25.00',
        src: '../static/images/shop/dessin15.png'
      },
      {
        id: 16,
        name: 'Cloud of sorrows',
        price: '30.00',
        src: '../static/images/shop/dessin16.png'
      },
      {
        id: 17,
        name: 'Rosas Swag',
        price: '50.00',
        src: '../static/images/shop/dessin17.png'
      },
      {
        id: 18,
        name: 'Elephant',
        price: '34.00',
        src: '../static/images/shop/dessin18.png'
      }
    ]
  }),
}
</script>
