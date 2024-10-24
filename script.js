document.addEventListener("DOMContentLoaded", function() {
    const coordinates = new adhan.Coordinates(33.3152, 44.3661); // إحداثيات بغداد

    // إعدادات حساب الصلاة مع الزوايا
    const params = adhan.CalculationMethod.Other(); 
    params.fajrAngle = 16; // يمكنك تعديل الزاوية هنا
    params.ishaAngle = 14; // يمكنك تعديل زاوية العشاء هنا

    const date = new Date();
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    // تحويل الأرقام إلى الأرقام الهندية
    function toArabicNumbers(num) {
        return num.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    // عرض أوقات الصلاة في العناصر المناسبة
    document.getElementById("fajr-time").textContent = toArabicNumbers(formatTime(prayerTimes.fajr));
    document.getElementById("sunrise-time").textContent = toArabicNumbers(formatTime(prayerTimes.sunrise));
    document.getElementById("dhuhr-time").textContent = toArabicNumbers(formatTime(prayerTimes.dhuhr));
    document.getElementById("maghrib-time").textContent = toArabicNumbers(formatTime(prayerTimes.maghrib));
    document.getElementById("isha-time").textContent = toArabicNumbers(formatTime(prayerTimes.isha));

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
