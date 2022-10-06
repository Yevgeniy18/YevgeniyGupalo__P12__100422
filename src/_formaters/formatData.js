export default class FormatDataClass {
	/********************* BAR CHART Calories/Weight ********************/

	/***** Retreiving main data for the CaloriesSpent/Weight Chart *****/

	/***** Getting Max and Min Weight *****/
	getMaxWeight(data) {
		const weightNums = data.map((object) => {
			return object.kilogram;
		});
		const max = Math.max(...weightNums);
		return max;
	}

	getMinWeight(data) {
		const weightNums = data.map((object) => {
			return object.kilogram;
		});
		const min = Math.min(...weightNums);
		return min;
	}

	formatSessionData(data) {
		data.forEach((elt) => {
			elt.day = new Date(elt.day).getDay();
			elt.day = elt.day + 1;
		});
		return data.sort((a, b) => a.day - b.day);
	}

	/************************************************************************/

	/********************* RADAR CHART Indicators ********************/

	formatPerformance(data) {
		const indicators = { 1: 'cardio', 2: 'energie', 3: 'endurance', 4: 'force', 5: 'vitesse', 6: 'intensité' };
		const newIndicators = Object.entries(indicators);

		const newKind = Object.entries(data.kind);
		const newData = data.data;
		/** Merging Existing data so that it can be used easier when rendering the radar chart **/

		newKind.forEach(([ key, value ]) => {
			newData.forEach((elt) => {
				if (parseInt(key) === elt.kind) {
					elt['name'] = value;
				}
			});
		});

		/* Setting French wording for performance indicators */

		newIndicators.forEach(([ key, value ]) => {
			newData.forEach((elt) => {
				if (parseInt(key) === elt.kind) {
					elt.name = value;
				}
			});
		});

		/****** Setting the first letter to uppercase ******/

		newData.forEach((elt) => {
			elt.name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1).toLowerCase();
		});

		return newData;
	}

	/************************************************************************/

	/********************* LINE CHART Average Session ********************/

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

	formatMainData(data) {
		const newData = { ...data };
		newData['scores'] = [];
		newData.todayScore = newData.todayScore * 100;
		const newScore = { uv: newData.todayScore, fill: '#FF0000' };
		newData['scores'].push(newScore);
		delete newData.todayScore;
		return newData;
	}

	/************************************************************************/
}
