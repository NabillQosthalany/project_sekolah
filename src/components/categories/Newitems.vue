<script setup>
import NewitemsCard from "./../NewitemsCard.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const newitems = ref([]);
const category = ref({});
const route = useRoute();

async function getNewitemsData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories?id=" +
        route.params.id +
        "&show_product=1"
    );
    newitems.value = response.data.data.products;
    category.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getNewitemsData();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ category.name }}
    </h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <NewitemsCard
        v-for="item in newitems"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :description="item.subtitle"
        :image="item.thumbnails"
      />
      <!-- <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <a href="#">
            <div class="m-4 overflow-hidden rounded-xl">
              <img
                alt="Placeholder"
                class="block w-full h-auto"
                src="@/assets/img/items-1.jpg"
              />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <a
                class="font-semibold text-black no-underline hover:underline"
                href="#"
              >
                Mobile UI Kit
              </a>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              Mobile UI Kit
            </span>
          </header>
        </div>
      </div>
      <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <a href="#">
            <div class="m-4 overflow-hidden rounded-xl">
              <img
                alt="Placeholder"
                class="block w-full h-auto"
                src="@/assets/img/items-2.jpg"
              />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <a
                class="font-semibold text-black no-underline hover:underline"
                href="#"
              >
                Online Doctor Consultation
              </a>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              Website UI Kit
            </span>
          </header>
        </div>
      </div>
      <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <a href="#">
            <div class="m-4 overflow-hidden rounded-xl">
              <img
                alt="Placeholder"
                class="block w-full h-auto"
                src="@/assets/img/items-3.jpg"
              />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <a
                class="font-semibold text-black no-underline hover:underline"
                href="#"
              >
                Banking Crypto
              </a>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              Mobile UI Kit
            </span>
          </header>
        </div>
      </div> -->
    </div>
  </div>
</template>
