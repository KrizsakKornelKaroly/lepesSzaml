let chart = null;
let chartLabels = [];
let chartData = [];

async function getChartData() {
    chartData = [];
    chartLabels = [];

    try {
        const res = await fetch(`${ServerURL}/steps/user/${loggedUser.id}`); 
        let data = await res.json();
        data = data.sort((a, b) => { return a['date'].localeCompare(b['date']) });
        for (let i = 0; i < data.length; i++) {
            chartLabels.push(data[i].date);
            chartData.push(data[i].stepcount);
        }
    }
    catch (err) {
        Alerts("Hiba történt az adatok lekérdezésekor!", 'danger');
    }
}


function initChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: "Lépésszám",
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