import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {DumDokter4} from '../../assets';
import {colors} from '../../utils/colors';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        chat={'Wanita'}
        onPress={() => navigation.navigate('Chat')}
      />
      <ListDoctor
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        chat={'Wanita'}
      />
      <ListDoctor
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        chat={'Wanita'}
      />
      <ListDoctor
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        chat={'Wanita'}
      />
      <ListDoctor
        type="next"
        picture={DumDokter4}
        name={'Alexander Guerero'}
        chat={'Wanita'}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});