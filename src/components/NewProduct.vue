<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Add New Product</h2>
    <form class="row g-3" @submit.prevent="submitProduct">
      <div class="col-12">
        <label for="title" class="form-label">Title</label>
        <input v-model="title" type="text" class="form-control" id="title" placeholder="Enter product title" required />
      </div>

      <div class="col-12">
        <label for="description" class="form-label">Description</label>
        <textarea
          style="resize: none"
          v-model="description"
          class="form-control"
          id="description"
          rows="4"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <div class="col-12 col-md-6">
        <label for="price" class="form-label">Price</label>
        <input
          v-model="price"
          type="number"
          class="form-control"
          id="price"
          placeholder="Enter product price"
          step="0.01"
          required
        />
      </div>

      <div class="col-12 col-md-6">
        <label for="weight" class="form-label">Weight (grams)</label>
        <input
          v-model="weight"
          type="number"
          class="form-control"
          id="weight"
          placeholder="Enter product weight"
          required
        />
      </div>

      <div class="col-12 col-md-6">
        <label for="warrantyPeriod" class="form-label">Warranty Period</label>
        <input
          v-model="warrantyPeriod"
          type="text"
          class="form-control"
          id="warrantyPeriod"
          placeholder="Enter warranty period"
          required
        />
      </div>

      <div class="col-12">
        <button class="btn btn-primary w-100" type="submit">Add Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'NewProduct',
  setup() {
    const store = useStore();

    const title = ref('');
    const description = ref('');
    const price = ref('');
    const weight = ref('');
    const warrantyPeriod = ref('');

    const submitProduct = () => {
      const productData = {
        title: title.value,
        description: description.value,
        price: parseFloat(price.value),
        weight: parseFloat(weight.value),
        warrantyInformation: warrantyPeriod.value,
        images: 'https://via.placeholder.com/150',
        availabilityStatus: 'In Stock',
        discountPercentage: 10,
        shippingInformation: 'Free shipping within 3-5 days',
        rating: 4,
      };

      // dispatch action to add product
      store.dispatch('addProduct', productData);

      title.value = '';
      description.value = '';
      price.value = '';
      weight.value = '';
      warrantyPeriod.value = '';
    };

    return {
      title,
      description,
      price,
      weight,
      warrantyPeriod,
      submitProduct,
    };
  },
};
</script>
