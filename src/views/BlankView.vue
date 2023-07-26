<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Data Diagram</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <!-- <li class="breadcrumb-item">
                    <a href="/responden">Responden</a>
                </li> -->
          <li class="breadcrumb-item active">Diagram</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-5">
          <div class="card"></div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              Diagram Perbandingan Keberadaan Jentik Tiap Kelurahan
            </h5>
          </div>
        </div>
      </div>

      <div>
        <CanvasJSChart :options="options" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js";
import axios from "axios";
import { ip } from "../ip_config";
import router from "@/router";

let a = reactive([
  { label: "a", y: 20 },
  { label: "b", y: 15 },
]);

const chart = ref(null);
const options = reactive({
  animationEnabled: true,
  title: {
    text: "Diagram Perbandingan Keberadaan Jentik Tiap Kelurahan",
  },
  data: [
    {
      type: "column",
      dataPoints: a,
    },
  ],
});
</script>
