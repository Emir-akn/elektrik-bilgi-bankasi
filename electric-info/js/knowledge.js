/**
 * ELEKTRIK BİLGİ BANKASI - BİLGİ BANKASI İÇERİĞİ
 * knowledge.js
 * Elektrik mühendisliği konuları hakkında kapsamlı bilgileri içerir
 */

// Bilgi bankası veritabanı
const knowledgeDatabase = {
    // ============================================
    // TEMEL ELEKTRIK
    // ============================================
    'gerilim': {
        title: '⚡ GERİLİM',
        category: 'Temel Elektrik',
        description: 'Elektrik potansiyel farkı',
        content: {
            definition: `Gerilim (Voltaj), iki nokta arasındaki elektrik potansiyel farkıdır. 
                        İki uç arasındaki birim yükün sahip olduğu elektrik potansiyel enerjisinin farkını ifade eder.`,
            unit: 'Volt (V)',
            symbol: 'V',
            acDcDifference: `
                <strong>DC Gerilim (Doğru Akım):</strong>
                - Sabit, değişmeyen gerilim
                - Kutupları vardır (+ ve -)
                - Piller, akümülatörler, kontrollü güç kaynakları
                
                <strong>AC Gerilim (Alternatif Akım):</strong>
                - Zaman içinde sinüsoidel olarak değişir
                - Frekansı vardır (Hz cinsinden)
                - Ev ve endüstriyel elektriği
                - Türkiye'de standart 230V, 50Hz
            `,
            voltageSources: `
                - Piller (1.5V, 6V, 12V)
                - Akümülatörler (12V, 24V)
                - Genset/Jeneratör
                - Güneş Panelleri
                - Elektrik Şebekesi (230V, 400V)
            `,
            measurement: `
                <strong>Çoklu Ölçer ile Gerilim Ölçümü:</strong>
                1. Ölçer V (Volt) moduna alın
                2. AC veya DC seçin
                3. Siyah probe toprak, kırmızı probe pozitif
                4. Paralel olarak bağlayın (cihaza paralel, devreye seri DEĞIL)
                5. Okunan değeri kaydedin
            `,
            formulas: `
                <strong>Temel Formüller:</strong>
                V = I × R (Ohm Kanunu)
                P = V × I (Güç)
                E = V × I × t (Enerji)
            `,
            variables: {
                'V': 'Gerilim (Volt)',
                'I': 'Akım (Amper)',
                'R': 'Direnç (Ohm)',
                'P': 'Güç (Watt)',
                'E': 'Enerji (Joule)',
                't': 'Zaman (Saniye)'
            },
            realWorldApplications: `
                - Ev elektriği: 230V AC
                - Üç faz endüstriyel: 400V AC
                - Elektronik devreler: 3V-24V DC
                - Otomotiv: 12V-48V DC
                - Telekomünikasyon: 5V-48V DC
            `,
            importantNotes: `
                ⚠️ Yüksek gerilim çok tehlikelidir - Canlı olabilir!
                ⚠️ Ölçü alırken devreyi kapatın
                ⚠️ Doğru probu kullanın (kırmızı pozitif, siyah negatif)
                ⚠️ Ölçer modunu kontrol edin
            `
        }
    },
    
    'akim': {
        title: '→ AKIM',
        category: 'Temel Elektrik',
        description: 'Birim zamanda akan yük miktarı',
        content: {
            definition: `Akım, birim zamanda bir kesit yüzeyinden geçen yüklerin miktarıdır. 
                        Yönü geleneksel olarak pozitiften negatife doğrudur (elektronlar ise negatiften pozitife).`,
            unit: 'Amper (A)',
            symbol: 'I',
            ampereDefinition: `1 Amper = 1 Coulomb / 1 Saniye
                             İlişkili birimler:
                             - 1 mA (miliAmper) = 0.001 A
                             - 1 μA (mikroAmper) = 0.000001 A
                             - 1 kA (kiloAmper) = 1000 A`,
            dcCurrent: `
                <strong>DC Akım:</strong>
                - Sabit yönde akar
                - Sabit büyüklükte
                - Pil/Akümülatör devrelerinde
                - Elektronik cihazlarda
            `,
            acCurrent: `
                <strong>AC Akım:</strong>
                - Periyodik olarak yön değiştirir
                - Sinüsoidel dalga şeklinde
                - RMS (efektif) değer ile ölçülür
                - 50Hz frekansında (Türkiye)
            `,
            circuitBehavior: `
                <strong>Seri Devre:</strong>
                - Akım tüm devrede aynı
                - I = I1 = I2 = I3
                
                <strong>Paralel Devre:</strong>
                - Akım dallanır
                - I_total = I1 + I2 + I3
                - Her dalda farklı akım akabilir
            `,
            measurement: `
                <strong>Ampermetrenin Devreye Bağlanması:</strong>
                1. Ölçer A (Amper) moduna alın
                2. Ölçer SERİ olarak bağlanır
                3. Yüksek akımda pens ampermetre kullanın
                4. Cihazı zarar görmekten korumak için uygun menzil seçin
            `,
            safetyLimits: `
                <strong>İnsan Vücudu İçin Akım Tehlikeleri:</strong>
                - 1 mA: Hafif tıklanma hissi
                - 5-10 mA: Belirgin ağrı
                - 50 mA: Kasılmalar, solunum güçlüğü
                - 100 mA: Ölüm riski
                
                ⚠️ 50V'un üstünde gerilim tehlikeli!
            `,
            formulas: `
                I = V / R (Ohm Kanunu)
                I = P / V (Güç formülü)
                Q = I × t (Yük formülü)
            `,
            realWorldExamples: `
                - LED: 20mA
                - Bilgisayar: 2-5A
                - Elektrik Motoru: 10-50A (güce göre)
                - Ev sirkütü: 16A-20A nominal
                - Ağır endüstriyel motor: 100-500A
            `
        }
    },
    
    'direnc': {
        title: 'Ω DİRENÇ',
        category: 'Temel Elektrik',
        description: 'Akımın geçişine karşı koymak',
        content: {
            definition: `Direnç, elektrik akımının geçişine karşı gösterilen zorluktur. 
                        Birim: Ohm (Ω). Bir malzemenin ne kadar kolay veya zor akım ilettiğini gösterir.`,
            ohm: `1 Ohm: 1 Voltun uygulandığı bir iletkenden 1 Amper akım geçmesi durumudur.
                  İlişkili birimler:
                  - 1 kΩ = 1000 Ω
                  - 1 MΩ = 1.000.000 Ω
                  - 1 mΩ = 0.001 Ω`,
            circuitRole: `
                - Akımı sınırlama
                - Gerilimi bölme
                - Işık oluşturma (LED)
                - Isı oluşturma
                - Sinyal işleme
            `,
            seriesResistance: `
                <strong>Seri Direnç Bağlantısı:</strong>
                R_toplam = R1 + R2 + R3
                
                Örnek:
                10Ω + 20Ω + 30Ω = 60Ω
                
                - Akım tüm devrede aynı
                - Gerilim dirençlere bölünür
                - Toplam direnç artar
            `,
            parallelResistance: `
                <strong>Paralel Direnç Bağlantısı:</strong>
                1/R_toplam = 1/R1 + 1/R2 + 1/R3
                
                Örnek:
                1/R = 1/10 + 1/10 + 1/10 = 3/10
                R = 10/3 = 3.33Ω
                
                - Akım dirençlere bölünür
                - Gerilim her direnç üzerinde aynı
                - Toplam direnç azalır
            `,
            colorCode: `
                <strong>Direnç Renk Kodları (4 Bant):</strong>
                
                Renkler: Siyah=0, Kahverengi=1, Kırmızı=2, Turuncu=3, Sarı=4,
                        Yeşil=5, Mavi=6, Mor=7, Gri=8, Beyaz=9
                
                Band 1: Birinci sayı
                Band 2: İkinci sayı
                Band 3: Çarpan (10^n)
                Band 4: Tolerans (% hatası)
                
                Örnek: Kahverengi-Siyah-Kırmızı-Altın
                = 10 × 10² ± 5% = 1000Ω ± 50Ω
            `,
            formulas: `
                R = V / I (Ohm Kanunu)
                P = V² / R (Direnç üzerinde güç)
                ρ = R × A / L (Öz direnç)
            `,
            variables: {
                'R': 'Direnç (Ohm)',
                'ρ': 'Öz direnç (Ohm-meter)',
                'L': 'Uzunluk (Meter)',
                'A': 'Kesit alanı (m²)'
            },
            materialResistivity: `
                <strong>Bazı Malzemelerin Öz Dirençleri (20°C):</strong>
                - Gümüş: 1.47 × 10⁻⁸ Ωm (İyi iletkeni)
                - Bakır: 1.68 × 10⁻⁸ Ωm (Çok kullanılan)
                - Alüminyum: 2.65 × 10⁻⁸ Ωm
                - Nikrom: 1.1 × 10⁻⁶ Ωm (Direnç telleri)
                - Karbon: 3.5 × 10⁻⁵ Ωm
                - Cam: 10¹¹ Ωm (Yalıtkan)
            `,
            temperatureEffect: `
                Direnç sıcaklıkla değişir:
                R(T) = R₀(1 + α×ΔT)
                
                - α: Sıcaklık katsayısı
                - Metaller: Sıcaklıkla direnç artar
                - Grafit: Sıcaklıkla direnç azalır
            `
        }
    },
    
    'ohm-kanunu': {
        title: '⚡ OHM KANUNU',
        category: 'Temel Elektrik',
        description: 'Gerilim, Akım ve Direnç arasındaki ilişki',
        content: {
            definition: `Ohm Kanunu, bir iletken üzerindeki gerilim ile bu iletki den akan akım arasındaki doğrusal ilişkiyi ifade eder.
                        18. yüzyılda Georg Simon Ohm tarafından bulunmuştur.`,
            mainFormulas: `
                <strong>Ana Formüller:</strong>
                
                V = I × R  (Gerilim = Akım × Direnç)
                I = V / R  (Akım = Gerilim / Direnç)
                R = V / I  (Direnç = Gerilim / Akım)
                
                Tüm formüller birbirinden türetilmiştir.
            `,
            variableExplanation: `
                - V (Gerilim): Volt cinsinden elektrik potansiyel farkı
                - I (Akım): Amper cinsinden akan yük miktarı
                - R (Direnç): Ohm cinsinden akıma karşı koymak
            `,
            unit: `Birimler:
                - V: Volt (V)
                - I: Amper (A)
                - R: Ohm (Ω)`,
            practicExample: `
                <strong>Örnek Problem:</strong>
                Bir dirençte 12V gerilim uygulandığında 3A akım akıyor.
                Direnci bulunuz.
                
                Çözüm:
                R = V / I
                R = 12V / 3A
                R = 4Ω
                
                Direnç 4 Ohm'dur.
            `,
            triangleMethod: `
                Ohm Kanunu Üçgeni (Hatırlamak kolay):
                
                   V
                  ___
                 | V |
                 |___|
                  /\\\\
                 /  \\\\
                / I × R\\
                
                - Bulmak istediğiniz değeri kapayın
                - Kalan işlem yapılır
                
                V'yi bulmak: V = I × R
                I'yi bulmak: I = V / R (V'yi kapayın)
                R'yi bulmak: R = V / I
            `,
            linearRelationship: `
                Ohm Kanunu lineer bir ilişkidir. Yani:
                - Gerilim arttıkça akım artar (sabit R için)
                - Direnç arttıkça akım azalır (sabit V için)
                
                Bunlar doğru orantılı (V ve I) ve ters orantılı (I ve R) ilişkilerdir.
            `,
            limitations: `
                Ohm Kanunu her malzeme için geçerli DEĞİLDİR:
                - Lineer ilişki gösteren malzemelerde geçerli
                - Diyotlar, transistörler: Ohm Kanunu uygulanamaz
                - Çok yüksek sıcaklıklarda bazı malzemelerde sapma
                - Non-ohmic malzemelerde dirençten bahsedilemez
            `,
            applicationFields: `
                Ohm Kanunu uygulamaları:
                - Devre tasarımı
                - Koruma elemanları (sigorta, MCB) seçimi
                - Kablo kesiti belirleme
                - LED ile seri direnç hesaplama
                - Motor kontrol devreleri
                - Güç kaynağı tasarımı
            `,
            realWorldCircuits: `
                <strong>Gerçek Uygulamalar:</strong>
                
                1. LED Koruma Direnci:
                   - LED: 2V, 20mA
                   - Güç kaynağı: 12V
                   - Gerekli direnç: R = (12-2)/0.02 = 500Ω
                
                2. Elektrik Ocak:
                   - 220V şebeke
                   - İstenilen güç: 2000W
                   - I = P/V = 2000/220 = 9.09A
            `
        }
    },

    // ============================================
    // ELEKTRİK GÜCÜ
    // ============================================
    'dc-gucu': {
        title: '💡 DC ELEKTRİK GÜCÜ',
        category: 'Güç',
        description: 'Doğru akımda Güç Hesaplaması',
        content: {
            definition: `Elektrik Gücü, birim zamanda harcanan veya aktarılan enerji miktarıdır.
                        DC sistemlerde güç hesaplaması AC sistemlerden daha basittir.`,
            unit: `Birim: Watt (W)
                  1W = 1 Joule / 1 Saniye
                  İlişkili birimler:
                  - 1 kW = 1000 W
                  - 1 MW = 1.000.000 W
                  - 1 mW = 0.001 W`,
            mainFormula: `
                <strong>Ana Formül:</strong>
                P = V × I
                
                Diğer formlar:
                P = I² × R
                P = V² / R
            `,
            variables: {
                'P': 'Güç (Watt)',
                'V': 'Gerilim (Volt)',
                'I': 'Akım (Amper)',
                'R': 'Direnç (Ohm)'
            },
            example: `
                <strong>Örnek:</strong>
                24V DC güç kaynağında 5A akım çekiliyor.
                Güç nedir?
                
                P = V × I
                P = 24V × 5A
                P = 120W
                
                120 Watt güç harcanmaktadır.
            `,
            powerDissipation: `
                Direnç üzerinde harcanan güç:
                
                P = I² × R (Akım ve direnç bilindiğinde)
                P = V² / R (Gerilim ve direnç bilindiğinde)
                
                Örnek:
                10Ω direnç üzerinde 2A akım
                P = I² × R = 2² × 10 = 40W
                
                Bu güç ısı olarak açığa çıkar!
            `,
            components: `
                <strong>Güç Tüketimi Örnekleri:</strong>
                - LED: 0.1-0.5W
                - Motor (küçük): 10-100W
                - Bilgisayar: 100-300W
                - Elektrik Motoru (1 HP): 750W
                - Elektrikli Çay Kazanı: 1500-2000W
                - Klima (1 Ton): 1200W
            `,
            efficiency: `
                Verim, giriş gücüne karşı çıkış gücünün oranıdır:
                
                η = (P_çıkış / P_giriş) × 100%
                
                Örnek:
                Motor girişi: 1000W
                Motor çıkışı: 900W
                η = (900/1000) × 100% = 90%
            `,
            safetyNotes: `
                ⚠️ Yüksek güç = Yüksek ısı
                ⚠️ Dirençler şiddetli ısınabilir
                ⚠️ Yangın riski mevcuttur
                ⚠️ Yeterli soğutma sağlayın
                ⚠️ Uygun kablo kesiti kullanın
            `
        }
    },

    'ac-gucu': {
        title: '〰️ AC ELEKTRİK GÜCÜ',
        category: 'Güç',
        description: 'Alternatif akımda Güç hesaplaması',
        content: {
            definition: `AC sistemlerde güç hesaplaması DC'den daha karmaşıktır çünkü güç faktörü devreye girer.`,
            types: `
                <strong>AC Güç Türleri:</strong>
                
                1. Aktif Güç (P): Gerçekten işe yarayan güç
                   Birim: Watt (W)
                   P = V × I × cosφ
                
                2. Reaktif Güç (Q): İndüktans/Kapasitans tarafından depolanan
                   Birim: VAR (Volt-Amper Reaktif)
                   Q = V × I × sinφ
                
                3. Görünür Güç (S): Toplam güç
                   Birim: VA (Volt-Amper)
                   S = V × I
            `,
            singlePhase: `
                <strong>Tek Faz AC:</strong>
                P = V × I × cosφ
                
                Örnek:
                230V, 10A, cosφ = 0.9
                P = 230 × 10 × 0.9 = 2070W = 2.07kW
            `,
            threePhase: `
                <strong>3 Faz AC:</strong>
                P = √3 × V × I × cosφ
                
                √3 = 1.732
                
                Örnek:
                400V (hatlar arası), 10A, cosφ = 0.9
                P = 1.732 × 400 × 10 × 0.9 = 6235W ≈ 6.24kW
            `,
            powerFactor: `
                Güç Faktörü (cosφ):
                - 0 ile 1 arasında bir değer
                - 1'e ne kadar yakınsa o kadar iyi
                
                <strong>Anlamı:</strong>
                - cosφ = 1: Tam dirençsel (ideal)
                - cosφ = 0.9: İndüktif yük (motor, endüktans)
                - cosφ = 0.5: Kötü güç faktörü
                
                Düşük cosφ:
                - Daha fazla akım çekilmesi
                - Daha kalın kablo gerekli
                - Daha fazla kayıp
                - Daha yüksek maliyetler
            `,
            powerTriangle: `
                Güç Üçgeni:
                       S (Görünür)
                      /|
                     / |
                    /  | Q
                   /   | (Reaktif)
                  / φ  |
                 /______|
                    P (Aktif)
                
                S² = P² + Q²
                cosφ = P / S
                sinφ = Q / S
            `,
            powerCorrection: `
                Düşük güç faktörü düzeltmesi (Kompanzasyon):
                
                - Kapasitör bataryaları kullanılır
                - Reaktif gücü nötralize eder
                - cosφ'yi 1'e yaklaştırır
                - Kablo kaybını azaltır
                - Fatura indirir
                
                Örnek:
                cosφ = 0.8 ise: Kapasitör gerekli
                cosφ = 0.95 olana kadar düzelt
            `,
            turkeyStandard: `
                <strong>Türkiye'de Şebeke Elektriği:</strong>
                - Faz-Nötr: 230V (tek faz)
                - Faz-Faz: 230V (hatlar arası)
                - 3 Faz (hatlar arası): 400V
                - Frekans: 50 Hz
                - Standart Kontrol: 16A (ev devreleri)
            `
        }
    },

    'enerji': {
        title: '⚙️ ELEKTRIK ENERJİSİ',
        category: 'Güç',
        description: 'Enerjinin hesaplanması ve kwh',
        content: {
            definition: `Enerji, yapılan işin ölçüsüdür. Elektrik enerjisi, güç ve zamanın çarpımıdır.`,
            unit: `Birim: Joule (J) veya Kilowatt-saat (kWh)
                  1 kWh = 3.600.000 Joule
                  Ev elektriği faturasında kWh kullanılır.`,
            formula: `
                <strong>Enerji Formülü:</strong>
                E = P × t
                
                E: Enerji (Joule veya kWh)
                P: Güç (Watt veya kW)
                t: Zaman (Saniye veya Saat)
            `,
            example: `
                <strong>Örnek 1:</strong>
                2 kW cihaz 5 saat çalışırsa ne kadar enerji harcar?
                E = P × t = 2 kW × 5 h = 10 kWh
                
                <strong>Örnek 2:</strong>
                100W ampul 8 saat yanıyor.
                E = 100W × 8h = 800Wh = 0.8 kWh
            `,
            kwh: `
                <strong>kWh (Kilowatt-saat):</strong>
                - 1 kilowatt gücü 1 saat çalıştırmak
                - Elektrik faturasında kullanılan birim
                - Tüketim ölçütü olarak faturaya yazılır
                
                <strong>Fiyat Örneği (Türkiye):</strong>
                Elektrik birim fiyatı: 2 TL/kWh
                Aylık tüketim: 300 kWh
                Fatura: 300 × 2 = 600 TL (+ vergiler)
            `,
            commonDevices: `
                <strong>Günlük Cihazların Saatlik Tüketimi:</strong>
                - LED Ampul (10W): 0.01 kWh/saat
                - Bilgisayar (300W): 0.3 kWh/saat
                - Klima (1200W): 1.2 kWh/saat
                - Beyaz Eşya Çamaşır (2000W): 2 kWh/saat
                - Elektrikli Ürün Ocağı (4000W): 4 kWh/saat
            `,
            joule: `
                <strong>Joule ve Watt Saati Dönüşümü:</strong>
                1 Joule = 1 Watt × 1 Saniye
                1 Wh = 3600 Joule
                1 kWh = 3.600.000 Joule
                
                Formül:
                J = Wh × 3600
                J = kWh × 3.600.000
            `,
            calculation: `
                <strong>Aylık Enerji Tüketimi:</strong>
                Günlük ortalama tüketim: 10 kWh
                Aylık (30 gün): 10 × 30 = 300 kWh
                Yıllık: 300 × 12 = 3600 kWh
                
                Aylık Fatura:
                300 kWh × 2 TL = 600 TL
            `,
            efficiency: `
                Enerji verimliliği:
                - Cihazların daha az enerji çektiği versiyonları tercih edin
                - Enerji tasarrufu elektriği tarifesini azaltır
                - A+++ sınıfı beyaz eşyalar daha tasarruflu
            `,
            co2Impact: `
                <strong>Çevre Etkileri:</strong>
                - 1 kWh elektrik: ~0.45 kg CO2 (Türkiye ortalaması)
                - Yıllık tasarruf: 1000 kWh ≈ 450 kg CO2 azalması
                - Enerji tasarrufu = Çevre koruma
            `
        }
    },

    'gucu-faktoru': {
        title: '⚡ GÜÇFAKTÖRÜ (cosφ)',
        category: 'Güç',
        description: 'AC sistemlerde aktif ve görünür güç oranı',
        content: {
            definition: `Güç Faktörü, aktif güçle görünür güç arasındaki oranıdır.
                        AC devrelerinde ne kadar güçün işe yaradığını gösterir.`,
            formula: `
                <strong>Güç Faktörü Formülü:</strong>
                cosφ = P / S
                
                P: Aktif Güç (Watt)
                S: Görünür Güç (VA)
                
                Sonuç: 0 ile 1 arasında bir değer
                φ: Faz açısı (derece)
            `,
            meaning: `
                <strong>Anlamı:</strong>
                - cosφ = 1 (1.0): %100 verimli (ideal dirençsel yük)
                - cosφ = 0.9: %90 aktif güç, %10 reaktif kayıp
                - cosφ = 0.8: %80 aktif güç, %20 reaktif kayıp
                - cosφ < 0.7: Kötü, düzeltme gerekli
                
                cosφ ne kadar 1'e yakınsa enerji kullanımı o kadar verimli.
            `,
            activePower: `
                <strong>Aktif Güç (P):</strong>
                - Gerçekten işe yarayan güç
                - Işık, ısı, mekanik iş yapar
                - Birim: Watt (W)
                - İşletmeciyi elektrik faturasında incitir
            `,
            reactivePower: `
                <strong>Reaktif Güç (Q):</strong>
                - Boşuna gidip gelen güç
                - İndüktans tarafından depolanan
                - Birim: VAR (Volt-Amper Reaktif)
                - Harcamada yazılmaz ama kayba neden olur
                - Fatura indirimi sağlanır
            `,
            apparentPower: `
                <strong>Görünür Güç (S):</strong>
                - Toplam güç (aktif + reaktif)
                - Kablo ve transformatörler buna göre boyutlandırılır
                - Birim: VA (Volt-Amper)
                
                Üçgen ilişkisi:
                S² = P² + Q²
            `,
            inductive: `
                <strong>İndüktif Yükler (cosφ geride):</strong>
                - Elektrik motorlar
                - Transformatörler
                - Endüktanslı devreler
                - Neon lambaları
                
                Nedensellik: Faz açısı, akım gerilimden geride kalır.
                Sonuç: cosφ < 1 (tipik 0.8-0.95)
            `,
            capacitive: `
                <strong>Kapasitif Yükler (cosφ ileride):</strong>
                - Kapasitif devreler
                - Güç faktörü düzeltme kapasitörleri
                - Elektronik devreler
                
                Nedensellik: Akım gerilimdendiler kalır.
                Sonuç: cosφ değişir ama genellikle negatif
            `,
            correction: `
                <strong>Güç Faktörü Düzeltmesi:</strong>
                
                Kapasitör bataryası bağlayarak cosφ'yi iyileştirin:
                - Reaktif gücü nötralize eder
                - Aktif güç değişmez
                - Kablo kayıpları azalır
                - Faturada indirim sağlanır
                
                Düzeltme sonucu:
                Eski: cosφ = 0.8 (P = 8000W, S = 10000VA)
                Yeni: cosφ = 0.95 (P = 8000W, S = 8421VA)
            `,
            benefits: `
                <strong>İyi cosφ'nin Avantajları:</strong>
                ✓ Daha ince kablo yetebilir
                ✓ Transformatör kapasitesi azalır
                ✓ Enerji kaybı azalır
                ✓ Fatura indirir
                ✓ Şebeke kalitesi iyileşir
                ✓ Cihaz ömrü uzar
            `,
            businessImplication: `
                <strong>İşletmecilik Açısından:</strong>
                - cosφ < 0.95 ise Elektrik Dağıtım Şirketine ceza ödenir
                - Düzeltme kapasitörü maliyeti, ceza tasarrufu ile karşılaştırılır
                - Büyük endüstriyel tesislerde zorunlu gözetim
                - Kontrol edilmezse ek fatura +%25 kadar artabilir
            `
        }
    }
};

// Arama fonksiyonu
function searchKnowledge(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    for (let key in knowledgeDatabase) {
        const item = knowledgeDatabase[key];
        if (item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            key.includes(lowerQuery)) {
            results.push({
                key: key,
                ...item
            });
        }
    }
    
    return results;
}

// Kategori başına içeriği getir
function getKnowledgeByCategory(category) {
    const results = [];
    for (let key in knowledgeDatabase) {
        if (knowledgeDatabase[key].category === category) {
            results.push({
                key: key,
                ...knowledgeDatabase[key]
            });
        }
    }
    return results;
}

// Tüm kategorileri getir
function getAllCategories() {
    const categories = new Set();
    for (let key in knowledgeDatabase) {
        categories.add(knowledgeDatabase[key].category);
    }
    return Array.from(categories);
}
