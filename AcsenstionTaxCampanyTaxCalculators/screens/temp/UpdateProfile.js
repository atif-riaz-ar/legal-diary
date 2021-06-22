import React, { useContext, useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  Alert,
  KeyboardAvoidingView, Image,
} from "react-native";
import styles from "../../styles/profile";
import { AuthContext } from "../../src/AuthProvider";
import Loader from "../../components/loader";
import ImagePicker from "react-native-image-picker";
import * as COLOR from "../../styles/constants";
import RNFetchBlob from "rn-fetch-blob";
import AsyncStorage from "@react-native-community/async-storage";

const UpdateProfile = ({ navigation, route }) => {

  const { logout } = useContext(AuthContext);

  const { user } = useContext(AuthContext);

  let [imageSourceData, setImageSourceData] = useState(null);
  let [UID, setUID] = useState(user["uid"]);
  let [firstName, setFirstName] = useState(user["firstname"]);
  let [email, setEmail] = useState(user["email"]);
  let [password, setPassword] = useState(user["password"]);
  let [loading, setLoading] = useState(false);
  let [fullImage, setFullImage] = useState(null);
  let [errortext, setErrortext] = useState("");

  let deleteAccount = () => {
    Alert.alert(
      "Confirmation..!!",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            let data = new FormData();
            data.append("id", UID);

            fetch("https://leedsng.com/api/deleteAccount.php", {
              method: "POST",
              body: data,
            }).then((responseData) => {
              return responseData.json();
            }).then(responseJson => {
              if (responseJson["success"] == 1) {
                logout();
              } else {
                setErrortext("Could not delete your account. Please try again later.");
              }
              setLoading(false);
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        {/*<ImageBackground source={require('../../images/logo.png')} style={styles.logo}/>*/}
        <Text style={styles.heading}>User Profile</Text>
        <Loader loading={loading} />

        <View style={{ backgroundColor: COLOR.primary_color, opacity: 0.7 }}>
          <Image
            source={{ uri: user["profilepic"] }}
            style={{
              width: 150,
              height: 150,
              marginTop: 10,
              borderRadius: 10,
              borderColor: COLOR.white,
              borderWidth: 2,
              alignSelf: "center",
            }} />
          <Text style={{
            width: "100%",
            height: 50,
            borderColor: COLOR.white,
            marginTop: 15,
            color: "#fff",
            borderTopWidth: 2,
            textAlign: "center",
            lineHeight: 45,
            fontSize: 15,
          }}>{user["firstname"]} {user["lastname"]}</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Update User Info")}
        >
          <Text style={styles.buttonTextStyle}>Update Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Update Image")}
        >
          <Text style={styles.buttonTextStyle}>Update Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Update Password")}
        >
          <Text style={styles.buttonTextStyle}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyleGoogle}
          activeOpacity={0.5}
          onPress={() => deleteAccount()}
        >
          <Text style={styles.buttonTextStyle}>Permanently Delete Your Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;
