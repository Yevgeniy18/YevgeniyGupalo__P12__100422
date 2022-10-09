export default class FormatDataClass {
	/********************* BAR CHART Calories/Weight ********************/

	/**
	 * 
	 * @param {*} data 
	 * @returns {Number}
	 */
	getMaxWeight(data) {
		const weightNums = data.map((object) => {
			return object.kilogram;
		});
		const max = Math.max(...weightNums);
		return max;
	}
	/**
	 * 
	 * @param {*} data 
	 * @returns {Number}
	 */
	getMinWeight(data) {
		const weightNums = data.map((object) => {
			return object.kilogram;
		});
		const min = Math.min(...weightNums);
		return min;
	}

	/**
	 * 
	 * @param {*} data 
	 * @returns {data} Sortes by day
	 */

	formatSessionData(data) {
		data.forEach((elt) => {
			elt.day = new Date(elt.day).getDay();
			elt.day = elt.day + 1;
		});
		return data.sort((a, b) => a.day - b.day);
	}

	/************************************************************************/

	/********************* RADAR CHART Indicators ********************/

	/**
		 * 
		 * @param {*} data 
		 * @returns {newData} new array with merged and foramatted elements
		 */
	formatPerformance(data) {
		const indicators = { 1: 'cardio', 2: 'energie', 3: 'endurance', 4: 'force', 5: 'vitesse', 6: 'intensité' };
		const newIndicators = Object.entries(indicators);

		const newKind = Object.entries(data.kind);
		const newData = data.data;

		newKind.forEach(([ key, value ]) => {
			newData.forEach((elt) => {
				if (parseInt(key) === elt.kind) {
					elt['name'] = value;
				}
			});
		});

		newIndicators.forEach(([ key, value ]) => {
			newData.forEach((elt) => {
				if (parseInt(key) === elt.kind) {
					elt.name = value;
				}
			});
		});

		newData.forEach((elt) => {
			elt.name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1).toLowerCase();
		});

		return newData;
	}

	/************************************************************************/

	/********************* LINE CHART Average Session ********************/

	/**
	 * 
	 * @param {*} data 
	 * @returns {data}
	 * Creating a new object with formatted elements
	 */
	formatSessions(data) {
		const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

		const arrDays = Object.entries(days);

		for (let elt = 0; elt < data.length; elt++) {
			for (let i = 0; i < arrDays.length; i++) {
				if (data[elt].day === parseInt(arrDays[i][0])) {
					data[elt].day = arrDays[i][1];
				}
			}
		}
		const minValue = { day: '', sessionLength: 10 };
		data.unshift(minValue);

		const maxValue = { day: '', sessionLength: 80 };
		data.push(maxValue);

		return data;
	}

	/************************************************************************/

	/********************* Radial CHART Score ********************/
	/**
	 * 
	 * @param {*} data 
	 * @returns {newData}
	 * Transforming the exisitng object so that the values could be used easier 
	 */
	formatMainData(data) {
		const newData = { ...data };
		newData['scores'] = [];

		if (newData.score) {
			newData.score = newData.score * 100;
			const newScore = { uv: newData.score, fill: '#FF0000' };
			newData['scores'].push(newScore);
			return newData;
		} else if (newData.todayScore) {
			newData.todayScore = newData.todayScore * 100;
			const newScore = { uv: newData.todayScore, fill: '#FF0000' };
			newData['scores'].push(newScore);
			return newData;
		} else {
			return;
		}
	}

	/************************************************************************/
}
