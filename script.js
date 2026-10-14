 // Fungsi Modal / Lightbox (Efek Zoom Media)
        // Fungsi ini dipanggil ketika gambar atau video di klik
        function openModal(mediaElement) {
            // Jika tidak ada elemen yang diklik, hentikan fungsi
            if (!mediaElement) return;
            
            // Mengambil elemen modal dan tempat kontennya
            const modal = document.getElementById('media-modal');
            const contentContainer = modal.querySelector('.modal-content');
            
            // Bersihkan konten sebelumnya yang ada di dalam modal
            contentContainer.innerHTML = ''; 

            // Cek apakah elemen yang diklik adalah gambar (img)
            if (mediaElement.tagName.toLowerCase() === 'img') {
                const img = document.createElement('img');
                img.src = mediaElement.src;
                contentContainer.appendChild(img); // Masukkan gambar ke dalam modal
            } 
            // Cek apakah elemen yang diklik adalah video
            else if (mediaElement.tagName.toLowerCase() === 'video') {
                const video = document.createElement('video');
                video.src = mediaElement.src;
                video.controls = true; // Tampilkan tombol play/pause
                video.autoplay = true; // Putar video otomatis
                contentContainer.appendChild(video); // Masukkan video ke dalam modal
            }
            
            // Tampilkan modal dengan menambahkan class 'show'
            modal.classList.add('show');
            // Kunci layar agar tidak bisa di-scroll ke bawah saat modal terbuka
            document.body.style.overflow = 'hidden'; 
        }

        // Fungsi ini dipanggil untuk menutup modal
        function closeModal() {
            const modal = document.getElementById('media-modal');
            const contentContainer = modal.querySelector('.modal-content');
            
            // Bersihkan konten (ini juga otomatis akan menghentikan video yang sedang diputar)
            contentContainer.innerHTML = ''; 
            
            // Sembunyikan modal dengan menghapus class 'show'
            modal.classList.remove('show');
            // Kembalikan fungsi scroll layar seperti semula
            document.body.style.overflow = '';
        }

        // Fungsi Tab (Navigasi About / Profil Perusahaan)
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            
            // Sembunyikan semua konten tab terlebih dahulu
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                tabcontent[i].className = tabcontent[i].className.replace(" active", "");
            }
            
            // Hapus status "active" dari semua tombol tab
            tablinks = document.getElementsByClassName("tab-btn");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            
            // Tampilkan konten tab yang dipilih dan berikan status "active" pada tombol yang diklik
            document.getElementById(tabName).style.display = "block";
            document.getElementById(tabName).className += " active";
            evt.currentTarget.className += " active";
        }

        // Fungsi Ganti Tema (Terang / Gelap)
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = themeToggleBtn.querySelector('i');
        const htmlElement = document.documentElement;

        // Cek apakah sebelumnya pengguna pernah menyimpan preferensi tema di browser (Local Storage)
        const savedTheme = localStorage.getItem('theme');
        let currentTheme = 'dark'; // Tema bawaan (default)
        
        // Jika ada tema 'light' yang tersimpan, gunakan tema tersebut
        if (savedTheme === 'light') {
             currentTheme = 'light';
        }

        // Fungsi untuk menerapkan warna tema ke halaman
        function applyTheme(theme) {
            htmlElement.setAttribute('data-theme', theme);
            
            // Ubah ikon tombol: matahari untuk mode gelap, bulan untuk mode terang
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
            
            // Simpan pilihan tema di browser agar tidak hilang saat di-refresh
            localStorage.setItem('theme', theme);
        }

        // Terapkan tema saat halaman pertama kali dimuat
        applyTheme(currentTheme);

        // Saat tombol tema diklik, ganti tema dari gelap ke terang, atau sebaliknya
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
        });

        // Efek Menu Navigasi Saat Di-scroll (Sticky Navbar)
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.sticky-nav');
            
            // Jika layar di-scroll lebih dari 50 pixel ke bawah, tambahkan bayangan/efek pada menu
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                // Jika posisi paling atas, hilangkan efek bayangan
                header.classList.remove('scrolled');
            }
        });