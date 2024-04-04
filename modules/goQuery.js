import { ref } from "vue-demi";

import GoQueryInput from "../models/goQueryInput";

export default function useGoQuery({ page = 1, perPage = 10, query = {} }) {
  const goQueryInput = ref(new GoQueryInput(page, perPage, query));

  function resetQuery() {
    goQueryInput.value = new GoQueryInput(page, perPage, q);
  }

  function updatePage(page) {
    goQueryInput.value.pagyInput.page = page;
  }

  function updatePerPage(perPage) {
    goQueryInput.value.pagyInput.perPage = perPage;
  }

  function updateQuery(query) {
    goQueryInput.query = query;
  }

  return {
    goQueryInput,

    updatePage,
    updatePerPage,
    updateQuery,
    resetQuery,
  };
}
