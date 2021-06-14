import React, {useContext, useState} from 'react';
import {
	Image,
	ActivityIndicator,
	TextInput,
	TouchableOpacity,
	FlatList,
	TouchableHighlight,
	ScrollView,
	View,
	StyleSheet,
	Text,
} from 'react-native';
import {AuthContext} from '../../src/AuthProvider';
import * as COLOR from '../../styles/constants';
import * as ICON from '../../components/icons';
import Contact from '../temp/Conact';
import Webinar from '../temp/Webinar';
import News from '../temp/News';


const Listing = ({navigation, route}) => {
	const {aldContent} = useContext(AuthContext);

	const [query, setQuery] = useState('');
	var data = [];
	if (route.name === 'Legal News') {
		data = JSON.parse(aldContent)['legal_news'];
	}
	if (route.name === 'Law Reports') {
		data = JSON.parse(aldContent)['law_reports'];
	}
	if (route.name === 'Law School') {
		data = JSON.parse(aldContent)['law_school'];
	}
	if (route.name === 'Legislation') {
		data = JSON.parse(aldContent)['legislation'];
	}
	if (route.name === 'Videos') {
		data = JSON.parse(aldContent)['videos'];
	}
	if (route.name === 'SME Corner') {
		data = JSON.parse(aldContent)['sme_corner'];
	}
	if (route.name === 'Legal Dictionary') {
		data = JSON.parse(aldContent)['legal_dictionary'];
	}
	if (route.name === 'Decided Cases') {
		data = JSON.parse(aldContent)['decided_cases'];
	}
	if (route.name === 'Caselaws') {
		data = JSON.parse(aldContent)['caselaws'];
	}
	if (route.name === 'Circular') {
		data = JSON.parse(aldContent)['circular'];
	}
	if (route.name === 'Alert') {
		data = JSON.parse(aldContent)['alert'];
	}
	if (route.name === 'The Bar') {
		data = JSON.parse(aldContent)['the_bar'];
	}
	if (route.name === 'Live Webinar') {
		return <Webinar navigation={navigation} route={route}/>;
	}
	if (route.name === 'Ask an Expert') {
		return <Contact navigation={navigation} route={route}/>;
	}
	if (route.name === 'News') {
		return <News/>;
	}

	const [fullData, setFullData] = useState(data);

	const handleSearch = text => {
		let filteredData = data.filter(x => String(x.title.toLowerCase()).includes(text.toLowerCase()));
		setFullData(filteredData);
		setQuery(text);
	};

	if (data !== undefined) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		return (
			<ScrollView style={{
				flex: 1,
				backgroundColor: COLOR.extra_color1,
			}}>
				<View>
					<Image style={{width: '100%'}} source={require('../../images/download.jpg')}/>
				</View>
				<View
					style={{
						backgroundColor: '#fff',
						padding: 5,
						marginVertical: 10,
						marginHorizontal: 12,
						borderWidth: 1,
						borderRadius: 5
					}}
				>
					<TextInput
						autoCapitalize="none"
						autoCorrect={false}
						clearButtonMode="always"
						value={query}
						onChangeText={queryText => handleSearch(queryText)}
						placeholder="Search"
						style={{ backgroundColor: '#fff' }}
					/>
				</View>
				<FlatList
					data={fullData}
					keyExtractor={item => item.id}
					renderItem={({item}) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Content', {
									item_title: item.title,
									item: item
								});
							}}
							style={{
								backgroundColor: COLOR.white,
								paddingVertical: 15,
								marginVertical: 7,
								marginHorizontal: 14,
								borderRadius: 5,
								borderWidth: 1,
								borderColor: COLOR.extra_color2,
								flex: 1,
								flexDirection: 'row',
								flexWrap: 'wrap',
								alignItems: 'flex-start',
							}}
						>
							<View style={{
								width: '85%',
								height: '100%',
								justifyContent: 'center',
								paddingLeft: 20,
							}}>
								<Text style={{
									fontSize: 16,
									color: COLOR.primary_color,
									fontWeight: 'bold',
								}}>{item.title}</Text>
								<Text style={{
									fontSize: 12,
									color: COLOR.extra_color0,
									textDecorationLine: 'underline',
									textDecorationStyle: 'solid',
									textDecorationColor: COLOR.black,
									fontWeight: 'bold',
								}}>{item.date_created}</Text>
							</View>
							<View style={{
								width: '15%',
								justifyContent: 'center',
								height: '100%',
								paddingLeft: 15,
							}}>
								<ICON.getIcon width={24} height={24} name="goto" color={COLOR.primary_color}/>
							</View>
						</TouchableOpacity>
					)}
				/>
			</ScrollView>
		);
	} else {
		return (
			<ScrollView style={{
				flex: 1,
				backgroundColor: COLOR.extra_color3,
			}}>
				<View style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					<Text style={{
						color: COLOR.white,
						fontSize: 20,
						paddingVertical: 40,
					}}>No Content Found</Text>
				</View>
			</ScrollView>
		);
	}
};

export default Listing;
