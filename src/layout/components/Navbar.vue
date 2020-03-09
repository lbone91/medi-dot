<template>
	<div class="navbar fixed-header" style="display:block;padding:0">
		<hamburger
			:is-active="sidebar.opened"
			class="hamburger-container"
			@toggleClick="toggleSideBar"
		/>
		<breadcrumb class="breadcrumb-container" />
		<div class="right-menu">
			<span>
				<el-button
					@click="setMsgModal()"
					icon="el-icon-message"
					circle
					style="border: none; font-size: 22px;"
				></el-button>
			</span>
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper">
					<img :src="avatar" class="user-avatar" />
					<span class="avatar-name">{{ user.name }} / {{ user.title }}</span>

					<i class="el-icon-caret-bottom" />
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item style="cursor: default">
						<div class="user-dropdown">
							<el-row :gutter="30" style="padding:20px">
								<el-col :span="10" class="text-center">
									<el-avatar :size="70" :src="avatar" />
									<router-link to="/profile">
										<el-button
											style="padding-left: 8px; padding-right: 8px;"
											size="small"
											plain
											>프로필 수정</el-button
										>
									</router-link>
								</el-col>
								<el-col :span="14" class="profile-info">
									<div class="name">
										<span>{{ user.name }}</span>
									</div>
									<div class="title">
										<span>{{ user.title }}</span>
									</div>
									<div class="projectid">
										<el-tooltip
											class="item"
											effect="dark"
											:content="projectInfo.serial_num"
											placement="top"
										>
											<p class="project-info">
												{{ projectInfo.serial_num }}
											</p>
										</el-tooltip>
									</div>
									<div class="userid">
										<span>{{ user.login_id }}</span>
									</div>
								</el-col>
							</el-row>
						</div>
					</el-dropdown-item>

					<el-dropdown-item divided>
						<span style="display:block;text-align:center;" @click="logout"
							>로그아웃</span
						>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<el-drawer
			title="메세지 보내기"
			:show-close="false"
			:visible.sync="isMsgModal"
			direction="rtl"
			:size="pushSize"
		>
			<div class="m-4 px-3">
				<el-button type="info" @click="openInnerDrawer">수신자 선택</el-button>
				<el-drawer
					title="수신자 선택하기"
					:show-close="false"
					:append-to-body="true"
					:visible.sync="innerDrawer"
				>
					<div class="row text-center m-4">
						<el-table
							ref="multipleTable"
							:data="subjects"
							height="600"
							style="width:100%;"
							size="mini"
							@selection-change="handleSelectionChange"
						>
							<el-table-column type="selection" width="55"> </el-table-column>
							<el-table-column label="ID" property="serial_num">
							</el-table-column>
							<el-table-column
								label="중재군"
								:filters="cohorts"
								:filter-method="filterHandler"
								property="cohort_name"
							>
							</el-table-column>
							<el-table-column
								label="상태"
								property="subject_status_name"
								width="100"
							>
							</el-table-column>
						</el-table>
					</div>
					<div class="row my-5 justify-content-center">
						<el-button @click="selectCancle">취소</el-button>
						<el-button type="primary" @click="innerDrawer = false"
							>완료</el-button
						>
					</div>
				</el-drawer>
				<div class="list_box p-2 my-3 bg-light">
					<el-tag
						v-for="tag in multipleSelection"
						@close="handleClose(tag)"
						class="m-1"
						closable
						>{{ tag.serial_num }}</el-tag
					>
				</div>
				<div class="row">
					<div class="col">
						<el-input
							type="text"
							v-model="title"
							placeholder="제목"
							maxlength="20"
							class="mb-4"
							show-word-limit
						></el-input>
						<el-input
							type="textarea"
							v-model="body"
							rows="2"
							placeholder="내용"
							maxlength="100"
							show-word-limit
						></el-input>
					</div>
				</div>
				<div class="row my-5 justify-content-center">
					<el-button @click="isMsgModal = false">취소</el-button>
					<el-button type="primary" @click="pushMessage">전송</el-button>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';
import { getManager, getToken } from '@/utils/auth';
import { getProject } from '@/api/index';
import { getSubjects, getCohorts } from '@/api/subject';
import { pushMessage } from '@/api/subject';
import { ERR_GET_SUBJECT } from '@/utils/error_msg';
import { isMobile } from '@/utils/validate';
import { clone } from '@/utils/clone';
export default {
	components: {
		Breadcrumb,
		Hamburger,
	},
	data() {
		return {
			projectInfo: new Object(),
			user: new Object(),
			avatar: '',
			isMsgModal: false,
			subjects: [],
			cohorts: [],
			type: 1,
			title: '',
			body: '',
			pushSize: '',
			multipleSelection: [],
			tempSelection: [],
			removeSelection: [],
			windowWidth: 0,
			innerDrawer: false,
		};
	},
	computed: {
		...mapGetters('user', ['isUpdate']),
		...mapGetters(['sidebar']),
	},
	watch: {},
	created() {
		if (isMobile()) {
			this.pushSize = '100%';
		} else {
			this.pushSize = '30%';
		}
		this.getProject();
		this.user = getManager();
		if (this.user.profile_file_name === 'medi_profile1.png') {
			this.avatar = require('../../assets/medi_profile1.png');
		} else if (this.user.profile_file_name === 'medi_profile2.png') {
			this.avatar = require('../../assets/medi_profile2.png');
		} else if (this.user.profile_file_name === 'medi_profile3.png') {
			this.avatar = require('../../assets/medi_profile3.png');
		} else if (this.user.profile_file_name === 'medi_profile4.png') {
			this.avatar = require('../../assets/medi_profile4.png');
		} else {
			this.avatar = '';
		}
		this.setManagerInfo();
	},
	methods: {
		setManagerInfo() {
			let _this = this;
			setInterval(function() {
				if (getToken() !== null) {
					_this.user = getManager();
					if (_this.user.profile_file_name === 'medi_profile1.png') {
						_this.avatar = require('../../assets/medi_profile1.png');
					} else if (_this.user.profile_file_name === 'medi_profile2.png') {
						_this.avatar = require('../../assets/medi_profile2.png');
					} else if (_this.user.profile_file_name === 'medi_profile3.png') {
						_this.avatar = require('../../assets/medi_profile3.png');
					} else if (_this.user.profile_file_name === 'medi_profile4.png') {
						_this.avatar = require('../../assets/medi_profile4.png');
					} else {
						_this.avatar = '';
					}
				}
			}, 1000);
		},
		toggleSideBar() {
			this.$store.dispatch('app/toggleSideBar');
		},
		setMsgModal() {
			this.getSubjects();
		},
		getSubjects() {
			const promise = new Promise((resolve, reject) => {
				getCohorts()
					.then(res => {
						resolve(res);
					})
					.catch(e => {
						this.$message({
							type: 'info',
							message: '중재군 정보를 가져올 수 없습니다.',
						});
					});
			});
			promise
				.then(res => {
					this.cohorts = [];
					for (let i = 0; i < res.cohorts.length; i++) {
						this.cohorts.push({
							text: res.cohorts[i].name,
							value: res.cohorts[i].name,
						});
					}
					return getSubjects('?order_by=serial_num asc&subject_status=2');
				})
				.then(res => {
					this.subjects = res.subjects;
					this.isMsgModal = true;
				})
				.catch(e => {
					if (e.response.data.code !== 30007) {
						this.$message({
							type: 'info',
							message: ERR_GET_SUBJECT,
						});
					}
					this.subjects = new Array();
				});
		},
		pushMessage() {
			if (this.multipleSelection.length === 0) {
				this.$message({
					type: 'info',
					message: '대상자를 선택해주세요.',
				});
			} else if (this.title === null || this.title === '') {
				this.$message({
					type: 'info',
					message: '제목을 입력해주세요.',
				});
			} else if (this.body === null || this.body === '') {
				this.$message({
					type: 'info',
					message: '내용을 입력해주세요.',
				});
			} else {
				this.$msgbox({
					title: 'Message',
					message: '푸시 메세지를 전송 하시겠습니까?',
					showCancelButton: true,
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					beforeClose: (action, instance, done) => {
						if (action === 'confirm') {
							let pushSubjects = [];
							for (let i = 0; i < this.multipleSelection.length; i++) {
								pushSubjects.push(this.multipleSelection[i].uuid);
							}
							let message = new Object();
							message.receiver = pushSubjects;
							message.title = this.title;
							message.body = this.body;
							let msg =
								'총 ' +
								message.receiver.length +
								'명의 대상자에게 푸시 메시지를 전송했습니다.';
							pushMessage(message)
								.then(res => {
									this.$message({
										type: 'info',
										message: msg,
									});
									this.title = null;
									this.body = null;
								})
								.catch(e => {
									this.$message({
										type: 'info',
										message: '푸시 메세지 전송에 실패했습니다.',
									});
								});
							done();
						} else {
							done();
						}
					},
				});
			}
		},
		async logout() {
			this.$msgbox({
				title: 'Message',
				message: '로그아웃 하시겠습니까?',
				showCancelButton: true,
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						sessionStorage.clear();
						this.$router.push({
							name: 'login',
						});
						done();
					} else {
						done();
					}
				},
			});
		},
		getProject() {
			getProject().then(res => {
				this.projectInfo = res;
			});
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		handleClose(tag) {
			this.removeSelection.push(tag);
			this.multipleSelection.splice(this.multipleSelection.indexOf(tag), 1);
		},
		clearSelection() {
			this.$refs.multipleTable.clearSelection();
			this.innerDrawer = false;
		},
		selectCancle() {
			this.multipleSelection = clone(this.tempSelection);
			this.innerDrawer = false;
		},
		openInnerDrawer() {
			this.tempSelection = clone(this.multipleSelection);
			this.toggleSelection(this.removeSelection);
			this.removeSelection = [];
			this.innerDrawer = true;
		},
		filterHandler(value, row, column) {
			const property = column['property'];
			return row[property] === value;
		},
		getWindowWidth() {
			this.windowWidth = document.documentElement.clientWidth;
		},
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowWidth);

			//Init
			this.getWindowWidth();
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowWidth);
	},
	watch: {
		windowWidth: function() {
			if (this.windowWidth > 1261) {
				this.pushSize = '30%';
			} else if (this.windowWidth <= 1261 && this.windowWidth > 1005) {
				this.pushSize = '45%';
			} else if (this.windowWidth <= 1005 && this.windowWidth > 767) {
				this.pushSize = '65%';
			} else {
				this.pushSize = '90%';
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	height: 50px;
	overflow: hidden;
	position: relative;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	.hamburger-container {
		line-height: 46px;
		height: 100%;
		float: left;
		cursor: pointer;
		transition: background 0.3s;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}
	}

	.breadcrumb-container {
		float: left;
	}

	.right-menu {
		float: right;
		height: 100%;
		padding-right: 50px;
		line-height: 50px;

		&:focus {
			outline: none;
		}

		// .right-menu-item {
		// 	display: inline-block;
		// 	padding: 0 8px;
		// 	height: 100%;
		// 	font-size: 18px;
		// 	color: #5a5e66;
		// 	vertical-align: text-bottom;

		// 	&.hover-effect {
		// 		cursor: pointer;
		// 		transition: background 0.3s;

		// 		&:hover {
		// 			background: rgba(0, 0, 0, 0.025);
		// 		}
		// 	}
		// }

		.avatar-container {
			.avatar-wrapper {
				margin-top: 5px;
				position: relative;

				.user-avatar {
					cursor: pointer;
					background: #c0c4cc;
					width: 40px;
					height: 40px;
					border-radius: 25px;
					vertical-align: top;
				}

				.el-icon-caret-bottom {
					cursor: pointer;
					position: absolute;
					right: -20px;
					top: 20px;
				}
			}
		}
	}
}

.user-dropdown {
	width: 280px;

	.profile-info {
		line-height: 1.9;
		padding-left: 8px !important;
		.name {
			margin: auto;
			font-size: 20px;
			font-weight: bold;
		}
		.title {
			color: #409eff;
			font-weight: bold;
		}
	}
}

.el-row {
	margin-bottom: 0px;
	&:last-child {
		margin-bottom: 0;
	}
}
.project-info {
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 0px;
}
.el-table {
	font-size: 14px;
}
.list_box {
	height: 130px;
	overflow-x: hidden;
}
</style>
