import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, useForm, storeData, getData} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log('#btn continue');
    console.log('form : ', form);
    // getData('user').then((res) => {
    //   console.log('data user: ', res);
    // });

    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        console.log('register success : ', success);
        navigation.navigate('UploadPhoto');
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log('error register: ', errorMessage);
        showMessage({
          message: errorMessage,
          // description: 'This is our second message',
          type: 'default',
          position: 'bottom',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Sign Up" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={24} />
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
            <Gap height={100} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
