import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image
} from 'react-native';

import { getProducts } from '../util/GetData';
import LoadingOverlay from '../util/LoadingOverlay';

function HomeScreen () {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function getProduct() {
        const products = await getProducts();
        setDataSource(products);
        setLoading(false);
    }

  useEffect(() => {
    getProduct();
  }, []);


  const isDarkMode = useColorScheme() === 'dark';
  if (isLoading) {
    return <LoadingOverlay message="Loading..." />;
  }
    return (
        <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.image}}
            />
            <View style = {styles.titleContainer}>
            <Text style = {styles.sectionTitle}>{item.title}</Text>
            </View>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
        // horizontal= 'false'
      />
    </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    titleContainer: {
        margin: 5
    }
  });

export default HomeScreen;