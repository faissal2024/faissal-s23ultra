function checkScreenSize() {
    var video = document.getElementById("video");
    if (window.innerWidth >= 900) {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}

// استدعاء الدالة عند تحميل الصفحة
checkScreenSize();

// استدعاء الدالة عند تغيير حجم الشاشة
window.addEventListener("resize", checkScreenSize);




    // مصفوفة الصور
    const images = ["colors/s23ultra color (3).png", "colors/s23ultra color .png", "colors/s23ultra color.png"];
    let currentIndex = 0;

    function changeImage() {
        // تحديث الفهرس للصورة التالية
        currentIndex = (currentIndex + 1) % images.length;
        // تغيير مصدر الصورة
        document.getElementById("displayedImage").src = images[currentIndex];
    }
