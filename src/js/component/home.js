import React, { useState } from "react";

export function Example() {
	// Declare a new state variable, which we'll call "count"
	const [pay, setPay] = useState(800);
	const [week, setWeek] = useState(1);

	return (
		<div className="payContainer text-center mt-5 text-monospace text-uppercase">
			<p>
				Week {week} your total pay was {pay} dollars.
			</p>
			<button
				class="btn btn-danger"
				onClick={() => {
					setPay(pay + 800);
					setWeek(week + 1);
				}}>
				Click me
			</button>
		</div>
	);
}
