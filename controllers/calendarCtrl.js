let calEvents = [];

async function getCalendarData() {
    try {
        const res = await fetch(`${ServerURL}/steps/user/${loggedUser.id}`); 
        steps = await res.json();
        calEvents = [];

        steps.forEach(step => {
            calEvents.push({
                title: 'Lépés: ' + step.stepcount,
                start: step.date,
            });
        });
    
    }
    catch (err) {
        Alerts("Hiba történt az adatok lekérdezésekor!", 'danger');
    }
}

function initCalendar() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'hu',
        headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        events: calEvents
    });
    calendar.render();
}