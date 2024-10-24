document.addEventListener('DOMContentLoaded', function () {
  const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد
  const params = adhan.CalculationMethod.MuslimWorldLeague(); // طريقة الحساب
  const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

  // وظيفة لتنسيق الوقت بدون ثواني وبنظام 12 ساعة بدون اختصارات صباحاً ومساءً
  function formatTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let period = hours >= 12 ? 'مساءً' : 'صباحاً';
    
    // تحويل الساعة لنظام 12 ساعة
    hours = hours % 12;
    hours = hours ? hours : 12; // إذا كانت الساعة 0 اجعلها 12
    minutes = minutes < 10 ? '0' + minutes : minutes; // إضافة صفر إذا كانت الدقائق أقل من 10

    return {
      time: `${hours}:${minutes}`,  // إرجاع الوقت بدون ثواني
      period: period  // إرجاع فترة اليوم (صباحًا أو مساءً)
    };
  }

  const fajrTime = formatTime(prayerTimes.fajr);
  const dhuhrTime = formatTime(prayerTimes.dhuhr);
  const maghribTime = formatTime(prayerTimes.maghrib);

  // إضافة أوقات الصلاة والحقول المقابلة
  document.getElementById('fajr-time').textContent = fajrTime.time;
  document.getElementById('fajr-period').textContent = fajrTime.period;
  
  document.getElementById('dhuhr-time').textContent = dhuhrTime.time;
  document.getElementById('dhuhr-period').textContent = dhuhrTime.period;
  
  document.getElementById('maghrib-time').textContent = maghribTime.time;
  document.getElementById('maghrib-period').textContent = maghribTime.period;
});
