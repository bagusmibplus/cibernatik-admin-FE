<template>

    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Data Responden</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="/responden">Responden</a>
                </li>
                <li class="breadcrumb-item active">Diagram</li>
            </ol>
        </nav>
    </div>
    <!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Identitas Responden</h5>
                        <!-- General Form Elements -->
                        <form >
                            <div class="row mb-3" >
                                <label for="inputText" class="col-sm-4 col-form-label" >Nama</label >
                                <div class="col-sm-8" >
                                    <input type="text" class="form-control" value="{{ data.nama_responden }}" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Kelas</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.kelas %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Username</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.username %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Ruang</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.ruang %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Gender</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.gender %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Marital</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.marital %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Lama Kerja</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.lama_kerjaan %>" readonly>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-4 col-form-label">Riwayat Obat</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" value="<%= data.riwayat_obat %>" readonly>
                                </div>
                            </div>
                        </form>
                        <!-- End General Form Elements -->
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-body">

                      <h5 class="card-title">Diagram Perbandingan Depresi dan Kecemasan dan Stres</h5>

                      <!-- Column Chart -->
                      <div id="columnChart1"></div>

                      <!-- <script>
                            var DATA = <%- JSON.stringify(data) %>
                            document.addEventListener("DOMContentLoaded", () => {
                                new ApexCharts(document.querySelector("#columnChart1"),{
                                    series: [
                                        {
                                            name: 'Depresi',
                                            data: [<%- data.pre.depresi_score %>, <%- data.post.depresi_score %>]
                                        }, {
                                            name: 'Kecemasan',
                                            data: [<%- data.pre.kecemasan_score %>, <%- data.post.kecemasan_score %>]
                                        }, {
                                            name: 'Stres',
                                            data: [<%- data.pre.stres_score %>, <%- data.post.stres_score %>]
                                        }
                                    ],
                                    chart: {
                                        type: 'bar',
                                        height: 350
                                    },
                                    plotOptions: {
                                        bar: {
                                            horizontal: false,
                                            columnWidth: '55%',
                                            endingShape: 'rounded'
                                        },
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    stroke: {
                                        show: true,
                                        width: 2,
                                        colors: ['transparent']
                                    },
                                    xaxis: {
                                        categories: ['Pretest', 'Postest'],
                                    },
                                    yaxis: {
                                        title: {
                                            text: 'Score'
                                        }
                                    },
                                    fill: {
                                        opacity: 1
                                    },
                                    tooltip: {
                                        y: {
                                            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                                                if(dataPointIndex==0) {
                                                    switch(seriesIndex) {
                                                        case 0 :
                                                            return `(${value}) ${DATA.pre.depresi_status}`
                                                            break;
                                                        case 1 :
                                                            return `(${value}) ${DATA.pre.kecemasan_status}`
                                                            break;
                                                        case 2 :
                                                            return `(${value}) ${DATA.pre.stres_status}`
                                                            break;
                                                        default :
                                                            return ''
                                                    }
                                                } else if (dataPointIndex==1) {
                                                    switch(seriesIndex) {
                                                        case 0 :
                                                            return `(${value}) ${DATA.post.depresi_status}`
                                                            break;
                                                        case 1 :
                                                            return `(${value}) ${DATA.post.kecemasan_status}`
                                                            break;
                                                        case 2 :
                                                            return `(${value}) ${DATA.post.stres_status}`
                                                            break;
                                                        default :
                                                            return ''
                                                    }
                                                } else {
                                                    return ''
                                                }
                                            }
                                        }
                                    }
                                }).render();
                            });
                      </script> -->
                      <!-- End Column Chart -->
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">

                      <h5 class="card-title">Diagram Perbandingan Pretest dan Postest</h5>

                      <!-- Column Chart -->
                      <div id="columnChart2"></div>

                      <!-- <script>
                            document.addEventListener("DOMContentLoaded", () => {
                                new ApexCharts(document.querySelector("#columnChart2"),{
                                    series: [
                                        {
                                            name: 'Pretest',
                                            data: [<%- data.pre.depresi_score %>, <%- data.pre.kecemasan_score %>, <%- data.pre.stres_score %>]
                                        }, {
                                            name: 'Postest',
                                            data: [<%- data.post.depresi_score %>, <%- data.post.kecemasan_score %>, <%- data.post.stres_score %>]
                                        }
                                    ],
                                    chart: {
                                        type: 'bar',
                                        height: 350
                                    },
                                    plotOptions: {
                                        bar: {
                                            horizontal: false,
                                            columnWidth: '55%',
                                            endingShape: 'rounded'
                                        },
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    stroke: {
                                        show: true,
                                        width: 2,
                                        colors: ['transparent']
                                    },
                                    xaxis: {
                                        categories: ['Depresi', 'Kecemasan','Stres'],
                                    },
                                    yaxis: {
                                        title: {
                                            text: 'Score'
                                        }
                                    },
                                    fill: {
                                        opacity: 1
                                    },
                                    tooltip: {
                                        y: {
                                            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                                                switch(dataPointIndex) {
                                                    case 0 :
                                                        if(seriesIndex==0) {
                                                            return `(${value}) ${DATA.pre.depresi_status}`
                                                        } else if(seriesIndex==1) {
                                                            return `(${value}) ${DATA.post.depresi_status}`
                                                        } else {
                                                            return ''
                                                        }
                                                        break;
                                                    case 1 :
                                                        if(seriesIndex==0) {
                                                            return `(${value}) ${DATA.pre.kecemasan_status}`
                                                        } else if(seriesIndex==1) {
                                                            return `(${value}) ${DATA.post.kecemasan_status}`
                                                        } else {
                                                            return ''
                                                        }
                                                        break;
                                                    case 2 :
                                                        if(seriesIndex==0) {
                                                            return `(${value}) ${DATA.pre.stres_status}`
                                                        } else if(seriesIndex==1) {
                                                            return `(${value}) ${DATA.post.stres_status}`
                                                        } else {
                                                            return ''
                                                        }
                                                        break;
                                                    default :
                                                        return ''
                                                }
                                            }
                                        }
                                    }
                                }).render();
                            });
                      </script> -->
                      <!-- End Column Chart -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
    </template>

    <script setup>
import { ref, reactive, computed, watch, onMounted  } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js";


const user = useUserStore()
const router = useRouter()

</script>