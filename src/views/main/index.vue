<template>
	<div class="perscription-container">
		<div style="text-align: center">
			<p class="font-weight-bold">PSG 처방전 모바일 전송 데모 프로그램</p>
		</div>
		<div v-if="mode === 1">
			<el-form label-position="left" label-width="100px">
				<!-- 환자 -->
				<label style="font-size: 15px;">기본 정보</label>
				<el-form-item class="mb-1" label="날짜" label-width="150px">
					<el-date-picker v-model="date" type="date"> </el-date-picker>
				</el-form-item>
				<el-form-item class="mb-1" label="교부번호" label-width="150px">
					<el-input v-model="perscription.patient.issue_number"></el-input>
				</el-form-item>
				<el-divider></el-divider>

				<label style="font-size: 15px;">의료기관 정보</label>
				<el-form-item class="mb-1" label="명칭" label-width="150px">
					<el-input v-model="perscription.hospital.name"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="전화번호" label-width="150px">
					<el-input v-model="perscription.hospital.tel"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="팩스번호" label-width="150px">
					<el-input v-model="perscription.hospital.fax"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="e-mail주소" label-width="150px">
					<el-input v-model="perscription.hospital.email"></el-input>
				</el-form-item>
				<el-divider></el-divider>

				<label style="font-size: 15px;">의료인 정보</label>
				<el-form-item class="mb-1" label="처방 의료인 성명" label-width="150px">
					<el-input v-model="perscription.hospital.doctor"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="면허종별" label-width="150px">
					<el-input v-model="perscription.hospital.license_type"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="면허번호" label-width="150px">
					<el-input v-model="perscription.hospital.license_number"></el-input>
				</el-form-item>
				<el-divider></el-divider>

				<label style="font-size: 15px;">환자 정보</label>
				<el-form-item class="mb-1" label="환자명" label-width="150px">
					<el-input v-model="perscription.patient.name"></el-input>
				</el-form-item>
				<el-form-item class="mb-1" label="주민등록번호" label-width="150px">
					<el-input v-model="perscription.patient.RRN"></el-input>
				</el-form-item>
				<el-divider></el-divider>

				<label style="font-size: 15px;">처방 의약품 정보</label>
				<div style="margin-bottom: 20px;">
					<el-button size="small" @click="addTab()">
						의약품 추가
					</el-button>
				</div>
				<el-tabs type="card" closable @tab-remove="removeTab">
					<el-tab-pane
						v-for="medicine in perscription.medicines"
						:key="medicine.uk"
						label="의약품"
						:name="'m-' + medicine.uk"
					>
						<el-form-item class="mb-1" label="의약품" label-width="150px">
							<el-select
								v-model="medicine.number"
								filterable
								placeholder="Select"
								style="width: 100%"
							>
								<el-option
									v-for="item in medicines"
									:key="item.number"
									:label="item.name"
									:value="item.number"
								>
									<span style="float: left">{{ item.name }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{
										item.number
									}}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item class="mb-1" label="1회 투약량" label-width="150px">
							<el-input v-model="medicine.day1"></el-input>
						</el-form-item>
						<el-form-item class="mb-1" label="1일 투여횟수" label-width="150px">
							<el-input v-model="medicine.perday"></el-input>
						</el-form-item>
						<el-form-item class="mb-1" label="총 투약일수" label-width="150px">
							<el-input v-model="medicine.period"></el-input>
						</el-form-item>
						<el-form-item class="mb-1" label="용법" label-width="150px">
							<el-input v-model="medicine.help"></el-input>
						</el-form-item>
					</el-tab-pane>
				</el-tabs>
				<el-divider></el-divider>

				<el-form-item class="mb-1" label="조제시 참고사항" label-width="150px">
					<el-input type="textarea" :rows="5" v-model="perscription.comment">
					</el-input>
				</el-form-item>
				<el-divider></el-divider>
			</el-form>
			<div class="row">
				<div class="col text-right">
					<el-button @click="resetPerscription">초기화</el-button>
					<el-button @click="createPerscription">처방전 생성</el-button>
				</div>
			</div>
		</div>
		<div v-if="mode === 2">
			<div class="row text-right">
				<div class="col">
					<el-button size="mini" @click="printPerscription">출력</el-button>

					<el-button size="mini" @click="mode = 1">뒤로가기</el-button>
				</div>
			</div>
			<div class="perscription" :style="styleObject">
				<input
					type="text"
					readonly
					class="input-color"
					v-model="year"
					style="width: 28px; font-size: 12px; position: absolute; top: 194.5px; left: 204px; "
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="month"
					style="width: 15px; font-size: 12px; position: absolute; top: 194.5px; left: 253px; "
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="day"
					style="width: 15px; font-size: 12px; position: absolute; top: 194.5px; left: 286px; "
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.patient.issue_number"
					style="width: 34px; font-size: 12px; position: absolute; top: 194.5px; left: 351px; "
				/>

				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.patient.name"
					style="width: 200px; height: 45px; font-size: 15px; position: absolute; top: 220px; left: 198px;"
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.patient.RRN"
					style="width: 200px;  font-size: 12px; position: absolute; top: 272px; left: 198px; "
				/>
				<input
					type="text"
					readonly
					v-model="perscription.hospital.name"
					class="input-color hospital-info"
					style="top: 194.5px;"
				/>
				<input
					type="text"
					readonly
					v-model="perscription.hospital.tel"
					class="input-color hospital-info"
					style="top: 220.5px; "
				/>
				<input
					type="text"
					readonly
					v-model="perscription.hospital.fax"
					class="input-color hospital-info"
					style="top: 247.5px; "
				/>
				<input
					type="text"
					readonly
					v-model="perscription.hospital.email"
					class="input-color hospital-info"
					style="top: 271.5px; "
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.hospital.doctor"
					style="width: 204px; height: 58px; font-size: 15px; position: absolute; top: 298px; left: 298px; "
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.hospital.license_type"
					style="width: 151px;  height: 25px; font-size: 12px; position: absolute; top: 298px; left: 571px;"
				/>
				<input
					type="text"
					readonly
					class="input-color"
					v-model="perscription.hospital.license_number"
					style="width: 45px; height: 25px; font-size: 12px; position: absolute; top: 330px; left: 611px;"
				/>

				<!-- medicines name -->
				<input
					type="text"
					readonly
					v-model="perscription.medicines[i].name"
					:class="'input-color medicines-name medicines-' + i"
					v-for="(item, i) in perscription.medicines"
				/>
				<!-- medicines day1 -->
				<input
					type="text"
					readonly
					v-model="perscription.medicines[i].day1"
					:class="'input-color medicines-day1 medicines-' + i"
					v-for="(item, i) in perscription.medicines"
				/>
				<!-- medicines perday -->
				<input
					type="text"
					readonly
					v-model="perscription.medicines[i].perday"
					:class="'input-color medicines-perday medicines-' + i"
					v-for="(item, i) in perscription.medicines"
				/>
				<!-- medicines perday -->

				<input
					type="text"
					readonly
					v-model="perscription.medicines[i].period"
					:class="'input-color medicines-period medicines-' + i"
					v-for="(item, i) in perscription.medicines"
				/>
				<!-- medicines perday -->
				<input
					type="text"
					readonly
					v-model="perscription.medicines[i].help"
					:class="'input-color medicines-help medicines-' + i"
					v-for="(item, i) in perscription.medicines"
				/>

				<!-- comment -->
				<el-input
					type="textarea"
					readonly
					:rows="5"
					style="width: 150px; font-size: 12px; position: absolute; top: 734px; left: 571px;"
					v-model="perscription.comment"
				>
				</el-input>
			</div>
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
	created() {
		this.oriPerscription = JSON.parse(JSON.stringify(this.perscription));
	},
	watch: {
		date: function() {
			this.perscription.patient.date = this.getFormatDate(this.date);
			this.year = this.perscription.patient.date.split('-')[0];
			this.month = this.perscription.patient.date.split('-')[1];
			this.day = this.perscription.patient.date.split('-')[2];
		},
	},
	data() {
		return {
			date: '2020-01-09',
			year: '2020',
			month: '01',
			day: '09',
			mode: 1,
			uk: 2,
			medicines: [
				{
					number: '643704291',
					name: '큐알론점안액0.15%/0.39mL/관',
				},
				{
					number: '644101961',
					name: '프라노푸린점안액(외/5mL/병',
				},
			],
			tempPerscription: {},
			oriPerscription: {},
			perscription: {
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
					email: 'test@test.com',
					doctor: '한승훈',
					license_type: '의사',
					license_number: '44351',
				},
				medicines: [
					{
						uk: 0,
						number: '643704291',
						name: '큐알론점안액0.15%/0.39mL/관',
						day1: '60',
						perday: '1',
						period: '1',
						help: '1일 수회 점안(필요시 점안)',
					},
					{
						uk: 1,
						number: '644101961',
						name: '프라노푸린점안액(외/5mL/병',
						day1: '1',
						perday: '1',
						period: '1',
						help: '1일 4회 점안',
					},
				],
				comment: null,
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
						// this.parseData();
						// this.perscription = JSON.parse(
						// 	JSON.stringify(this.tempPerscription),
						// );
						sendPerscription(this.parseData())
							.then(res => {
								this.perscription = JSON.parse(
									JSON.stringify(this.tempPerscription),
								);
							})
							.catch(e => {
								this.perscription = JSON.parse(
									JSON.stringify(this.tempPerscription),
								);
							});
						done();
					} else {
						done();
					}
				},
			});
		},
		createPerscription() {
			for (let i = 0; i < this.perscription.medicines.length; i++) {
				for (let j = 0; j < this.medicines.length; j++) {
					if (
						this.perscription.medicines[i].number === this.medicines[j].number
					) {
						this.perscription.medicines[i].name = this.medicines[j].name;
					}
				}
			}
			this.mode = 2;
		},
		parseData() {
			this.tempPerscription = JSON.parse(JSON.stringify(this.perscription));

			for (let i = this.perscription.medicines.length - 1; i >= 0; i--) {
				if (
					this.perscription.medicines[i].name === null ||
					this.perscription.medicines[i].name === ''
				) {
					this.perscription.medicines.splice(i, 1);
				}
			}
			console.log(JSON.stringify(this.perscription));
			return JSON.stringify(this.perscription);
		},
		resetPerscription() {
			this.$msgbox({
				title: 'Message',
				message: '처방전을 초기화 하시겠습니까?',
				showCancelButton: true,
				confirmButtonText: '네',
				cancelButtonText: '아니오',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						this.perscription = JSON.parse(
							JSON.stringify(this.oriPerscription),
						);
						done();
					} else {
						done();
					}
				},
			});
		},
		addTab() {
			if (this.perscription.medicines.length > 9) {
				this.$message({
					type: 'info',
					message: '의약품은 최대 10개 까지만 생성 가능합니다.',
				});
			} else {
				this.perscription.medicines.push({
					uk: this.uk,
					number: null,
					name: null,
					day1: null,
					perday: null,
					period: null,
					help: null,
				});
				this.uk++;
			}
		},
		removeTab(targetName) {
			for (let i = 0; i < this.perscription.medicines.length; i++) {
				if (
					parseInt(targetName.split('-')[1]) ===
					parseInt(this.perscription.medicines[i].uk)
				) {
					this.perscription.medicines.splice(i, 1);
				}
			}
		},
		getFormatDate(date) {
			var year = date.getFullYear(); //yyyy
			var month = 1 + date.getMonth(); //M
			month = month >= 10 ? month : '0' + month; //month 두자리로 저장
			var day = date.getDate(); //d
			day = day >= 10 ? day : '0' + day; //day 두자리로 저장
			return year + '-' + month + '-' + day;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perscription-container {
	width: 900px;
	padding: 20px 50px;
	position: absolute;
	left: 300px;
}
.perscription {
	left: 50px;
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
.medicines-name {
	width: 313px;
	font-size: 12px;
	position: absolute;
	left: 84px;
	height: 23px;
}
.medicines-day1 {
	width: 25px;
	font-size: 12px;
	position: absolute;
	left: 420px;
	height: 23px;
}
.medicines-perday {
	width: 25px;
	font-size: 12px;
	position: absolute;
	left: 472px;
	height: 23px;
}
.medicines-period {
	width: 25px;
	font-size: 12px;
	position: absolute;
	left: 523px;
	height: 23px;
}
.medicines-help {
	width: 150px;
	font-size: 12px;
	position: absolute;
	left: 570px;
	height: 23px;
}
.input-color {
	background-color: none;
}
.medicines-0 {
	top: 437px;
}
.medicines-1 {
	top: 466px;
}
.medicines-2 {
	top: 494px;
}
.medicines-3 {
	top: 521px;
}
.medicines-4 {
	top: 548.5px;
}
.medicines-5 {
	top: 575px;
}
.medicines-6 {
	top: 602.5px;
}
.medicines-7 {
	top: 630.1px;
}
.medicines-8 {
	top: 657px;
}
.medicines-9 {
	top: 682px;
}

.select-height {
	height: 15px !important;
}
</style>
