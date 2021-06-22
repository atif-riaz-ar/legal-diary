import React from 'react';
import { SafeAreaView } from 'react-native';
import AuthProvider from './AuthProvider';
import Routes from './Routes';

const Providers = ({ }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</SafeAreaView>
	);
}

export default Providers;
