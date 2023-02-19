<script setup lang="ts">
import logo from "/src/images/logo.svg";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

function argMax(array: number[]) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

const backgroundColor = data.map((_) => "hsl(10, 79%, 65%)");
const hoverBackgroundColor = data.map((_) => "hsla(10, 79%, 65%, 0.8)");
backgroundColor[argMax(data)] = "hsl(186, 34%, 60%)";
hoverBackgroundColor[argMax(data)] = "hsla(186, 34%, 60%,0.8)";

const chartData: ChartData<"bar"> = {
  labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      data,
      backgroundColor,
      hoverBackgroundColor,
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
};
const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
      external: (context) => {
        const { chart, tooltip } = context;
        // Tooltip Element
        let tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.classList.add("tooltip");
          chart.canvas.parentNode?.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = tooltip;
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = "0";
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        // Set Text
        if (tooltipModel.body) {
          tooltipEl.innerText = "$" + tooltipModel.body[0].lines[0];
        }

        const position = context.chart.canvas.getBoundingClientRect();
        const width = tooltipEl.getBoundingClientRect().width / 2;

        // Display, position, and set styles for font
        tooltipEl.style.opacity = "1";
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left +
          window.pageXOffset +
          tooltipModel.caretX -
          width +
          "px";
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY - 40 + "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        font: {
          family: "DM Sans",
          size: 14,
        },
        color: "hsl(28, 10%, 53%)",
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
    },
  },
};
</script>
<template>
  <main class="flex justify-center items-center min-h-screen bg-cream">
    <div class="w-[375px] sm:w-[510px] flex flex-col gap-5">
      <div
        class="bg-soft-red w-full h-[116px] p-[30px] rounded-2xl flex justify-between items-center text-very-pale-orange"
      >
        <div class="flex flex-col gap-1">
          <p class="text-lg">My balance</p>
          <p class="text-3xl font-bold">$921.48</p>
        </div>
        <div>
          <img :src="logo" alt="logo" />
        </div>
      </div>
      <div class="bg-white w-full p-10 rounded-2xl">
        <p class="text-2xl sm:text-3xl text-dark-brown font-bold mb-10">
          Spending - Last 7 days
        </p>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        <div class="my-8 bg-cream w-full h-[2px]"></div>
        <div>
          <p class="text-medium-brown">Total this month</p>
          <div class="flex justify-between items-center">
            <p
              class="text-dark-brown text-[38px] sm:text-[45px] font-bold leading-none"
            >
              $478.33
            </p>
            <div>
              <p class="text-dark-brown font-bold text-right">+2.4%</p>
              <p class="text-medium-brown text-xs lg:text-base">
                from last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
:deep(.tooltip) {
  color: white;
  background-color: black;
  padding: 5px;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
}

@media screen and (min-width: 640px) {
  :deep(.tooltip) {
    font-size: 16px;
  }
}
</style>
