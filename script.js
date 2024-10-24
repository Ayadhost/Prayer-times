document.addEventListener('DOMContentLoaded', function () {
  const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد
  const params = adhan.CalculationMethod.MuslimWorldLeague(); // طريقة الحساب
  const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

  // وظيفة لتنسيق الوقت بدون صباحًا/مساءً
  function formatTime(time) {
    return time.toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
  }

  const fajr = formatTime(prayerTimes.fajr);
  const dhuhr = formatTime(prayerTimes.dhuhr);
  const maghrib = formatTime(prayerTimes.maghrib);

  // إضافة أوقات الصلاة إلى الجدول
  document.getElementById('fajr-time').textContent = fajr;
  document.getElementById('dhuhr-time').textContent = dhuhr;
  document.getElementById('maghrib-time').textContent = maghrib;
});
