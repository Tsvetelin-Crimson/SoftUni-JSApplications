function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
        convert(+daysInput.value * 86400);
    });
    document.getElementById('hoursBtn').addEventListener('click', () => {
        convert(+hoursInput.value * 3600)
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        convert(+minutesInput.value * 60)
    });
    document.getElementById('secondsBtn').addEventListener('click', () => {
        convert(+secondsInput.value)
    });

    function convert(sec = 0) {
        let days = sec / (60 * 60 * 24);
        let hours = sec / 3600;
        let minutes = sec / 60;

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = sec;
    }
}