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
		' .year {left:3.8cm;} ' +
		' .month {left:5.2cm;} ' +
		' .day {left:6.3cm;} ' +
		' .issue_number {left:8.2cm;} ' +
		' .patient-name {font-size: 15px; position: absolute; top: 6.1cm; left: 6cm;}' +
		' .patient-RRN {font-size: 12px; position: absolute; top: 7.3cm; left: 6cm;} ' +
		' .hospital-info {font-size: 12px; position: absolute; left: 13.5cm; }' +
		' .hospital-name {top:5.4cm;} ' +
		' .hospital-tel {top:6.1cm;} ' +
		' .hospital-fax {top:6.8cm;} ' +
		' .hospital-email {top:7.4cm;} ' +
		' .check { position: absolute; top: 4.6cm; left: 1.9cm;} ' +
		' .kcd-code1 {font-size: 15px; position: absolute; top: 8.1cm; left: 3.2cm; letter-spacing: 0.7cm;} ' +
		' .kcd-code2 {font-size: 15px; position: absolute; top: 8.7cm; left: 3.2cm; letter-spacing: 0.7cm;} ' +
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

/**
.kcd-code1 {

	
	
	
	l
}
.kcd-code2 {
	font-size: 15px;
	position: absolute;
	top: 330px;
	left: 110px;
	letter-spacing: 16px;
}
 * 
 */
