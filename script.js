const createChart = (ctx, label, borderColor) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(10).fill(''),
      datasets: [{
        label: label,
        data: Array(10).fill(0),
        borderColor: borderColor,
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      animation: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};

const cpuChart = createChart(document.getElementById('cpuChart'), 'CPU', '#ff6384');
const memChart = createChart(document.getElementById('memChart'), 'Memória', '#36a2eb');
const diskChart = createChart(document.getElementById('diskChart'), 'Disco', '#ffce56');

const updateData = (chart) => {
  const newValue = Math.floor(Math.random() * 100);
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(newValue);
  chart.update();
};

setInterval(() => {
  updateData(cpuChart);
  updateData(memChart);
  updateData(diskChart);
}, 2000);
