<template>
	<div class="perscription-container" style="margin-top: 61px">
		<div style="text-align: center">
			<p class="font-weight-bold">영수증 출력</p>
		</div>

		<el-button size="mini" @click="print">출력</el-button>
		<div id="receipt" v-if="isPrint">
			<div class="page">
				<div class="subpage">
					<div :style="styleObject">
						<span style="top: 0.6cm; left: 4.4cm" class="receipt-content"
							>V</span
						>
						<!-- Line 1 -->
						<span
							class="receipt-content line-number-1 receipt-patient-reg_no"
							>{{ receipt.patient.reg_no }}</span
						>
						<span class="receipt-content line-text-1 receipt-patient-name">{{
							receipt.patient.name
						}}</span>
						<span
							class="receipt-content line-number-1 receipt-patient-date-from-year"
							>{{ receipt.patient.date.from.split('-')[0] }}</span
						>
						<span
							class="receipt-content line-number-1 receipt-patient-date-from-month"
							>{{ receipt.patient.date.from.split('-')[1] }}</span
						>
						<span
							class="receipt-content line-number-1 receipt-patient-date-from-day"
							>{{ receipt.patient.date.from.split('-')[2] }}</span
						>
						<span
							class="receipt-content line-number-1 receipt-patient-date-to-year"
							>{{ receipt.patient.date.to.split('-')[0] }}</span
						>
						<span
							class="receipt-content line-number-1 receipt-patient-date-to-month"
							>{{ receipt.patient.date.to.split('-')[1] }}</span
						>
						<span
							class="receipt-content line-number-1 receipt-patient-date-to-day"
							>{{ receipt.patient.date.to.split('-')[2] }}</span
						>
						<span
							v-if="receipt.patient.extra == '야간'"
							class="receipt-content line-text-1 receipt-patient-night"
							>V</span
						>
						<span
							v-else-if="receipt.patient.extra == '공휴일'"
							class="receipt-content line-text-1 receipt-patient-holiday"
							>V</span
						>

						<!-- Line 2 -->
						<span
							class="receipt-content line-text-2 receipt-patient-epartment"
							>{{ receipt.patient.epartment }}</span
						>
						<span
							class="receipt-content line-number-2 receipt-patient-drg_no"
							>{{ receipt.patient.drg_no }}</span
						>
						<span
							class="receipt-content line-number-2 receipt-patient-ward_no"
							>{{ receipt.patient.ward_no }}</span
						>
						<span
							class="receipt-content line-text-2 receipt-patient-insup_type"
							>{{ receipt.patient.insup_type }}</span
						>
						<span
							class="receipt-content line-number-2 receipt-patient-issue_no"
							>{{ receipt.patient.issue_no }}</span
						>

						<!-- 진찰료 -->
						<span class="receipt-content line-docter_fee charge charge-1">{{
							receipt.data.details.basic_tx.doctor_fee.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-docter_fee charge charge-2">{{
							receipt.data.details.basic_tx.doctor_fee.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-docter_fee charge charge-3">{{
							receipt.data.details.basic_tx.doctor_fee.rmb.all.personal
						}}</span>
						<span class="receipt-content line-docter_fee charge charge-4">{{
							receipt.data.details.basic_tx.doctor_fee.non_rmb.option
						}}</span>
						<span class="receipt-content line-docter_fee charge charge-5">{{
							receipt.data.details.basic_tx.doctor_fee.non_rmb.etc
						}}</span>

						<!-- 입원료 -->
						<span
							class="receipt-content line-admission_fee-single charge charge-1"
							>{{
								receipt.data.details.basic_tx.admission_fee.single.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-admission_fee-single charge charge-2"
							>{{
								receipt.data.details.basic_tx.admission_fee.single.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-admission_fee-single charge charge-3"
							>{{
								receipt.data.details.basic_tx.admission_fee.single.rmb.all
									.personal
							}}</span
						>
						<span
							class="receipt-content line-admission_fee-single charge charge-4"
							>{{
								receipt.data.details.basic_tx.admission_fee.single.non_rmb
									.option
							}}</span
						>
						<span
							class="receipt-content line-admission_fee-single charge charge-5"
							>{{
								receipt.data.details.basic_tx.admission_fee.single.non_rmb.etc
							}}</span
						>

						<!-- 식대 -->
						<span class="receipt-content line-meals charge charge-1">{{
							receipt.data.details.basic_tx.meals.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-meals charge charge-2">{{
							receipt.data.details.basic_tx.meals.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-meals charge charge-3">{{
							receipt.data.details.basic_tx.meals.rmb.all.personal
						}}</span>
						<span class="receipt-content line-meals charge charge-4">{{
							receipt.data.details.basic_tx.meals.non_rmb.option
						}}</span>
						<span class="receipt-content line-meals charge charge-5">{{
							receipt.data.details.basic_tx.meals.non_rmb.etc
						}}</span>

						<!-- 투약 및 조제료 -행위료 -->
						<span
							class="receipt-content line-dosing-behavior charge charge-1"
							>{{
								receipt.data.details.basic_tx.dosing.behavior.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-dosing-behavior charge charge-2"
							>{{
								receipt.data.details.basic_tx.dosing.behavior.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-dosing-behavior charge charge-3"
							>{{
								receipt.data.details.basic_tx.dosing.behavior.rmb.all.personal
							}}</span
						>
						<span
							class="receipt-content line-dosing-behavior charge charge-4"
							>{{
								receipt.data.details.basic_tx.dosing.behavior.non_rmb.option
							}}</span
						>
						<span
							class="receipt-content line-dosing-behavior charge charge-5"
							>{{
								receipt.data.details.basic_tx.dosing.behavior.non_rmb.etc
							}}</span
						>

						<!-- 투약 및 조제료-약품비 -->
						<span
							class="receipt-content line-dosing-medication charge charge-1"
							>{{
								receipt.data.details.basic_tx.dosing.medication.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-dosing-medication charge charge-2"
							>{{
								receipt.data.details.basic_tx.dosing.medication.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-dosing-medication charge charge-3"
							>{{
								receipt.data.details.basic_tx.dosing.medication.rmb.all.personal
							}}</span
						>
						<span
							class="receipt-content line-dosing-medication charge charge-4"
							>{{
								receipt.data.details.basic_tx.dosing.medication.non_rmb.option
							}}</span
						>
						<span
							class="receipt-content line-dosing-medication charge charge-5"
							>{{
								receipt.data.details.basic_tx.dosing.medication.non_rmb.etc
							}}</span
						>

						<!-- 주사료-행위료 -->
						<span
							class="receipt-content line-injection-behavior charge charge-1"
							>{{
								receipt.data.details.basic_tx.injection.behavior.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-injection-behavior charge charge-2"
							>{{
								receipt.data.details.basic_tx.injection.behavior.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-injection-behavior charge charge-3"
							>{{
								receipt.data.details.basic_tx.injection.behavior.rmb.all
									.personal
							}}</span
						>
						<span
							class="receipt-content line-injection-behavior charge charge-4"
							>{{
								receipt.data.details.basic_tx.injection.behavior.non_rmb.option
							}}</span
						>
						<span
							class="receipt-content line-injection-behavior charge charge-5"
							>{{
								receipt.data.details.basic_tx.injection.behavior.non_rmb.etc
							}}</span
						>

						<!-- 주사료-약품비 -->
						<span
							class="receipt-content line-injection-medication charge charge-1"
							>{{
								receipt.data.details.basic_tx.injection.medication.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-injection-medication charge charge-2"
							>{{
								receipt.data.details.basic_tx.injection.medication.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-injection-medication charge charge-3"
							>{{
								receipt.data.details.basic_tx.injection.medication.rmb.all
									.personal
							}}</span
						>
						<span
							class="receipt-content line-injection-medication charge charge-4"
							>{{
								receipt.data.details.basic_tx.injection.medication.non_rmb
									.option
							}}</span
						>
						<span
							class="receipt-content line-injection-medication charge charge-5"
							>{{
								receipt.data.details.basic_tx.injection.medication.non_rmb.etc
							}}</span
						>

						<!-- 검사료 -->
						<span class="receipt-content line-check charge charge-1">{{
							receipt.data.details.basic_tx.check.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-check charge charge-2">{{
							receipt.data.details.basic_tx.check.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-check charge charge-3">{{
							receipt.data.details.basic_tx.check.rmb.all.personal
						}}</span>
						<span class="receipt-content line-check charge charge-4">{{
							receipt.data.details.basic_tx.check.non_rmb.option
						}}</span>
						<span class="receipt-content line-check charge charge-5">{{
							receipt.data.details.basic_tx.check.non_rmb.etc
						}}</span>

						<!-- 영상진단료 -->
						<span class="receipt-content line-video charge charge-1">{{
							receipt.data.details.basic_tx.video.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-video charge charge-2">{{
							receipt.data.details.basic_tx.video.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-video charge charge-3">{{
							receipt.data.details.basic_tx.video.rmb.all.personal
						}}</span>
						<span class="receipt-content line-video charge charge-4">{{
							receipt.data.details.basic_tx.video.non_rmb.option
						}}</span>
						<span class="receipt-content line-video charge charge-5">{{
							receipt.data.details.basic_tx.video.non_rmb.etc
						}}</span>

						<!-- 치료재료대 -->
						<span class="receipt-content line-meterial charge charge-1">{{
							receipt.data.details.basic_tx.meterial.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-meterial charge charge-2">{{
							receipt.data.details.basic_tx.meterial.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-meterial charge charge-3">{{
							receipt.data.details.basic_tx.meterial.rmb.all.personal
						}}</span>
						<span class="receipt-content line-meterial charge charge-4">{{
							receipt.data.details.basic_tx.meterial.non_rmb.option
						}}</span>
						<span class="receipt-content line-meterial charge charge-5">{{
							receipt.data.details.basic_tx.meterial.non_rmb.etc
						}}</span>

						<!-- 재활 및 물리치료료 -->
						<span class="receipt-content line-physical charge charge-1">{{
							receipt.data.details.basic_tx.physical.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-physical charge charge-2">{{
							receipt.data.details.basic_tx.physical.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-physical charge charge-3">{{
							receipt.data.details.basic_tx.physical.rmb.all.personal
						}}</span>
						<span class="receipt-content line-physical charge charge-4">{{
							receipt.data.details.basic_tx.physical.non_rmb.option
						}}</span>
						<span class="receipt-content line-physical charge charge-5">{{
							receipt.data.details.basic_tx.physical.non_rmb.etc
						}}</span>

						<!-- CT진단료 -->
						<span class="receipt-content line-ct charge charge-1">{{
							receipt.data.details.optinal_tx.ct.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-ct charge charge-2">{{
							receipt.data.details.optinal_tx.ct.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-ct charge charge-3">{{
							receipt.data.details.optinal_tx.ct.rmb.all.personal
						}}</span>
						<span class="receipt-content line-ct charge charge-4">{{
							receipt.data.details.optinal_tx.ct.non_rmb.option
						}}</span>
						<span class="receipt-content line-ct charge charge-5">{{
							receipt.data.details.optinal_tx.ct.non_rmb.etc
						}}</span>

						<!-- MRI진단료 -->
						<span class="receipt-content line-mri charge charge-1">{{
							receipt.data.details.optinal_tx.mri.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-mri charge charge-2">{{
							receipt.data.details.optinal_tx.mri.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-mri charge charge-3">{{
							receipt.data.details.optinal_tx.mri.rmb.all.personal
						}}</span>
						<span class="receipt-content line-mri charge charge-4">{{
							receipt.data.details.optinal_tx.mri.non_rmb.option
						}}</span>
						<span class="receipt-content line-mri charge charge-5">{{
							receipt.data.details.optinal_tx.mri.non_rmb.etc
						}}</span>

						<!-- 초음파진단료 -->
						<span class="receipt-content line-ultrasonic charge charge-1">{{
							receipt.data.details.optinal_tx.ultrasonic.rmb.partial.personal
						}}</span>
						<span class="receipt-content line-ultrasonic charge charge-2">{{
							receipt.data.details.optinal_tx.ultrasonic.rmb.partial.public_corp
						}}</span>
						<span class="receipt-content line-ultrasonic charge charge-3">{{
							receipt.data.details.optinal_tx.ultrasonic.rmb.all.personal
						}}</span>
						<span class="receipt-content line-ultrasonic charge charge-4">{{
							receipt.data.details.optinal_tx.ultrasonic.non_rmb.option
						}}</span>
						<span class="receipt-content line-ultrasonic charge charge-5">{{
							receipt.data.details.optinal_tx.ultrasonic.non_rmb.etc
						}}</span>

						<!-- 요양급여 -->
						<span
							class="receipt-content line-medical_care_benefits charge charge-1"
							>{{
								receipt.data.details.etx.medical_care_benefits.rmb.partial
									.personal
							}}</span
						>
						<span
							class="receipt-content line-medical_care_benefits charge charge-2"
							>{{
								receipt.data.details.etx.medical_care_benefits.rmb.partial
									.public_corp
							}}</span
						>
						<span
							class="receipt-content line-medical_care_benefits charge charge-3"
							>{{
								receipt.data.details.etx.medical_care_benefits.rmb.all.personal
							}}</span
						>
						<span
							class="receipt-content line-medical_care_benefits charge charge-4"
							>{{
								receipt.data.details.etx.medical_care_benefits.non_rmb.option
							}}</span
						>
						<span
							class="receipt-content line-medical_care_benefits charge charge-5"
							>{{
								receipt.data.details.etx.medical_care_benefits.non_rmb.etc
							}}</span
						>

						<!-- 합계 -->
						<span class="receipt-content line-charge charge charge-1">{{
							receipt.data.charge.rmb_patient_partial
						}}</span>
						<span class="receipt-content line-charge charge charge-2">{{
							receipt.data.charge.rmb_hira
						}}</span>
						<span class="receipt-content line-charge charge charge-3">{{
							receipt.data.charge.rmb_patient_all
						}}</span>
						<span class="receipt-content line-charge charge charge-4">{{
							receipt.data.charge.non_rmb_option
						}}</span>
						<span class="receipt-content line-charge charge charge-5">{{
							receipt.data.charge.non_rmb_etc
						}}</span>

						<!-- 금액산정내용 -->
						<span
							class="receipt-content line-charge-summary charge charge-expanses_total"
							>{{ receipt.data.charge.expanses_total }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-patient_total"
							>{{ receipt.data.charge.patient_total }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-patient_done"
							>{{ receipt.data.charge.patient_done }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-patient_yet"
							>{{ receipt.data.charge.patient_yet }}</span
						>
						<!-- 납부한 금액 -->
						<span
							class="receipt-content line-charge-summary charge charge-credit"
							>{{ receipt.data.charge.payment.credit }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-cash"
							>{{ receipt.data.charge.payment.cash }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-hometax"
							>{{ receipt.data.charge.payment.hometax }}</span
						>
						<span
							class="receipt-content line-charge-summary charge charge-total"
							>{{ receipt.data.charge.payment.total }}</span
						>
						<!-- 요양기관 종류 -->
						<span style="top: 18.4cm; left: 7.6cm" class="receipt-content"
							>V</span
						>
						<!-- 사업자 정보 -->
						<span class="receipt-content line-hospital-1 hospital-biz_reg_no">{{
							receipt.hospital.biz_reg_no
						}}</span>
						<span class="receipt-content line-hospital-1 hospital-name">{{
							receipt.hospital.name
						}}</span>
						<span class="receipt-content line-hospital-1 hospital-tel">{{
							receipt.hospital.tel
						}}</span>
						<span class="receipt-content line-hospital-2 hospital-address">{{
							receipt.hospital.address
						}}</span>
						<span class="receipt-content line-hospital-2 hospital-doctor">{{
							receipt.hospital.doctor
						}}</span>

						<!-- 날짜 -->
						<span
							class="receipt-content line-issue_date receipt-issue_date-year"
							>{{ receipt.hospital.issue_date.split('-')[0] }}</span
						>
						<span
							class="receipt-content line-issue_date receipt-issue_date-month"
							>{{ receipt.hospital.issue_date.split('-')[1] }}</span
						>
						<span
							class="receipt-content line-issue_date receipt-issue_date-day"
							>{{ receipt.hospital.issue_date.split('-')[2] }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getReceiptPrintStyle } from '@/utils/style';
export default {
	computed: {
		styleObject() {
			return {
				'background-image': `url(${require('../../assets/receipt.jpg')})`,
				'background-repeat': 'round',
				width: '640px',
				height: '1080px',
				position: 'fixed',
			};
		},
	},
	created() {},
	watch: {},
	data() {
		return {
			isPrint: false,
			receipt: {
				doc_type: 'receipt',
				hospital: {
					type: 'clinic', // 요양기관 종류
					biz_reg_no: '2345678901', // 사업자등록번호
					name: '록스종합의원', // 상호
					tel: '02-442-5181', // 전화번호
					address: '서울시 마포구 백범로31번길 21', // 사업장 소재지
					doctor: '한승훈', // 대표자
					issue_date: '2020-08-10', // 계산서 날짜
				},

				patient: {
					reg_no: '123456789', // 환자 등록 번호
					name: '김환자', // 환자 성명
					date: {
						// 진료기간
						from: '2020-08-10',
						to: '2020-08-11',
					},
					extra: '야간', // 야간 혹은 공휴일 진료
					epartment: '신경외과', // 진료과목
					drg_no: '01234', // 질병군(DRG) 번호
					ward_no: '401', // 병실
					insup_type: '건강보험', // (직장조합, 지역조합, 지역3차) -> 건강보험, 의료급여, 보훈
					issue_no: '202008-0100', // 영수증번호
				},
				data: {
					details: {
						basic_tx: {
							doctor_fee: {
								rmb: {
									partial: {
										personal: '22,346',
										public_corp: '89,384',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							admission_fee: {
								single: {
									rmb: {
										partial: {
											personal: '',
											public_corp: '',
										},
										all: {
											personal: '',
										},
									},
									non_rmb: {
										option: '',
										etc: '',
									},
								},
								double_triple: {},
								multiple_person: {},
							},
							meals: {
								rmb: {
									partial: {
										personal: '',
										public_corp: '',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							dosing: {
								behavior: {
									rmb: {
										partial: {
											personal: '357',
											public_corp: '1,426',
										},
										all: {
											personal: '',
										},
									},
									non_rmb: {
										option: '',
										etc: '',
									},
								},
								medication: {
									rmb: {
										partial: {
											personal: '5,094',
											public_corp: '20,380',
										},
										all: {
											personal: '',
										},
									},
									non_rmb: {
										option: '',
										etc: '',
									},
								},
							},
							injection: {
								behavior: {
									rmb: {
										partial: {
											personal: '1,107',
											public_corp: '4,428',
										},
										all: {
											personal: '',
										},
									},
									non_rmb: {
										option: '',
										etc: '',
									},
								},
								medication: {
									rmb: {
										partial: {
											personal: '1,450',
											public_corp: '5,800',
										},
										all: {
											personal: '',
										},
									},
									non_rmb: {
										option: '',
										etc: '',
									},
								},
							},
							anesthesia: {},
							surgery: {},
							check: {
								rmb: {
									partial: {
										personal: '15,815',
										public_corp: '63,240',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							video: {
								rmb: {
									partial: {
										personal: '',
										public_corp: '',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							radiation: {},
							meterial: {
								rmb: {
									partial: {
										personal: '138',
										public_corp: '552',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '10,560',
								},
							},
							physical: {
								rmb: {
									partial: {
										personal: '',
										public_corp: '',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							psychotherapy: {},
							blood: {},
						},
						optinal_tx: {
							ct: {
								rmb: {
									partial: {
										personal: '42,184',
										public_corp: '42,184',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							mri: {
								rmb: {
									partial: {
										personal: '89,559',
										public_corp: '89,559',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							pet: {},
							ultrasonic: {
								rmb: {
									partial: {
										personal: '',
										public_corp: '',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
							prosthetic_iron: {},
						},
						etx: {
							medical_care_benefits: {
								rmb: {
									partial: {
										personal: '2,288',
										public_corp: '572',
									},
									all: {
										personal: '',
									},
								},
								non_rmb: {
									option: '',
									etc: '',
								},
							},
						},
					},
					charge: {
						rmb_patient_partial: '480,905', // 급여 > 일부 본인부담 > 본인부담금 합계
						rmb_hira: '319,796', // 급여 > 일부 본인부담 > 공단부담금 합계
						rmb_patient_all: '', // 급여 > 전액 본인부담 합계
						non_rmb_option: '', // 비급여 > 선택진료료	합계
						non_rmb_etc: '10,560', // 비급여 > 선택진료료 외	합계
						max_shares: '', // 상한액 초과금
						expanses_total: '511,260', // 진료비 총액
						patient_total: '191,460', // 환자부담 총액
						patient_done: '', // 이미 납부한 금액
						patient_yet: '191,460', // 납부할 금액
						payment: {
							// 납부한 금액
							credit: '191,460', // 납부한 금액 > 카드, 현금영수증, 현금, 합계
							cash: '',
							hometax: '',
							total: '191,460',
						},
					},
				},
			},
			charge: {
				rmb: {
					partial: {
						personal: '',
						public_corp: '',
					},
					all: {
						personal: '',
					},
				},
				non_rmb: {
					option: '',
					etc: '',
				},
			},
		};
	},
	methods: {
		print() {
			this.isPrint = true;
			setTimeout(() => {
				this.printDiv = document.all('receipt');
				var p = window.open('receipt.html', '_blank');
				p.document.write(
					'<!DOCTYPE html>' +
						'<html>' +
						'<head>' +
						'<style>' +
						getReceiptPrintStyle() +
						' </style>' +
						'</head>' +
						'<body>' +
						this.printDiv.innerHTML +
						'</body>' +
						'</html>',
				);
				p.document.close();
				p.focus();
				p.window.print();
				//p.close();
				this.isPrint = false;
			}, 1000);
		},
	},
};
</script>
