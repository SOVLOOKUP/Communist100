<script>
	import Timer from './timer';
	const target = '2021/07/01 00:00:00';
	let timeNow = Date.now();
	
	setInterval(() => {
		timeNow = Date.now();
	}, 1000);

	$: [day, hour, min, sec] = Timer(target, timeNow);
	$: date = new Date(timeNow)
</script>

<main class="main">
	<div class="title">
		<span class="text-title">{`${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`}</span>
		<span class="text-title">距建党100周年</span>
	</div>
	<div class="timer">
		<span class="text-timer"> {day} 天 {hour} 时 {min} 分 {sec} 秒</span>
	</div>
</main>

<style>
	@font-face {
		font-family: sjbsjt;
		src: url('/static/font/sjbsjt.ttf');
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
		position: relative;
		bottom: -57%;
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
		background-image: url('/static/background/竖屏B/back.jpg');
	}
</style>
