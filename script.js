document.addEventListener('DOMContentLoaded', function () {
  const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد
  const params = adhan.CalculationMethod.MuslimWorldLeague(); // طريقة الحساب
  const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

  // وظيفة لتنسيق الوقت واستبدال AM/PM بما يعادلها بالعربية
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

  // إضافة أوقات الصلاة إلى الجدول
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
