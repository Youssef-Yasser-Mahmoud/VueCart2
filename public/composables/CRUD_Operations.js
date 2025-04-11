import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      products: [],
      product: {},
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    removeProduct(state, id) {
      state.products = state.products.filter((product) => product.id !== id);
    },
    addNewProduct(state, product) {
      state.products.push(product); // Add the new product to the products array
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:3000/products');
      commit('setProducts', response.data);
    },
    async fetchProduct({ commit }, id) {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      commit('setProduct', response.data);
    },
    async deleteProduct({ commit }, id) {
      await axios.delete(`http://localhost:3000/products/${id}`);
      commit('removeProduct', id);
    },
    async addProduct({ commit }, productData) {
      const response = await axios.post('http://localhost:3000/products', productData);

      // once the product is added, commit it to the state
      commit('addNewProduct', response.data);
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    singleProduct(state) {
      return state.product;
    },
  },
});

export default store;
