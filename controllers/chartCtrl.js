let chart = null;
let chartLabels = ['2025.09.10', '2025.09.11', '2025.09.12', '2025.09.13'];
let chartData = [1000, 2000, 1500, 3000];

async function getChartData() {
    //lekérdezi a backendtől a user lépésszámait
    //majd feltölti a labels[] és data[] tömböket
}


function initChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: "test",
                data: chartData,
            }
        ]},
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Lépésszámok'
                }
            }
        }
    }
    );
}