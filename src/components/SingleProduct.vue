<template>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
        <img :src="product.images" class="card-img-top" alt="Product Image" />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text"><b>Warranty Period:</b> {{ product.warrantyInformation }}</p>
          <p class="card-text"><b>Status:</b> {{ product.availabilityStatus }}</p>
          <p class="card-text"><b>Discount:</b> %{{ Math.round(product.discountPercentage) }}</p>
          <p class="card-text"><b>Weight:</b> {{ product.weight }} grams</p>
          <p class="card-text"><b>Delivery:</b> {{ product.shippingInformation }}</p>
          <p class="card-text"><b>Rating:</b> {{ '⭐'.repeat(product.rating) }}</p>
          <p class="text-success">${{ product.price }}</p>
          <router-link to="/products" class="btn btn-primary">View Products</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'SingleProduct',
  setup() {
    const store = useStore();
    const route = useRoute();

    const productId = route.params.id;

    onMounted(() => {
      store.dispatch('fetchProduct', productId);
    });

    // get product from Vuex store
    const product = computed(() => store.getters.singleProduct);

    return {
      product,
    };
  },
};
</script>
