export function getDefaultPrintStyle() {
	let style = '';
	style +=
		"body { margin: 0;  padding: 0; font: 12pt 'Tahoma'; }" +
		' * { box-sizing: border-box; -moz-box - sizing: border-box;} ' +
		' .page { width: 21cm; min-height: 30.7cm;  padding: 1.5cm 2cm 0cm 2cm;  margin: 1cm auto; border-radius: 5px;  background: white;' +
		' box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); }' +
		' .subpage {  height: 270mm; }' +
		' @page { size: A4; margin: 0; }' +
		'  @media print { .page { margin: 0;  border: initial;  border-radius: initial;  width: initial; min-height: initial; ' +
		' box-shadow: initial;  background: initial;  page-break-after: always;   page-break-before: always; } }' +
		'  div {display: block}' +
		' .grant-number {font-size: 12px; position: absolute; top: 5.4cm;} ' +
		' .periodOfUse { position: absolute; top: 24.2cm; left: 7.1cm; font-size: 14px;}' +
		' .year {left:3.6cm;} ' +
		' .month {left:5cm;} ' +
		' .day {left:6.1cm;} ' +
		' .issue_number {left:8.2cm;} ' +
		' .patient-name {font-size: 15px; position: absolute; top: 6.1cm; left: 6cm;}' +
		' .patient-RRN {font-size: 12px; position: absolute; top: 7.3cm; left: 6cm;} ' +
		' .hospital-info {font-size: 12px; position: absolute; left: 13.5cm; }' +
		' .hospital-name {top:5.4cm;} ' +
		' .hospital-tel {top:6.1cm;} ' +
		' .hospital-fax {top:6.8cm;} ' +
		' .hospital-email {top:7.4cm;} ' +
		' .check { position: absolute; top: 4.6cm; left: 1.8cm;} ' +
		' .kcd-code1 {font-size: 15px; position: absolute; top: 8cm; left: 3.1cm; letter-spacing: 0.7cm;} ' +
		' .kcd-code2 {font-size: 15px; position: absolute; top: 8.6cm; left: 3.1cm; letter-spacing: 0.7cm;} ' +
		' .doctor {font-size: 15px; position: absolute; top: 8.2cm; left: 10cm;}' +
		' .license-type {font-size: 12px; position: absolute; top: 8cm; left: 15.5cm;}' +
		' .license-number {font-size: 12px; position: absolute; top: 8.7cm; left: 16cm;}' +
		' .comment {width: 5.5cm; padding: 0.5cm; font-size: 12px; position: absolute; top: 18.8cm; left: 14cm;} ' +
		' .medicines-name {font-size: 12px; position: absolute; left: 2.3cm;  }' +
		' .medicines-day1 {font-size: 12px; position: absolute; left: 10.5cm; }' +
		' .medicines-perday {font-size: 12px; position: absolute; left: 11.8cm; }' +
		' .medicines-period {font-size: 12px; position: absolute; left: 13.1cm; }' +
		' .medicines-help {font-size: 12px; position: absolute; left: 14.3cm; }' +
		' .medicines-0 {top: 10.9cm;}' +
		' .medicines-1 {top: 11.5cm;}' +
		' .medicines-2 {top: 12.2cm;}' +
		' .medicines-3 {top: 12.8cm;}' +
		' .medicines-4 {top: 13.4cm;}' +
		' .medicines-5 {top: 14.1cm;}' +
		' .medicines-6 {top: 14.7cm;}' +
		' .medicines-7 {top: 15.3cm;}' +
		' .medicines-8 {top: 15.9cm;}' +
		' .medicines-9 {top: 16.6cm;}';

	return style;
}

export function getReceiptPrintStyle() {
	let style = '';
	style +=
		"body { margin: 0;  padding: 0; font: 12pt 'Tahoma'; }" +
		' * { box-sizing: border-box; -moz-box - sizing: border-box;} ' +
		' .page { width: 21cm; min-height: 30.7cm;  padding: 0.8cm 2cm 0cm 2cm;  margin: 1cm auto; border-radius: 5px;  background: white;' +
		' box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); }' +
		' .subpage {  height: 270mm; }' +
		' @page { size: A4; margin: 0; }' +
		'  @media print { .page { margin: 0;  border: initial;  border-radius: initial;  width: initial; min-height: initial; ' +
		' box-shadow: initial;  background: initial;  page-break-after: always;   page-break-before: always; } }' +
		' div {display: block}' +
		' .receipt-content {font-size: 9px; position: absolute}' +
		' .line-text-1 {top: 1.63cm}' +
		' .line-number-1 {top: 1.65cm}' +
		' .line-text-2 {top: 2.52cm}' +
		' .line-number-2 {top: 2.55cm}' +
		' .line-docter_fee {top: 4.35cm}' +
		' .line-admission_fee-single {top: 4.81cm}' +
		' .line-dosing-behavior {top: 6.56cm}' +
		' .line-dosing-medication {top: 7.02cm}' +
		' .line-injection-behavior {top: 7.45cm}' +
		' .line-injection-medication {top: 7.92cm}' +
		' .line-meals {top: 6.1cm}' +
		' .line-check {top: 9.25cm}' +
		' .line-video {top: 9.7cm}' +
		' .line-meterial {top: 10.57cm}' +
		' .line-physical {top: 11.03cm}' +
		' .line-ct {top: 12.66cm}' +
		' .line-mri {top: 13.12cm}' +
		' .line-ultrasonic {top: 14cm}' +
		' .line-medical_care_benefits {top: 15.1cm}' +
		' .line-charge {top: 17.45cm}' +
		' .line-hospital-1 {top: 18.78cm}' +
		' .line-hospital-2 {top: 19.22cm}' +
		' .line-issue_date { top: 19.65cm }' +
		' .line-charge-summary {right: 0.2cm}' +
		' .receipt-patient-reg_no { left: 1cm }' +
		' .receipt-patient-name { left: 5.3cm}' +
		' .receipt-patient-date-from-year { left: 8.5cm}' +
		' .receipt-patient-date-from-month { left: 9.3cm}' +
		' .receipt-patient-date-from-day { left: 9.8cm}' +
		' .receipt-patient-date-to-year { left: 10.95cm}' +
		' .receipt-patient-date-to-month { left: 11.75cm}' +
		' .receipt-patient-date-to-day { left: 12.3cm}' +
		' .receipt-patient-night { left: 14.13cm }' +
		' .receipt-patient-holiday { left: 15.48cm}' +
		' .receipt-patient-epartment { left: 1cm}' +
		' .receipt-patient-drg_no { left: 5.3cm}' +
		' .receipt-patient-ward_no { left: 8.9cm}' +
		' .receipt-patient-insup_type { left: 11cm}' +
		' .receipt-patient-issue_no { left: 14cm}' +
		' .receipt-issue_date-year { left: 5.6cm}' +
		' .receipt-issue_date-month { left: 7.8cm}' +
		' .receipt-issue_date-day { left: 9.7cm}' +
		' .charge-expanses_total { top: 3.75cm}' +
		' .charge-patient_total { top: 5cm}' +
		' .charge-patient_done { top: 6.35cm}' +
		' .charge-patient_yet { top: 7.25cm}' +
		' .charge-credit { top: 7.92cm}' +
		' .charge-cash { top: 8.75cm}' +
		' .charge-hometax { top: 8.35cm}' +
		' .charge-total { top: 9.23cm}' +
		' .hospital-biz_reg_no { left: 5.25cm}' +
		' .hospital-name { left: 9.92cm}' +
		' .hospital-tel { left: 15.2cm}' +
		' .hospital-address { left: 4cm}' +
		' .hospital-doctor { left: 14.23cm}' +
		' .charge { font-size: 9px; }' +
		' .charge-1 { right: 11.85cm}' +
		' .charge-2 { right: 10.2cm}' +
		' .charge-3 { right: 8.85cm}' +
		' .charge-4 { right: 7.8cm}' +
		' .charge-5 { right: 6.4cm}' +
		' ';
	return style;
}
