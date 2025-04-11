<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">All Products</h2>

    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark text-center">
        <tr>
          <th style="width: 5%">#</th>
          <th style="width: 20%">Title</th>
          <th class="d-none d-md-table-cell" style="width: 30%">Description</th>
          <th style="width: 10%">Price</th>
          <th style="width: 15%">Image</th>
          <th style="width: 10%">Action</th>
          <th style="width: 10%">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td class="d-none d-md-table-cell">{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <img :src="product.images" alt="image" class="img-fluid rounded" style="max-height: 50px" />
          </td>
          <td>
            <router-link :to="`/products/${product.id}`" class="btn btn-warning btn-sm">View Details</router-link>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

export default {
  name: 'Products',
  setup() {
    const store = useStore();

    // Fetch products when the component is mounted
    onMounted(() => {
      store.dispatch('fetchProducts');
    });

    // Get products from the store
    const products = computed(() => store.getters.allProducts);

    const deleteProduct = (id) => {
      store.dispatch('deleteProduct', id);
    };

    return {
      products,
      deleteProduct,
    };
  },
};
</script>
