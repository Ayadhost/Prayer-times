document.addEventListener('DOMContentLoaded', function () {
  const coordinates = new adhan.Coordinates(33.3152, 44.3661); // Baghdad coordinates
  const params = adhan.CalculationMethod.MuslimWorldLeague(); // Calculation method
  const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

  const fajr = prayerTimes.fajr.toLocaleTimeString();
  const dhuhr = prayerTimes.dhuhr.toLocaleTimeString();
  const maghrib = prayerTimes.maghrib.toLocaleTimeString();

  document.getElementById('prayer-times').innerHTML = `
    <p>الفجر: ${fajr}</p>
    <p>الظهر: ${dhuhr}</p>
    <p>المغرب: ${maghrib}</p>
  `;
});
