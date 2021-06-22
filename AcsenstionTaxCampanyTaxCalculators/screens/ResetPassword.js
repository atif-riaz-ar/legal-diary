import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "../styles/register";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "rn-fetch-blob";
import Loader from "../components/loader";

const Register = ({ navigation, route }) => {

  let [isResetSuccess, setIsResetSuccess] = useState(false);
  let [userEmail, setUserEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }

    setLoading(true);

    var proceeding_data = [
      { name: "email", data: userEmail },
    ];

    RNFetchBlob.fetch("POST", "https://leedsng.com/api/reset_password.php", {
      "Content-Type": "multipart/form-data",
    }, proceeding_data)
      .then((res) => {
        var jsonData = JSON.parse(res["data"]);
        if (jsonData["success"] == 1) {
          setIsResetSuccess(true);
        } else {
          setErrortext("Kindly Check your email..!!");
        }
        setLoading(false);
      }).catch(error => {
      setLoading(false);
    });
  };


  if (isResetSuccess) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}>
        <ImageBackground
          source={require("../images/hammer.png")}
          style={styles.bg_image}
        />
        <Image
          source={require("../images/success.png")}
          style={{ height: 150, resizeMode: "contain", alignSelf: "center" }}
        />

        <Text style={styles.successTextStyle}>Kindly check your Email..!!</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground
        source={require("../images/hammer.png")}
        style={styles.bg_image}
      />
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/logo.png")}
            style={{
              width: "80%",
              height: 100,
              resizeMode: "contain",
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.buttonStyleGoogle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonTextStyle}>Back to Login?</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{paddingTop: 30}}>
            <Loader loading={loading} />

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email"
                onChangeText={userEmail => setUserEmail(userEmail)}
                value={userEmail}
                placeholderTextColor="#a3a3a3"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>Reset</Text>
            </TouchableOpacity>
          </ScrollView>

        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;

