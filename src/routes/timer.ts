export default function Timer(target: string|number|Date, now: string|number|Date):number[] {
    const date2 = new Date(target);
	const date1 = new Date(now)
	const s1 = date1.getTime(),
		s2 = date2.getTime();
	const total = (s2 - s1) / 1000;
	const day = Math.floor(total / (24 * 60 * 60)); //计算整数天数
	const afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
	const hour = Math.floor(afterDay / (60 * 60)); //计算整数小时数
	const afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的分数
	const min = Math.floor(afterHour / 60); //计算整数分
	const afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
    const second = Math.floor(afterMin)
    return [day, hour, min, second]
}