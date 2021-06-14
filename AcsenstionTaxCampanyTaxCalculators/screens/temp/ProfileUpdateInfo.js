import React, {useContext, useState} from 'react';
import {ScrollView, TextInput, TouchableOpacity, ImageBackground, Text, View, Alert} from 'react-native';
import styles from '../../styles/contact';
import {AuthContext} from '../../src/AuthProvider';
import Loader from '../../components/loader';

const ProfileUpdateInfo = () => {
    const {user} = useContext(AuthContext);

    let [id, setId] = useState(user['uid']);
    let [firstName, setFirstName] = useState(user['firstname']);
    let [lastName, setLastName] = useState(user['lastname']);
    let [email, setEmail] = useState(user['email']);
    let [loading, setLoading] = useState(false);

    const update_info = () => {
        if (!firstName) {
            alert('Please Enter First Name');
            return;
        }
        if (!lastName) {
            alert('Please Enter Last Name');
            return;
        }
        if (!email) {
            alert('Please Enter Email');
            return;
        }

        let data = new FormData();
        data.append('id', id);
        data.append('firstname', firstName.firstName);
        data.append('lastname', lastName.lastName);
        data.append('email', email.email);

        fetch('https://leedsng.com/api/updateUserInfo.php', {
            method: 'POST',
            body: data,
        }).then((responseData) => {
            return responseData.json();
        }).then(responseJson => {
            if (responseJson['success'] == 1) {
                alert('Info updated successfully.')
            } else {
                alert('Info failed to update.')
            }
            setLoading(false);
        }).catch(error => {
            console.log(error)
            alert('Info failed to update.')
            setLoading(false);
        });
    };

    return (
      <ScrollView style={styles.container}>
          <View style={styles.inner}>
              <Text style={styles.heading}>Update Profile</Text>
              <Loader loading={loading}/>

              <TextInput editable={true} style={styles.inputStyle} placeholder='First Name' value={firstName}
                         onChangeText={(firstName) => setFirstName({firstName})} label='Full Name'/>
              <TextInput editable={true} style={styles.inputStyle} placeholder='Last Name' value={lastName}
                         onChangeText={(lastName) => setLastName({lastName})} label='Last Name'/>
              <TextInput editable={true} style={styles.inputStyle} placeholder='Email' value={email}
                         onChangeText={(email) => setEmail({email})} label='Email'/>
              <TouchableOpacity style={styles.button}
                                onPress={update_info}
              >
                  <Text style={styles.submit_btn_txt}> UPDATE </Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
    );
};

export default ProfileUpdateInfo;
