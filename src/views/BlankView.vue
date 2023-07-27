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
        <CanvasJSChart style="height: 500px;" :options="options"/>
      </div>
      
      <!-- <div style="width: 100%; height: 100%;">
        
  
      </div> -->
    </section>
    <!-- <pre>{{ options }}</pre> -->
  </main>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDiagram } from "../stores/data.js";
import axios from "axios";
import { ip } from "../ip_config";
import router from "@/router";

const data = useDiagram()
const route = useRoute();
const dataDiagram = reactive([]);
const getGrafik = async () => {
  try {
    let res = await axios.get(ip + "/grafik", {
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    });
    console.log(res.data.data, "res");
    if (res.data.error_code === 0) {
      dataDiagram.push(res.data.data);
      console.log(dataDiagram, "data diagram");
    } else {
      alert(res.data.error_code);
    }
  } catch (error) {
    console.log(error);
  }
};


const chart = ref(null);
const options = reactive({
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: ""
        },
        axisX: {
          interval : 1,
          labelTextAlign: "right"
        },
        axisY: {
          title: "",
          suffix: ""
        },
        data: [{
          type: "bar",
          yValueFormatString: "# jentik",
          dataPoints: data.getDataDiagram
        }]
      })
 


// const chart = ref(null);
// const options = reactive({
//   animationEnabled: true,
//   exportEnabled: true,
//   title: {
//     text: "",
//   },
//   data: [
//     {
//       type: "column",
//       dataPoints: data.getDataDiagram,
//     },
//   ],
// });

onBeforeMount(async () => {
  await getGrafik();
  //  console.log(options);
  //  console.log(options.data)
  //  console.log(options.data[0]);
  //  console.log(options.data[0].dataPoints);

  //  options.data[0].dataPoints = dataDiagram.value
  // console.log(options.data[0].dataPoints);
  console.log(data.getDataDiagram);
});
</script>
