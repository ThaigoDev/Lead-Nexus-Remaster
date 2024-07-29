
//polar

const ctx4 = document.getElementById("polar");

new Chart(ctx4, {
  type: "polarArea",
  data: {
    labels: [
    
    ],
    datasets: [
      {
        label: "Leads Cadastradas",
        data: [
         
        ],
        backgroundColor: [
          "#68F263",
          "#96D9A5",
          "#9FD996",
          "#F2F2F2",
          "#6A8466",
          "#0D0D0D",
          "#3C2E25",
        ],
        borderColor: "black",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
