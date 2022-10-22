import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
import { default as data } from "../../data.json";

const useJobStore = defineStore("jobs", () => {
  const jobs = ref(data);
  const filters = reactive(new Set<string>());

  const filteredJobs = computed(() => {
    return jobs.value.filter((job) =>
      Array.from(filters).every(
        (filter) =>
          job.role === filter ||
          job.level === filter ||
          job.languages.includes(filter) ||
          job.tools.includes(filter)
      )
    );
  });

  const addFilter = (filter: string) => {
    filters.add(filter);
  };

  const removeFilter = (filter: string) => {
    filters.delete(filter);
  };

  const resetFilter = () => {
    filters.clear();
  };

  return {
    jobs,
    filters,
    filteredJobs,
    addFilter,
    removeFilter,
    resetFilter,
  };
});

export default useJobStore;
