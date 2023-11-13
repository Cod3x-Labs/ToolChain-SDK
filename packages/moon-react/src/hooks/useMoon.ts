import { MoonSDK } from '@moonup/moon-sdk';
import {
	AUTH,
	MOON_SESSION_KEY,
	MOON_SUPPORTED_NETWORKS,
	Storage,
} from '@moonup/moon-types';
import { useEffect, useState } from 'react';

interface MoonSDKHook {
	moon: MoonSDK | null;
	initialize: () => Promise<void>;
	disconnect: () => Promise<void>;
	// signTransaction: (transaction: TransactionResponse) => Promise<Transaction>;
	// Add other methods as needed
}

export function useMoonSDK(): MoonSDKHook {
	const [moon, setMoon] = useState<MoonSDK | null>(null);

	const initialize = async () => {
		const auth = JSON.parse(
			window.localStorage.getItem(MOON_SESSION_KEY) || '{}'
		);

		console.log(MOON_SUPPORTED_NETWORKS);
		const moonInstance = new MoonSDK({
			Storage: {
				key: MOON_SESSION_KEY,
				type: Storage.SESSION,
			},
			Auth: {
				AuthType: AUTH.JWT,
			},
		});
		console.log(moonInstance);
		moonInstance.updateToken(auth.token);
		const accounts = await moonInstance.listAccounts();
		console.log(accounts);

		setMoon(moonInstance);
	};

	const disconnect = async () => {
		if (moon) {
			await moon.disconnect();
			setMoon(null);
		}
	};

	// const signTransaction = async (transaction: TransactionResponse) => {
	// 	if (moon) {
	// 		return moon.SignTransaction(transaction);
	// 	}
	// 	throw new Error('Moon SDK is not initialized');
	// };

	// Add other methods as needed

	useEffect(() => {
		initialize();
		return () => {
			disconnect();
		};
	}, []);

	return {
		moon,
		initialize,
		disconnect,
		// Add other methods as needed
	};
}
