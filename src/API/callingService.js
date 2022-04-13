import { useEffect, useState } from 'react';
import axios from 'axios';


// FETCHING USER MAIND DATA FRO USER 12 AND 18 (NAME AND OTHER)

export const FetchMainData = (url) => {
	const [ mainData, setMainData ] = useState({});
	const [keyData, setKeyData] = useState({})
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchUserData = async () => {
				try {
					const res = await axios.get(url);

					setMainData(res.data.data.userInfos);
					setKeyData(res.data.data.keyData)
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

	return { mainData, keyData, loading, error };
};

export const FetcUserActivity = (url) => {
	const [ userActivity, setUserActivity ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchActivityData = async () => {
				try {
					const res = await axios.get(url);

					setUserActivity(res);
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

	return { userActivity, loading, error };
};

export const FetchUserPerformance = (url) => {
	const [ userPerformance, setUserPerformance ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(
		() => {
			const fetchPerformanceData = async () => {
				try {
					const res = await axios.get(url);

					setUserPerformance(res);
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

	return { userPerformance, loading, error };
};
