document.addEventListener("DOMContentLoaded", function() {
    const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد

    // إعدادات حساب الصلاة مع الزوايا
    const params = adhan.CalculationMethod.Other(); 
    params.fajrAngle = 18; // تعديل زاوية الفجر
    params.ishaAngle = 4; // تعديل زاوية العشاء

    const date = new Date();
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    // عرض أوقات الصلاة في العناصر المناسبة
    document.getElementById("fajr-time").textContent = formatTime(prayerTimes.fajr);
    document.getElementById("sunrise-time").textContent = formatTime(prayerTimes.sunrise);
    document.getElementById("dhuhr-time").textContent = formatTime(prayerTimes.dhuhr);
    document.getElementById("maghrib-time").textContent = formatTime(prayerTimes.maghrib);
    document.getElementById("isha-time").textContent = formatTime(prayerTimes.isha);

    // دالة تنسيق الوقت لعرض الساعات والدقائق فقط
    function formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const displayHours = (hours % 12) || 12; // تحويل إلى نظام 12 ساعة
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const ampm = hours >= 12 ? 'مساءً' : 'صباحًا';
        return `${displayHours}:${displayMinutes} ${ampm}`;
    }
});
