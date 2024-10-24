document.addEventListener('DOMContentLoaded', function () {
  const coordinates = new adhan.Coordinates(33.3152, 44.3661); // Baghdad coordinates
  const params = adhan.CalculationMethod.MuslimWorldLeague(); // Calculation method
  const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

  // Function to format time and replace AM/PM with Arabic equivalents
  function formatTime(time) {
    let timeString = time.toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    if (timeString.includes('ص')) {
      timeString = timeString.replace('ص', 'صباحًا');
    } else if (timeString.includes('م')) {
      timeString = timeString.replace('م', 'مساءً');
    }
    return timeString;
  }

  const fajr = formatTime(prayerTimes.fajr);
  const dhuhr = formatTime(prayerTimes.dhuhr);
  const maghrib = formatTime(prayerTimes.maghrib);

  // Inserting the prayer times into the table
  document.getElementById('prayer-times').innerHTML = `
    <tr>
      <td>الفجر</td>
      <td>${fajr}</td>
    </tr>
    <tr>
      <td>الظهر</td>
      <td>${dhuhr}</td>
    </tr>
    <tr>
      <td>المغرب</td>
      <td>${maghrib}</td>
    </tr>
  `;
});
