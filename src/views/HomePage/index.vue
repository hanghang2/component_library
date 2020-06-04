<template>
	<div class="HomePage">
		<div class="home-banner">
			<div>
				<h1>zzComponent</h1>
				<router-link to="/Main">
					<button class="button-primary">开始使用</button>
				</router-link>

				<router-link to="/About">
					<button class="button-clean">查看文档</button>
				</router-link>
			</div>
		</div>
		<div class="home-content">
			<h2>设计</h2>
			<div class="content_item">
				<h3>设计价值观</h3>
				<div class="item_list">
					<div
						class="left"
					>这是 zzComponent 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们有「确定性」、「一致性」、「效率」、「生长性」四个价值观，指引每个设计者做更好地判断和决策。</div>
					<div class="right">
						<div class="imgSrc">
							<div class="con">
								<img src="@/assets/makesure.png" />
							</div>
							<p>确定性</p>
						</div>
						<div class="imgSrc">
							<div class="con">
								<img src="@/assets/yizhi.png" />
							</div>
							<p>一致性</p>
						</div>
						<div class="imgSrc">
							<div class="con">
								<img src="@/assets/xiaolv.png" />
							</div>
							<p>效率</p>
						</div>
						<div class="imgSrc">
							<div class="con">
								<img src="@/assets/shengzhang.png" />
							</div>
							<p>生长性</p>
						</div>
					</div>
				</div>
			</div>
			<div class="content_item2">
				<li>
					<div class="li-list">
						<div class="imgcover">
							<img src="@/assets/imgsrc1.png" />
							<p>界面是用户与系统交互的媒介，是手段而非目的。在追求交互基础上，通过产品界面应是高确定性、低合作熵的状态。</p>
						</div>
					</div>
				</li>
				<li>
					<div class="li-list">
						<div class="imgcover">
							<img src="@/assets/imgsrc2.png" />
							<p>一致的外观和交互，保持面向用户的熟悉感，能提升易学性，降低认知和操作成本，提升工作效率。</p>
						</div>
					</div>
				</li>
				<li>
					<div class="li-list">
						<div class="imgcover">
							<img src="@/assets/imgsrc3.png" />
							<p>设计简洁直观的操作流程；界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
						</div>
					</div>
				</li>
				<li>
					<div class="li-list">
						<div class="imgcover">
							<img src="@/assets/imgsrc4.png" />
							<p>产品功能的增长与用户系统角色的演变相生相伴。设计者应为自己创造的产品负责，提升功能、价值的可发现性。用发展的眼光做设计，充分考虑人、机两端的共同生长。</p>
						</div>
					</div>
				</li>
			</div>
		</div>
		<div class="home-bottom">
			<p>Made with US</p>
		</div>
	</div>
</template>
<style scoped lang="scss">
.HomePage .home-banner {
	height: 400px;
	background: url("../../assets/bg1.jpg");
	background-size: 100% 100%;
	display: flex;
	justify-content: center; /* 水平居中 */
	align-items: center; /* 垂直居中 */
}

.HomePage .home-banner h1 {
	margin-bottom: 50px;
}

.HomePage .home-banner .button-primary {
	height: 40px;
	padding: 5px 25px;
	font-size: 14px;
	border-radius: 15px;
	outline: none;
	border: 0;
	color: #fff;
	background: #0170fe;
	margin: 0 10px;
}

.HomePage .home-banner .button-primary a {
	color: #fff;
	background: #0170fe;
}

.HomePage .home-banner .button-clean {
	height: 40px;
	padding: 5px 25px;
	font-size: 14px;
	border-radius: 15px;
	outline: none;
	border: 0;
	color: #0170fe;
	background: #fff;
	margin: 0 10px;
	border: 1px solid #0170fe;
}

.HomePage .home-banner .button-clean a {
	color: #0170fe;
	background: #fff;
}

.HomePage .home-banner button:hover {
	opacity: 0.7;
}
.home-content {
	max-width: 1200px;
	margin: 0 auto;
}
.home-content h2 {
	margin: 50px 0;
	font-weight: lighter;
	text-align: left;
	font-size: 30px;
}
.home-content .content_item {
	width: 100%;
	padding: 30px 60px;
	min-height: 278px;
	color: #697b8c;
	line-height: 2;
	background: url(../../assets/banner_home.png);
	background-size: cover;
	font-size: 14px;
	.item_list {
		.left {
			width: 30%;
			text-align: left;
			float: left;
			margin-top: 10px;
		}
		.right {
			width: 70%;
			float: left;
			color: #333;
			.imgSrc {
				width: 25%;
				float: left;
				.con {
					width: 128px;
					height: 128px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 auto;
				}
				img {
					width: 100px;
				}
			}
		}
	}
}
.home-content .content_item h3 {
	text-align: left;
	color: #333;
	font-weight: 400;
	font-size: 24px;
}
.content_item2 {
	margin-top: 50px;
	height: 400px;
}
.content_item2 li {
	width: 25%;
	float: left;
	padding: 20px 10px;
	.li-list {
		border: 1px solid #f0f0f0;
		height: 350px;
		&:hover {
			transition: all 0.5s;
			box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
				0 6px 16px 0 rgba(0, 0, 0, 0.08),
				0 9px 28px 8px rgba(0, 0, 0, 0.05);
		}
		.imgcover {
			padding: 24px 24px 0;
			img {
				width: 100%;
				height: 180px;
			}
			p {
				font-size: 14px;
				text-align: left;
				color: #697b8c;
				margin-top: 16px;
			}
		}
	}
}
.home-bottom {
	border-top: 1px solid rgba(255, 255, 255, 0.25);
	width: 100%;
	text-align: center;
	padding: 16px 0;
	line-height: 32px;
	font-size: 16px;
	background-color: #000;
	color: #fff;
}
</style>
