import { useEffect, useState } from 'react';
import axios from 'axios';
import FormatDataClass from '../../_formaters/formatData';

export const FetchMainData = (url) => {
	const [ mainData, setMainData ] = useState({});
	const [ keyData, setKeyData ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchUserData = async () => {
				try {
					const res = await axios.get(url);
					setMainData(res.data.data.userInfos);
					setKeyData(res.data.data.keyData);
				} catch (error) {
					setError(true);
				} finally {
					setLoading(false);
				}
			};

			fetchUserData();
		},
		[ url ]
	);

	/***** Formating Score converting to the percentage ****/

	return { mainData, keyData, loading, error };
};

export const FetcUserActivity = (url) => {
	const [ data, setData ] = useState();
	const [ maxWeight, setMaxWeight ] = useState(0);
	const [ minWeight, setMinWeight ] = useState(0);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchActivityData = async () => {
				try {
					const res = await axios.get(url);
					setMaxWeight(new FormatDataClass().getMaxWeight(res.data.data.sessions));
					setMinWeight(new FormatDataClass().getMinWeight(res.data.data.sessions));
					setData(new FormatDataClass().formatSessionData(res.data.data.sessions));
				} catch (error) {
					setError(true);
				} finally {
					setLoading(false);
				}
			};

			fetchActivityData();
		},
		[ url ]
	);

	return { data, maxWeight, minWeight, loading, error };
};

export const FetchUserPerformance = (url) => {
	const [ data, setData ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchPerformanceData = async () => {
				try {
					const res = await axios.get(url);
					setData(new FormatDataClass().formatPerformance(res.data.data));
				} catch (error) {
					setError(true);
				} finally {
					setLoading(false);
				}
			};

			fetchPerformanceData();
		},
		[ url ]
	);

	return { data, loading, error };
};
