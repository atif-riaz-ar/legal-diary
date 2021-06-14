import React from 'react';
import Listing from '../screens/content/Listing';
import Content from '../screens/content/Content';
import Payment from '../screens/content/Payment';
import BankTransfer from '../screens/content/BankTransfer';
import {createStackNavigator} from '@react-navigation/stack';
import * as COLOR from '../styles/constants';
import * as ICON from '../components/icons';
import {TouchableOpacity} from 'react-native';
import News from '../screens/temp/News';
import Subscription from 'react-redux/lib/utils/Subscription';

const Stack = createStackNavigator();
const txt_style = {
	color: COLOR.white,
	textShadowColor: 'rgba(0, 0, 0, 0.5)',
	textShadowOffset: {width: -5, height: 5},
	textShadowRadius: 10,
	fontSize: 40,
	margin: 15,
};
const txt_style_menu = {
	color: COLOR.white,
	textShadowColor: 'rgba(0, 0, 0, 0.5)',
	textShadowOffset: {width: -5, height: 5},
	textShadowRadius: 10,
	fontSize: 16,
	margin: 15,
};

const ListingProps = (navigation, route) => {
	return {
		headerTitle: route.name,
		headerTitleAlign: 'center',
		headerTitleStyle: txt_style_menu,
		headerStyle: {
			backgroundColor: COLOR.primary_color,
			height: 75,
		},
		headerRight: () => {
			return (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginRight: 20}}>
					<ICON.getIcon width={24} height={24} name="menu" color={COLOR.white}/>
				</TouchableOpacity>
			);
		},
	};
};

const ContentProps = (navigation, route) => {
	
	return {
		headerTitle: `${route.name}`,
		headerTitleAlign: 'center',
		headerTitleStyle: txt_style_menu,
		headerTintColor: COLOR.white,
		headerStyle: {
			backgroundColor: COLOR.primary_color,
			height: 75,
		},
		headerRight: () => {
			return (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginRight: 20}}>
					<ICON.getIcon width={24} height={24} name="menu" color={COLOR.white}/>
				</TouchableOpacity>
			);
		},
	};
};
const ScreenProps = (navigation, route) => {
	return {
		headerTitleAlign: 'center',
		headerTitleStyle: txt_style_menu,
		headerTintColor: COLOR.white,
		headerStyle: {
			backgroundColor: COLOR.primary_color,
			height: 75,
		},
		headerRight: () => {
			return (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginRight: 20}}>
					<ICON.getIcon width={24} height={24} name="menu" color={COLOR.white}/>
				</TouchableOpacity>
			);
		},
	};
};

const AuthStack = ({navigation, route}) => {
	const route_name = route.name !== 'News' ? route.name : "News Article";
	return (
		<Stack.Navigator>
			<Stack.Screen name={route.name} options={ListingProps(navigation, route)} component={Listing}/>
			<Stack.Screen name="Content" options={ContentProps(navigation, route)} component={Content}/>
			<Stack.Screen name="Payment" options={ScreenProps(navigation, route)} component={Payment}/>
			<Stack.Screen name="Bank Transfer" options={ScreenProps(navigation, route)} component={BankTransfer}/>
		</Stack.Navigator>
	);
};

export default AuthStack;