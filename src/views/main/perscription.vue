<template>
	<div class="perscription-container">
		<div style="text-align: center">
			<p>PSG 처방전 모바일 전송 데모 프로그램</p>
			<input type="button" value="출력" @click="printPerscription" />
		</div>
		<div class="perscription" :style="styleObject">
			<input
				type="text"
				v-model="year"
				style="width: 28px; font-size: 12px; position: absolute; top: 194.5px; left: 204px;"
			/>
			<input
				type="text"
				v-model="month"
				style="width: 15px; font-size: 12px; position: absolute; top: 194.5px; left: 253px;"
			/>
			<input
				type="text"
				v-model="day"
				style="width: 15px; font-size: 12px; position: absolute; top: 194.5px; left: 286px;"
			/>
			<input
				type="text"
				v-model="prescription.patient.issue_number"
				style="width: 34px; font-size: 12px; position: absolute; top: 194.5px; left: 351px;"
			/>

			<input
				type="text"
				v-model="prescription.patient.name"
				style="width: 200px; height: 45px; font-size: 15px; position: absolute; top: 220px; left: 198px;"
			/>
			<input
				type="text"
				v-model="prescription.patient.RRN"
				style="width: 200px;  font-size: 12px; position: absolute; top: 272px; left: 198px;"
			/>
			<input
				type="text"
				v-model="prescription.hospital.name"
				class="hospital-info"
				style="top: 194.5px;"
			/>
			<input
				type="text"
				v-model="prescription.hospital.tel"
				class="hospital-info"
				style="top: 220.5px; "
			/>
			<input
				type="text"
				v-model="prescription.hospital.fax"
				class="hospital-info"
				style="width: 210px; font-size: 12px; position: absolute; top: 247.5px; left: 511px;"
			/>
			<input
				type="text"
				v-model="prescription.hospital.doctor"
				style="width: 200px; height: 52px; font-size: 15px; position: absolute; top: 300px; left: 298px;"
			/>
			<input
				type="text"
				v-model="prescription.hospital.license_type"
				style="width: 150px; font-size: 12px; position: absolute; top: 300.5px; left: 571px;"
			/>
			<input
				type="text"
				v-model="prescription.hospital.license_number"
				style="width: 45px; font-size: 12px; position: absolute; top: 333.5px; left: 611px;"
			/>

			<!-- mecidines name -->
			<input
				type="text"
				v-model="prescription.mecidines[0].name"
				class="mecidines-name mecidines-0"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[1].name"
				class="mecidines-name mecidines-1"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[2].name"
				class="mecidines-name mecidines-2"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[3].name"
				class="mecidines-name mecidines-3"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[4].name"
				class="mecidines-name mecidines-4"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[5].name"
				class="mecidines-name mecidines-5"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[6].name"
				class="mecidines-name mecidines-6"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[7].name"
				class="mecidines-name mecidines-7"
			/>
			<input
				type="text"
				v-model="prescription.mecidines[8].name"
				class="mecidines-name mecidines-8"
			/>

			<!-- mecidines day1 -->
			<input
				type="text"
				v-model="prescription.mecidines[0].day1"
				class="mecidines-day1 mecidines-0"
			/>
		</div>
	</div>
</template>

<script>
import { sendPerscription } from '@/api/index';
export default {
	computed: {
		styleObject() {
			return {
				'background-image': `url(${require('../../assets/perscription.png')})`,
				'background-repeat': 'no-repeat',
				'background-size': 'cover',
				position: 'absolute',
			};
		},
	},
	data() {
		return {
			year: '2020',
			month: '01',
			day: '09',
			prescription: {
				patient: {
					date: '2020-01-09',
					issue_number: '13006',
					name: '오병엽',
					RRN: '770820-1234567',
				},
				hospital: {
					name: '삼성안과',
					tel: '02-442-5181',
					fax: '02-442-5183',
					doctor: '한승훈',
					license_type: '의사',
					license_number: '44351',
				},
				mecidines: [
					{
						number: '643704291',
						name: '큐알론점안액0.15%/0.39mL/관',
						day1: '60',
						perday: '1',
						period: '1',
						help: '1일 수회 점안(필요시 점안)',
					},
					{
						number: '644101961',
						name: '프라노푸린점안액(외/5mL/병',
						day1: '1',
						perday: '1',
						period: '1',
						help: '1일 4회 점안',
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
					{
						number: null,
						name: null,
						day1: null,
						perday: null,
						period: null,
						help: null,
					},
				],
				dummy: '결제금액 1100',
			},
		};
	},
	methods: {
		printPerscription() {
			this.$msgbox({
				title: 'Message',
				message: '처방전을 출력 하시겠습니까?',
				showCancelButton: true,
				confirmButtonText: '네',
				cancelButtonText: '아니오',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						let data = this.prescription;
						sendPerscription(data)
							.then(res => {
								//
							})
							.catch(e => {
								//
							});
						done();
					} else {
						done();
					}
				},
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perscription-container {
	width: 100%;
	padding: 20px 50px;
}
.perscription {
	margin: auto;
	width: 800px;
	height: 1100px;
}
.hospital-info {
	width: 210px;
	font-size: 12px;
	position: absolute;
	left: 511px;
}
.mecidines-name {
	width: 307px;
	font-size: 12px;
	position: absolute;
	left: 84px;
}
.mecidines-day1 {
	width: 307px;
	font-size: 12px;
	position: absolute;
	left: 84px;
}

.mecidines-0 {
	top: 440.5px;
}
.mecidines-1 {
	top: 469.5px;
}
.mecidines-2 {
	top: 496.5px;
}
.mecidines-3 {
	top: 523.5px;
}
.mecidines-4 {
	top: 550.5px;
}
.mecidines-5 {
	top: 576.5px;
}
.mecidines-6 {
	top: 603.5px;
}
.mecidines-7 {
	top: 630.5px;
}
.mecidines-8 {
	top: 657.5px;
}
</style>
