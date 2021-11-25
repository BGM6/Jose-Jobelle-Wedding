import React, {useState, useEffect, useRef} from 'react';

const Timer = () => {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countDownDate = new Date('November, 13, 2022, 00:00:00').getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				//stop our timer
				clearInterval(interval.current);
			} else {
				//we update
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	},);
	// <span><i className="fas fa-hourglass-start"/></span>

	return (
		<section className="timer-container">
			<section className="timer">
				<div>
					<p>November 12, 2022</p>
				</div>
				<div className="timer-box">
					<section>
						<p>{timerDays}</p>
						<p><small>Days</small></p>
					</section>
					<span>:</span>
					<section>
						<p>{timerHours}</p>
						<p><small>Hours</small></p>
					</section>
					<span>:</span>
					<section>
						<p>{timerMinutes}</p>
						<p><small>Mins</small></p>
					</section>
					<span>:</span>
					<section>
						<p>{timerSeconds}</p>
						<p><small>Secs</small></p>
					</section>
				</div>
			</section>
		</section>
	);
};

export default Timer;