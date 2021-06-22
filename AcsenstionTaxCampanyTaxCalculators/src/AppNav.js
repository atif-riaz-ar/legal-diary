import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserStack from '../src/UserStack';
import ListingStack from '../src/ListingStack';
import NewsListingStack from '../src/NewsListingStack';
import UserGrid from '../screens/UserGrid';
import {AuthContext} from './AuthProvider';
import Logout from '../components/Logout'
import * as COLOR from '../styles/constants';
import * as ICON from '../components/icons';

const Nav = createDrawerNavigator();
const AppNav = ({}) => {
	const {logout} = useContext(AuthContext);
	const getMyIcon = (navigation , icon) => {
		return {
			drawerIcon: () => {
				return <ICON.getIcon width={28} height={28} name={icon} color={navigation.isFocused() ? COLOR.white : COLOR.primary_color} />
			}
		}
	};

	return (
		<>
			<Nav.Navigator
				initialRouteName="Legal News"
				drawerContentOptions={{
					activeTintColor: COLOR.white,
					activeBackgroundColor: COLOR.primary_color,
					inactiveBackgroundColor: COLOR.white,
					inactiveTintColor: COLOR.primary_color,
				}}
			>
				<Nav.Screen name="User Profile" component={UserStack} options={{drawerLabel: '', title: null, drawerIcon: () => { return <UserGrid/>; }}}/>
				<Nav.Screen name="Legal News" component={NewsListingStack} options={({navigation}) => {return getMyIcon( navigation, "legal_news")}}/>
				<Nav.Screen name="Law Reports" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation, "law_reports")}}/>
				<Nav.Screen name="Law School" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"law_school")}}/>
				<Nav.Screen name="Legislation" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"legislation")}}/>
				<Nav.Screen name="Videos" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"videos")}}/>
				<Nav.Screen name="SME Corner" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"sme_corner")}}/>
				<Nav.Screen name="Legal Dictionary" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"legal_dictionary")}}/>
				{/*<Nav.Screen name="Decided Cases" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"decided_cases")}}/>*/}
				{/*<Nav.Screen name="Caselaws" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"caselaws")}}/>*/}
				<Nav.Screen name="Circular" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"circular")}}/>
				<Nav.Screen name="Alert" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"alert")}}/>
				<Nav.Screen name="The Bar" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"the_bar")}}/>
				<Nav.Screen name="Live Webinar" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"live_webinar")}}/>
				<Nav.Screen name="Ask an Expert" component={ListingStack} options={({navigation}) => {return getMyIcon( navigation,"contact")}}/>
				<Nav.Screen name="Logout" component={Logout} options={({navigation}) => {return getMyIcon( navigation, "logout")}}/>
			</Nav.Navigator>
		</>
	);
};

export default AppNav;
