/**
 * ELEKTRIK BİLGİ BANKASI - ANA KONTROL DOSYASI
 * main.js
 * Sayfa navigasyonu, temaya geçişi ve hesaplama araçlarını kontrol eder
 */

// ============================================
// BAŞLANGIC KURULUŞU
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Tema kurulumu
    setupTheme();
    
    // Navigasyon kurulumu
    setupNavigation();
    
    // Hesaplama araçlarını başlat
    setupCalculators();
    
    // localStorage'dan son hesaplamaları yükle
    loadRecentCalculations();
}

// ============================================
// TEMA KONTROL
// ============================================

function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // localStorage'dan tema önceden ayarlanmış mı kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon('light');
    } else {
        updateThemeIcon('dark');
    }
    
    // Tema değiş
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('light');
        } else {
            localStorage.setItem('theme', 'light');
            updateThemeIcon('dark');
        }
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (theme === 'dark') {
        themeToggle.querySelector('.theme-icon').textContent = '🌙';
    } else {
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }
}

// ============================================
// NAVIGASYON KONTROL
// ============================================

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
                
                // Sidebar mobil kapatma (eğer açık ise)
                if (window.innerWidth <= 768) {
                    const sidebar = document.querySelector('.sidebar');
                    if (sidebar.style.maxHeight === '500px') {
                        sidebar.style.maxHeight = '300px';
                    }
                }
            }
        });
    });
    
    // Ana sayfayı varsayılan olarak göster
    showPage('home');
}

function showPage(pageId) {
    // Tüm sayfaları gizle
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // İstenen sayfayı göster
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Aktif nav linki güncelle
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

// ============================================
// OHM KANUNU HESAPLAYICI
// ============================================

function setupCalculators() {
    setupOhmCalculator();
    setupDCPowerCalculator();
}

function setupOhmCalculator() {
    // Hesap türü seçicileri
    const typeButtons = document.querySelectorAll('#calc-ohm .type-btn');
    typeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Diğer butonları pasif yap
            typeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Tüm calc bölümlerini gizle
            document.querySelectorAll('#calc-ohm .calc-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // İlgili bölümü göster
            const type = this.getAttribute('data-type');
            const section = document.getElementById(type + '-calc');
            if (section) {
                section.classList.add('active');
            }
        });
    });
    
    // Hesapla butonu
    const calculateBtn = document.getElementById('ohmCalculate');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', performOhmCalculation);
    }
    
    // Temizle butonu
    const clearBtn = document.getElementById('ohmClear');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            clearOhmInputs();
            document.getElementById('ohmResult').style.display = 'none';
        });
    }
    
    // Kopyala butonu
    const copyBtn = document.getElementById('ohmCopyResult');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            copyToClipboard(document.getElementById('ohmResultValue').textContent);
        });
    }
}

function performOhmCalculation() {
    // Aktif tab'ı bul
    const activeTab = document.querySelector('#calc-ohm .type-btn.active');
    if (!activeTab) return;
    
    const type = activeTab.getAttribute('data-type');
    let result;
    
    switch(type) {
        case 'voltage':
            const current1 = document.getElementById('ohm-current-v').value;
            const resistance1 = document.getElementById('ohm-resistance-v').value;
            result = calculateVoltageOhm(current1, resistance1);
            break;
        case 'current':
            const voltage2 = document.getElementById('ohm-voltage-i').value;
            const resistance2 = document.getElementById('ohm-resistance-i').value;
            result = calculateCurrentOhm(voltage2, resistance2);
            break;
        case 'resistance':
            const voltage3 = document.getElementById('ohm-voltage-r').value;
            const current3 = document.getElementById('ohm-current-r').value;
            result = calculateResistanceOhm(voltage3, current3);
            break;
    }
    
    displayOhmResult(result);
    
    // localStorage'a kaydet
    if (result.success) {
        saveCalculation('Ohm Kanunu', result.result);
    }
}

function displayOhmResult(result) {
    const resultCard = document.getElementById('ohmResult');
    
    if (!result.success) {
        resultCard.style.display = 'block';
        resultCard.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        document.getElementById('ohmResultValue').textContent = 'Hata!';
        document.getElementById('ohmResultFormula').textContent = result.error;
        document.getElementById('ohmResultExplanation').innerHTML = '';
        return;
    }
    
    resultCard.style.display = 'block';
    resultCard.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    
    document.getElementById('ohmResultValue').textContent = result.result;
    document.getElementById('ohmResultFormula').innerHTML = `
        <strong>Formül:</strong> ${result.formula}
        <br><strong>Hesaplama:</strong> ${result.calculation}
    `;
    document.getElementById('ohmResultExplanation').innerHTML = `
        ${result.explanation}
        <div class="warning-box">${result.warning}</div>
    `;
}

function clearOhmInputs() {
    document.querySelectorAll('#calc-ohm input[type="number"]').forEach(input => {
        input.value = '';
    });
}

// ============================================
// DC GÜÇÜ HESAPLAYICI
// ============================================

function setupDCPowerCalculator() {
    const calculateBtn = document.getElementById('dcPowerCalculate');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', performDCPowerCalculation);
    }
    
    const clearBtn = document.getElementById('dcPowerClear');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            clearDCPowerInputs();
            document.getElementById('dcPowerResult').style.display = 'none';
        });
    }
    
    const copyBtn = document.getElementById('dcPowerCopyResult');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            copyToClipboard(document.getElementById('dcPowerResultValue').textContent);
        });
    }
}

function performDCPowerCalculation() {
    const voltage = document.getElementById('dcPower-voltage').value;
    const current = document.getElementById('dcPower-current').value;
    
    const result = calculateDCPower(voltage, current);
    displayDCPowerResult(result);
    
    if (result.success) {
        saveCalculation('DC Güç', result.result);
    }
}

function displayDCPowerResult(result) {
    const resultCard = document.getElementById('dcPowerResult');
    
    if (!result.success) {
        resultCard.style.display = 'block';
        resultCard.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        document.getElementById('dcPowerResultValue').textContent = 'Hata!';
        document.getElementById('dcPowerResultExplanation').textContent = result.error;
        return;
    }
    
    resultCard.style.display = 'block';
    resultCard.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    
    document.getElementById('dcPowerResultValue').textContent = result.result;
    document.getElementById('dcPowerResultExplanation').innerHTML = `
        ${result.explanation}
        <div class="warning-box">${result.warning}</div>
    `;
}

function clearDCPowerInputs() {
    document.querySelectorAll('#calc-power-dc input[type="number"]').forEach(input => {
        input.value = '';
    });
}

// ============================================
// KOPYALA FONKSİYONU
// ============================================

function copyToClipboard(text) {
    const element = document.createElement('textarea');
    element.value = text;
    document.body.appendChild(element);
    element.select();
    
    try {
        document.execCommand('copy');
        // Başarı bildirimi
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Kopyalandı!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Kopyalama başarısız:', err);
    }
    
    document.body.removeChild(element);
}

// ============================================
// LOKALSTORAGE FONKSIYONLARI
// ============================================

function saveCalculation(tool, result) {
    let calculations = JSON.parse(localStorage.getItem('recentCalculations')) || [];
    
    // Maksimum 10 hesaplama sakla
    calculations.unshift({
        tool: tool,
        result: result,
        timestamp: new Date().toLocaleString('tr-TR')
    });
    
    if (calculations.length > 10) {
        calculations.pop();
    }
    
    localStorage.setItem('recentCalculations', JSON.stringify(calculations));
}

function loadRecentCalculations() {
    const calculations = JSON.parse(localStorage.getItem('recentCalculations')) || [];
    // İleride yakın zamanda kullanılan hesaplamalar gösterimi için
    console.log('Son hesaplamalar:', calculations);
}

// ============================================
// HIZLI ERİŞİM KARTLARI
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const calcCards = document.querySelectorAll('.calc-card');
    calcCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
    
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', function(e) {
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
});

// ============================================
// ARAÇ SAYACINI GÜNCELLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const toolCount = 10; // Toplam hesaplama aracı sayısı
    const toolCountElement = document.getElementById('toolCount');
    if (toolCountElement) {
        toolCountElement.textContent = toolCount;
    }
});

// ============================================
// DUYARLI TASARIM DESTEĞI
// ============================================

// Pencere boyutu değiştiğinde
window.addEventListener('resize', function() {
    // Gereksiz işlemler burada eklenebilir
});

// Mobil cihazlarda Enter'a basınca hesapla
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.calculator-card input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // En yakın calculate butonunu bul
                const btn = this.closest('.calculator-card').querySelector('[id*="Calculate"]');
                if (btn) btn.click();
            }
        });
    });
});
