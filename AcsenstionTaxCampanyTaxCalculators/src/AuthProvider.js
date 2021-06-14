import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
	user: null,
	aldContent: null,
	appData: () => null,
	login: () => null,
	logout: () => null,
});
const AuthProvider = ({children}) => {
	const [user, setUser] = useState('');
	const [aldContent, setAldContent] = useState('');
	return (
		<AuthContext.Provider value={{
			user,
			aldContent,
			appData: (cb) => {
				fetch('https://leedsng.com/api/getAllAldData.php', {
					method: 'GET',
				}).then((tt) => {
					return tt.json();
				}).then((jj) => {
					setAldContent(JSON.stringify(jj.contents));
				}).done();
			},
			login: () => {
				AsyncStorage.getItem('user').then((loginUser) => {
					setUser(JSON.parse(loginUser));
				});
			},
			logout: () => {
				setUser('');
				AsyncStorage.removeItem('user');
				AsyncStorage.removeItem('aldContent');
			},
		}}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
