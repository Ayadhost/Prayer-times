document.addEventListener("DOMContentLoaded", function() {
    // إعدادات الزاوية لحساب أوقات الصلاة
    const params = adhan.CalculationMethod.MuslimWorldLeague();
    params.fajrAngle = 18;  // زاوية الفجر
    params.ishaAngle = 17;  // زاوية العشاء

    // تنسيق الوقت بدون ثواني وبنظام 12 ساعة
    function formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'مساءً' : 'صباحًا';
        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${displayHours}:${displayMinutes}`;
    }

    // تحويل الأرقام إلى الأرقام الهندية
    function toArabicNumbers(num) {
        return num.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    // إعداد الإحداثيات والتاريخ لحساب أوقات الصلاة
    const coordinates = new adhan.Coordinates(33.3152, 44.3661);  // إحداثيات بغداد
    const date = new Date();
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

    // الحصول على أوقات الصلاة وتنسيقها
    const fajrTime = formatTime(prayerTimes.fajr);
    const dhuhrTime = formatTime(prayerTimes.dhuhr);
    const maghribTime = formatTime(prayerTimes.maghrib);

    // تعيين أوقات الصلاة في الجدول مع تحويل الأرقام إلى الأرقام الهندية
    document.getElementById("fajr-time").textContent = toArabicNumbers(fajrTime);
    document.getElementById("dhuhr-time").textContent = toArabicNumbers(dhuhrTime);
    document.getElementById("maghrib-time").textContent = toArabicNumbers(maghribTime);

    // تحديث التاريخ والوقت الحالي في الحقل تحت العنوان
    function updateDateTime() {
        const currentDateTime = new Date();
        const day = currentDateTime.getDate();
        const month = currentDateTime.getMonth() + 1; // getMonth() تعطي الشهور من 0 إلى 11، لذلك نضيف 1
        const year = currentDateTime.getFullYear();
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const ampm = hours >= 12 ? 'مساءً' : 'صباحًا';

        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;

        const formattedDateTime = `${day}-${month}-${year} ${displayHours}:${displayMinutes} ${ampm}`;
        const formattedDateTimeArabic = toArabicNumbers(formattedDateTime);

        document.getElementById("current-date-time").textContent = formattedDateTimeArabic;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
