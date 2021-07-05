<script>
	import Timer from './timer';
	let timeNow = Date.now();
	const myText = '国庆安保';
	const target = '2021/10/01 00:00:00';
	const weekDict = {
		1: '一',
		2: '二',
		3: '三',
		4: '四',
		5: '五',
		6: '六',
		7: '日'
	};
	// 补零
	const zeroPlus = (/** @type {number} */ num) => (num > 9 ? num.toString() : '0' + num.toString());

	// 倒计时不小于0
	const getCount = (/** @type {number[] | [any, any, any, any]} */ count) => {
		[day, hour, min, sec] = count;
		return day < 0 ? [0, 0, 0, 0] : [day, hour, min, sec];
	};

	setInterval(() => {
		timeNow = Date.now();
	}, 1000);

	$: [day, hour, min, sec] = getCount(Timer(target, timeNow));
	$: date = new Date(timeNow);
</script>

<main class="main">
	<div class="title">
		<span class="text-title"
			>今日{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 星期${
				weekDict[date.getDay()]
			}`}</span
		>
		<span class="text-title"
			>现在时间 {zeroPlus(date.getHours())}:{zeroPlus(date.getMinutes())}:{zeroPlus(
				date.getSeconds()
			)}</span
		>
	</div>
	<div class="timer">
		<span class="text-title"> 距离{myText} </span>
		<span class="text-timer"> {day} 天 {hour} 时 {min} 分 {sec} 秒</span>
	</div>
</main>

<style>
	@font-face {
		font-family: sjbsjt;
		src: url('https://cdn.jsdelivr.net/gh/sovlookup/Communist100/static/font/sjbsjt.ttf');
	}

	.title {
		position: relative;
		display: flex;
		top: 6%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.timer {
		flex-direction: column;
		position: relative;
		bottom: -40%;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
	}

	.text-title {
		font-family: sjbsjt;
		font-style: normal;
		font-weight: normal;
		font-size: 8vh;
		color: #fdec96;
		text-shadow: 0px 5px 10px rgba(100, 53, 31, 0.7);
	}

	.text-timer {
		font-family: sjbsjt;
		font-style: normal;
		font-weight: normal;
		font-size: 7vh;
		color: #fdec96;
		text-shadow: 0px 5px 10px rgba(100, 53, 31, 0.7);
	}

	.main {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: 100% 100%;
		background-image: url('https://cdn.jsdelivr.net/gh/sovlookup/Communist100@latest/static/background/宽屏A/back.jpg');
	}
</style>
