export default class FormatDataClass {
	/********************* BAR CHART ********************/

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

	/********************* RADAR CHART ********************/

	formatPerformance(data) {
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

		/****** Setting the first letter to uppercase ******/

		newData.forEach((elt) => {
			elt.name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1).toLowerCase();
		});

		return newData;
	}

	/************************************************************************/

	/********************* AREA CHART ********************/
	/************************************************************************/

	/********************* PIE CHART ********************/
	/************************************************************************/
}
