/**
 * ELEKTRIK BİLGİ BANKASI - HESAPLAMA FONKSİYONLARI
 * calculations.js
 * Tüm hesaplama araçlarının fonksiyonlarını içerir
 */

// ============================================
// OHM KANUNU HESAPLAYICI
// ============================================

/**
 * Gerilimi hesapla: V = I × R
 * @param {number} current - Akım (A)
 * @param {number} resistance - Direnç (Ω)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateVoltageOhm(current, resistance) {
    if (current === '' || resistance === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    current = parseFloat(current);
    resistance = parseFloat(resistance);
    
    if (isNaN(current) || isNaN(resistance)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (current < 0 || resistance < 0) {
        return { success: false, error: 'Akım ve direnç değerleri negatif olamaz.' };
    }
    
    const voltage = current * resistance;
    
    return {
        success: true,
        value: voltage,
        unit: 'V',
        formula: 'V = I × R',
        calculation: `V = ${current} × ${resistance}`,
        result: `${voltage.toFixed(4)} V`,
        explanation: `Gerilim: ${voltage.toFixed(4)} Volt`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * Akımı hesapla: I = V / R
 * @param {number} voltage - Gerilim (V)
 * @param {number} resistance - Direnç (Ω)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateCurrentOhm(voltage, resistance) {
    if (voltage === '' || resistance === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    voltage = parseFloat(voltage);
    resistance = parseFloat(resistance);
    
    if (isNaN(voltage) || isNaN(resistance)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (voltage < 0 || resistance < 0) {
        return { success: false, error: 'Gerilim ve direnç değerleri negatif olamaz.' };
    }
    
    if (resistance === 0) {
        return { success: false, error: 'Direnç değeri sıfır olamaz!' };
    }
    
    const current = voltage / resistance;
    
    return {
        success: true,
        value: current,
        unit: 'A',
        formula: 'I = V / R',
        calculation: `I = ${voltage} / ${resistance}`,
        result: `${current.toFixed(4)} A`,
        explanation: `Akım: ${current.toFixed(4)} Amper`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * Direnci hesapla: R = V / I
 * @param {number} voltage - Gerilim (V)
 * @param {number} current - Akım (A)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateResistanceOhm(voltage, current) {
    if (voltage === '' || current === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    voltage = parseFloat(voltage);
    current = parseFloat(current);
    
    if (isNaN(voltage) || isNaN(current)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (voltage < 0 || current < 0) {
        return { success: false, error: 'Gerilim ve akım değerleri negatif olamaz.' };
    }
    
    if (current === 0) {
        return { success: false, error: 'Akım değeri sıfır olamaz!' };
    }
    
    const resistance = voltage / current;
    
    return {
        success: true,
        value: resistance,
        unit: 'Ω',
        formula: 'R = V / I',
        calculation: `R = ${voltage} / ${current}`,
        result: `${resistance.toFixed(4)} Ω`,
        explanation: `Direnç: ${resistance.toFixed(4)} Ohm`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// DC GÜÇ HESAPLAYICI
// ============================================

/**
 * DC Güç hesapla: P = V × I
 * @param {number} voltage - Gerilim (V)
 * @param {number} current - Akım (A)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateDCPower(voltage, current) {
    if (voltage === '' || current === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    voltage = parseFloat(voltage);
    current = parseFloat(current);
    
    if (isNaN(voltage) || isNaN(current)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (voltage < 0 || current < 0) {
        return { success: false, error: 'Gerilim ve akım değerleri negatif olamaz.' };
    }
    
    const powerW = voltage * current;
    const powerKW = powerW / 1000;
    
    return {
        success: true,
        valueW: powerW,
        valueKW: powerKW,
        formula: 'P = V × I',
        calculation: `P = ${voltage} V × ${current} A`,
        result: `${powerW.toFixed(2)} W (${powerKW.toFixed(4)} kW)`,
        explanation: `Güç: ${powerW.toFixed(2)} Watt = ${powerKW.toFixed(4)} Kilowatt`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// AC TEK FAZ GÜÇ HESAPLAYICI
// ============================================

/**
 * AC Tek Faz Güç hesapla: P = V × I × cosφ
 * @param {number} voltage - Gerilim (V)
 * @param {number} current - Akım (A)
 * @param {number} powerFactor - Güç Faktörü (cosφ)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateACPowerSinglePhase(voltage, current, powerFactor) {
    if (voltage === '' || current === '' || powerFactor === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    voltage = parseFloat(voltage);
    current = parseFloat(current);
    powerFactor = parseFloat(powerFactor);
    
    if (isNaN(voltage) || isNaN(current) || isNaN(powerFactor)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (voltage < 0 || current < 0 || powerFactor < 0) {
        return { success: false, error: 'Gerilim, akım ve güç faktörü negatif olamaz.' };
    }
    
    if (powerFactor > 1) {
        return { success: false, error: 'Güç faktörü (cosφ) 0 ile 1 arasında olmalıdır.' };
    }
    
    const powerW = voltage * current * powerFactor;
    const powerKW = powerW / 1000;
    
    return {
        success: true,
        valueW: powerW,
        valueKW: powerKW,
        formula: 'P = V × I × cosφ',
        calculation: `P = ${voltage} V × ${current} A × ${powerFactor}`,
        result: `${powerW.toFixed(2)} W (${powerKW.toFixed(4)} kW)`,
        explanation: `Aktif Güç: ${powerW.toFixed(2)} Watt = ${powerKW.toFixed(4)} Kilowatt`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// AC 3 FAZ GÜÇ HESAPLAYICI
// ============================================

/**
 * AC 3 Faz Güç hesapla: P = √3 × V × I × cosφ
 * @param {number} voltage - Hatlar arası gerilim (V)
 * @param {number} current - Akım (A)
 * @param {number} powerFactor - Güç Faktörü (cosφ)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateACPowerThreePhase(voltage, current, powerFactor) {
    if (voltage === '' || current === '' || powerFactor === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    voltage = parseFloat(voltage);
    current = parseFloat(current);
    powerFactor = parseFloat(powerFactor);
    
    if (isNaN(voltage) || isNaN(current) || isNaN(powerFactor)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (voltage < 0 || current < 0 || powerFactor < 0) {
        return { success: false, error: 'Gerilim, akım ve güç faktörü negatif olamaz.' };
    }
    
    if (powerFactor > 1) {
        return { success: false, error: 'Güç faktörü (cosφ) 0 ile 1 arasında olmalıdır.' };
    }
    
    const sqrt3 = Math.sqrt(3);
    const powerW = sqrt3 * voltage * current * powerFactor;
    const powerKW = powerW / 1000;
    
    return {
        success: true,
        valueW: powerW,
        valueKW: powerKW,
        formula: 'P = √3 × V × I × cosφ',
        calculation: `P = ${sqrt3.toFixed(4)} × ${voltage} V × ${current} A × ${powerFactor}`,
        result: `${powerW.toFixed(2)} W (${powerKW.toFixed(4)} kW)`,
        explanation: `Aktif Güç: ${powerW.toFixed(2)} Watt = ${powerKW.toFixed(4)} Kilowatt`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// AKIM HESAPLAYICI
// ============================================

/**
 * DC Akım hesapla: I = P / V
 * @param {number} power - Güç (W)
 * @param {number} voltage - Gerilim (V)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateCurrentDC(power, voltage) {
    if (power === '' || voltage === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    power = parseFloat(power);
    voltage = parseFloat(voltage);
    
    if (isNaN(power) || isNaN(voltage)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (power < 0 || voltage < 0) {
        return { success: false, error: 'Güç ve gerilim değerleri negatif olamaz.' };
    }
    
    if (voltage === 0) {
        return { success: false, error: 'Gerilim değeri sıfır olamaz!' };
    }
    
    const current = power / voltage;
    
    return {
        success: true,
        value: current,
        unit: 'A',
        formula: 'I = P / V',
        calculation: `I = ${power} W / ${voltage} V`,
        result: `${current.toFixed(4)} A`,
        explanation: `Akım: ${current.toFixed(4)} Amper`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * AC Tek Faz Akım hesapla: I = P / (V × cosφ)
 * @param {number} power - Güç (W)
 * @param {number} voltage - Gerilim (V)
 * @param {number} powerFactor - Güç Faktörü (cosφ)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateCurrentACsinglePhase(power, voltage, powerFactor) {
    if (power === '' || voltage === '' || powerFactor === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    power = parseFloat(power);
    voltage = parseFloat(voltage);
    powerFactor = parseFloat(powerFactor);
    
    if (isNaN(power) || isNaN(voltage) || isNaN(powerFactor)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (power < 0 || voltage < 0 || powerFactor < 0) {
        return { success: false, error: 'Güç, gerilim ve güç faktörü negatif olamaz.' };
    }
    
    if (powerFactor > 1 || powerFactor === 0) {
        return { success: false, error: 'Güç faktörü 0 ile 1 arasında olmalıdır.' };
    }
    
    if (voltage === 0) {
        return { success: false, error: 'Gerilim değeri sıfır olamaz!' };
    }
    
    const current = power / (voltage * powerFactor);
    
    return {
        success: true,
        value: current,
        unit: 'A',
        formula: 'I = P / (V × cosφ)',
        calculation: `I = ${power} W / (${voltage} V × ${powerFactor})`,
        result: `${current.toFixed(4)} A`,
        explanation: `Akım: ${current.toFixed(4)} Amper`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * AC 3 Faz Akım hesapla: I = P / (√3 × V × cosφ)
 * @param {number} power - Güç (W)
 * @param {number} voltage - Hatlar arası gerilim (V)
 * @param {number} powerFactor - Güç Faktörü (cosφ)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateCurrentACThreePhase(power, voltage, powerFactor) {
    if (power === '' || voltage === '' || powerFactor === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    power = parseFloat(power);
    voltage = parseFloat(voltage);
    powerFactor = parseFloat(powerFactor);
    
    if (isNaN(power) || isNaN(voltage) || isNaN(powerFactor)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (power < 0 || voltage < 0 || powerFactor < 0) {
        return { success: false, error: 'Güç, gerilim ve güç faktörü negatif olamaz.' };
    }
    
    if (powerFactor > 1 || powerFactor === 0) {
        return { success: false, error: 'Güç faktörü 0 ile 1 arasında olmalıdır.' };
    }
    
    if (voltage === 0) {
        return { success: false, error: 'Gerilim değeri sıfır olamaz!' };
    }
    
    const sqrt3 = Math.sqrt(3);
    const current = power / (sqrt3 * voltage * powerFactor);
    
    return {
        success: true,
        value: current,
        unit: 'A',
        formula: 'I = P / (√3 × V × cosφ)',
        calculation: `I = ${power} W / (${sqrt3.toFixed(4)} × ${voltage} V × ${powerFactor})`,
        result: `${current.toFixed(4)} A`,
        explanation: `Akım: ${current.toFixed(4)} Amper`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// GERİLİM HESAPLAYICI
// ============================================

/**
 * DC Gerilim hesapla: V = P / I
 * @param {number} power - Güç (W)
 * @param {number} current - Akım (A)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateVoltageDC(power, current) {
    if (power === '' || current === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    power = parseFloat(power);
    current = parseFloat(current);
    
    if (isNaN(power) || isNaN(current)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (power < 0 || current < 0) {
        return { success: false, error: 'Güç ve akım değerleri negatif olamaz.' };
    }
    
    if (current === 0) {
        return { success: false, error: 'Akım değeri sıfır olamaz!' };
    }
    
    const voltage = power / current;
    
    return {
        success: true,
        value: voltage,
        unit: 'V',
        formula: 'V = P / I',
        calculation: `V = ${power} W / ${current} A`,
        result: `${voltage.toFixed(4)} V`,
        explanation: `Gerilim: ${voltage.toFixed(4)} Volt`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// DİRENÇ HESAPLAYICI
// ============================================

/**
 * Seri Direnç hesapla: Rt = R1 + R2 + R3 + ...
 * @param {array} resistances - Direnç değerleri
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateSeriesResistance(resistances) {
    if (!resistances || resistances.length === 0) {
        return { success: false, error: 'Lütfen en az bir direnç değeri giriniz.' };
    }
    
    const validResistances = [];
    for (let r of resistances) {
        if (r === '' || r === null) {
            return { success: false, error: 'Lütfen tüm direnç alanlarını doldurunuz.' };
        }
        const val = parseFloat(r);
        if (isNaN(val)) {
            return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
        }
        if (val < 0) {
            return { success: false, error: 'Direnç değerleri negatif olamaz.' };
        }
        validResistances.push(val);
    }
    
    const totalResistance = validResistances.reduce((sum, r) => sum + r, 0);
    const calculation = validResistances.join(' + ');
    
    return {
        success: true,
        value: totalResistance,
        unit: 'Ω',
        formula: 'Rt = R1 + R2 + R3 + ...',
        calculation: `Rt = ${calculation}`,
        result: `${totalResistance.toFixed(4)} Ω`,
        explanation: `Toplam Direnç: ${totalResistance.toFixed(4)} Ohm`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * Paralel Direnç hesapla: 1/Rt = 1/R1 + 1/R2 + 1/R3 + ...
 * @param {array} resistances - Direnç değerleri
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateParallelResistance(resistances) {
    if (!resistances || resistances.length === 0) {
        return { success: false, error: 'Lütfen en az bir direnç değeri giriniz.' };
    }
    
    const validResistances = [];
    for (let r of resistances) {
        if (r === '' || r === null) {
            return { success: false, error: 'Lütfen tüm direnç alanlarını doldurunuz.' };
        }
        const val = parseFloat(r);
        if (isNaN(val)) {
            return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
        }
        if (val <= 0) {
            return { success: false, error: 'Direnç değerleri sıfırdan büyük olmalıdır.' };
        }
        validResistances.push(val);
    }
    
    let reciprocalSum = 0;
    for (let r of validResistances) {
        reciprocalSum += 1 / r;
    }
    
    const totalResistance = 1 / reciprocalSum;
    const calculation = validResistances.map(r => `1/${r}`).join(' + ');
    
    return {
        success: true,
        value: totalResistance,
        unit: 'Ω',
        formula: '1/Rt = 1/R1 + 1/R2 + 1/R3 + ...',
        calculation: `1/Rt = ${calculation}`,
        result: `${totalResistance.toFixed(4)} Ω`,
        explanation: `Toplam Direnç: ${totalResistance.toFixed(4)} Ohm`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// ENERJİ HESAPLAYICI
// ============================================

/**
 * Enerji hesapla: E = P × t
 * @param {number} power - Güç (kW)
 * @param {number} time - Zaman (saat)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculateEnergy(power, time) {
    if (power === '' || time === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    power = parseFloat(power);
    time = parseFloat(time);
    
    if (isNaN(power) || isNaN(time)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (power < 0 || time < 0) {
        return { success: false, error: 'Güç ve zaman değerleri negatif olamaz.' };
    }
    
    const energy = power * time;
    
    return {
        success: true,
        value: energy,
        unit: 'kWh',
        formula: 'E = P × t',
        calculation: `E = ${power} kW × ${time} saat`,
        result: `${energy.toFixed(4)} kWh`,
        explanation: `Enerji: ${energy.toFixed(4)} Kilowatt-saat`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// GÜÇYAKTÖRÜ HESAPLAYICI
// ============================================

/**
 * Güç Faktörü hesapla: cosφ = P / S
 * @param {number} activePower - Aktif Güç (W)
 * @param {number} apparentPower - Görünür Güç (VA)
 * @returns {object} Hesaplama sonucu ve detaylar
 */
function calculatePowerFactor(activePower, apparentPower) {
    if (activePower === '' || apparentPower === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    activePower = parseFloat(activePower);
    apparentPower = parseFloat(apparentPower);
    
    if (isNaN(activePower) || isNaN(apparentPower)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (activePower < 0 || apparentPower < 0) {
        return { success: false, error: 'Güç değerleri negatif olamaz.' };
    }
    
    if (apparentPower === 0) {
        return { success: false, error: 'Görünür Güç değeri sıfır olamaz!' };
    }
    
    if (activePower > apparentPower) {
        return { success: false, error: 'Aktif Güç, Görünür Güçten büyük olamaz.' };
    }
    
    const powerFactor = activePower / apparentPower;
    
    return {
        success: true,
        value: powerFactor,
        unit: '',
        formula: 'cosφ = P / S',
        calculation: `cosφ = ${activePower} W / ${apparentPower} VA`,
        result: `${powerFactor.toFixed(4)}`,
        explanation: `Güç Faktörü (cosφ): ${powerFactor.toFixed(4)}`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

// ============================================
// TRANSFORMATÖR HESAPLAYICI
// ============================================

/**
 * Transformatör Gerilim Hesapla
 * @param {number} primaryVoltage - Primer Gerilim
 * @param {number} primaryTurns - Primer Sarım
 * @param {number} secondaryTurns - Sekonder Sarım
 * @returns {object} Hesaplama sonucu
 */
function calculateTransformerVoltage(primaryVoltage, primaryTurns, secondaryTurns) {
    if (primaryVoltage === '' || primaryTurns === '' || secondaryTurns === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    primaryVoltage = parseFloat(primaryVoltage);
    primaryTurns = parseFloat(primaryTurns);
    secondaryTurns = parseFloat(secondaryTurns);
    
    if (isNaN(primaryVoltage) || isNaN(primaryTurns) || isNaN(secondaryTurns)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (primaryVoltage < 0 || primaryTurns < 0 || secondaryTurns < 0) {
        return { success: false, error: 'Tüm değerler negatif olamaz.' };
    }
    
    if (primaryTurns === 0) {
        return { success: false, error: 'Primer sarım sayısı sıfır olamaz!' };
    }
    
    const secondaryVoltage = primaryVoltage * (secondaryTurns / primaryTurns);
    const turns_ratio = secondaryTurns / primaryTurns;
    
    return {
        success: true,
        value: secondaryVoltage,
        unit: 'V',
        formula: 'V2 = V1 × (N2 / N1)',
        calculation: `V2 = ${primaryVoltage} × (${secondaryTurns} / ${primaryTurns})`,
        result: `${secondaryVoltage.toFixed(2)} V`,
        explanation: `Sekonder Gerilim: ${secondaryVoltage.toFixed(2)} Volt (Sarım Oranı: 1:${turns_ratio.toFixed(2)})`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}

/**
 * Transformatör Akım Hesapla
 * @param {number} primaryCurrent - Primer Akım
 * @param {number} primaryTurns - Primer Sarım
 * @param {number} secondaryTurns - Sekonder Sarım
 * @returns {object} Hesaplama sonucu
 */
function calculateTransformerCurrent(primaryCurrent, primaryTurns, secondaryTurns) {
    if (primaryCurrent === '' || primaryTurns === '' || secondaryTurns === '') {
        return { success: false, error: 'Lütfen tüm alanları doldurunuz.' };
    }
    
    primaryCurrent = parseFloat(primaryCurrent);
    primaryTurns = parseFloat(primaryTurns);
    secondaryTurns = parseFloat(secondaryTurns);
    
    if (isNaN(primaryCurrent) || isNaN(primaryTurns) || isNaN(secondaryTurns)) {
        return { success: false, error: 'Lütfen geçerli sayısal değerler giriniz.' };
    }
    
    if (primaryCurrent < 0 || primaryTurns < 0 || secondaryTurns < 0) {
        return { success: false, error: 'Tüm değerler negatif olamaz.' };
    }
    
    if (secondaryTurns === 0) {
        return { success: false, error: 'Sekonder sarım sayısı sıfır olamaz!' };
    }
    
    const secondaryCurrent = primaryCurrent * (primaryTurns / secondaryTurns);
    
    return {
        success: true,
        value: secondaryCurrent,
        unit: 'A',
        formula: 'I2 = I1 × (N1 / N2)',
        calculation: `I2 = ${primaryCurrent} × (${primaryTurns} / ${secondaryTurns})`,
        result: `${secondaryCurrent.toFixed(4)} A`,
        explanation: `Sekonder Akım: ${secondaryCurrent.toFixed(4)} Amper`,
        warning: 'Bu değer ön hesaplama amaçlıdır; gerçek uygulamalarda ilgili standartlar ve mühendislik kontrolleri dikkate alınmalıdır.'
    };
}
