import { useEffect, useState } from 'react';
import axios from 'axios';
import FormatDataClass from '../_formaters/formatData';

/**
 * 
 * @param {*} url 
 * @returns {data, name, keyData, loading, error}
 */

export const FetchMainData = (url) => {
	/* Defining initial states */
	const [ data, setData ] = useState({});
	const [ keyData, setKeyData ] = useState({});
	const [ name, setName ] = useState('');
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	/* Implementing useEffect and watching url for dependencies */

	useEffect(
		() => {
			const fetchUserData = async () => {
				try {
					const res = await axios.get(url);

					/**
					 * Passing respose into the class method for data formatting
					 */
					setData(new FormatDataClass().formatMainData(res.data.data));
					setName(res.data.data.userInfos.firstName);
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
	return { data, name, keyData, loading, error };
};

export const FetcUserActivity = (url) => {
	/* Defining initial states */
	const [ data, setData ] = useState();
	const [ maxWeight, setMaxWeight ] = useState(0);
	const [ minWeight, setMinWeight ] = useState(0);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	/* Implementing useEffect and watching url for dependencies */

	useEffect(
		() => {
			const fetchActivityData = async () => {
				try {
					const res = await axios.get(url);
					/**
					 * Passing respose into the class method for data formatting
					 */
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

export const FetchUserAverageSessions = (url) => {
	/* Defining initial states */
	const [ data, setData ] = useState({});
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	/* Implementing useEffect and watching url for dependencies */

	useEffect(
		() => {
			const fetchSessions = async () => {
				try {
					const res = await axios.get(url);
					/**
					 * Passing respose into the class method for data formatting
					 */
					setData(new FormatDataClass().formatSessions(res.data.data.sessions));
				} catch (err) {
					setError(true);
				} finally {
					setLoading(false);
				}
			};

			fetchSessions();
		},
		[ url ]
	);

	return { data, loading, error };
};

export const FetchUserPerformance = (url) => {
	/* Defining initial states */
	const [ data, setData ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);


	useEffect(
		() => {
			const fetchPerformanceData = async () => {
				try {
					const res = await axios.get(url);
					/**
					 * Passing respose into the class method for data formatting
					 */
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
