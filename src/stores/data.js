import axios from "axios";
import { defineStore } from "pinia";
import { ip } from "../ip_config";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

export const useDiagram = defineStore("diagram", () => {
  // State
  const dataDiagram = ref(null);

  // Getters
  const getDataDiagram = computed(() => dataDiagram.value);

  // Actions
  function setDataDiagram(payload) {
    dataDiagram.value = payload;
  }

  // RESET
  function $reset() {
    dataDiagram.value = null;
  }

  return {
    dataDiagram,
    getDataDiagram,
    setDataDiagram,
    $reset,
  };
});
