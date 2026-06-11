// --- LOGIKA SISTEM SWITCH WINDOW HALAMAN (SPA) ---
const navigationTriggers = document.querySelectorAll('[data-target]');
const pages = document.querySelectorAll('.page-view');

console.log("Jumlah tombol navigasi ditemukan:", navigationTriggers.length);
console.log("Jumlah halaman view ditemukan:", pages.length);

navigationTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        // Mencegah error bawaan browser
        e.preventDefault(); 
        
        const targetId = trigger.getAttribute('data-target');
        console.log("Menu diklik, mencoba menuju ID:", targetId);

        const targetPage = document.getElementById(targetId);

        if (targetPage) {
            // 1. Sembunyikan semua halaman
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // 2. Tampilkan halaman tujuan
            targetPage.classList.add('active');
            console.log("Halaman berhasil dipindahkan ke:", targetId);

            // 3. Reset posisi scroll ke paling atas
            window.scrollTo({ top: 0 });
        } else {
            console.error(`Gagal pindah halaman! Elemen dengan id="${targetId}" tidak ditemukan di HTML.`);
        }
    });
});

// --- EFEK HOVER RADIAL GRADIENT PADA KARTU (BAWAAN ASLI KAMU) ---
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), rgba(255,255,255,0.02))`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = 'transparent';
    });
});