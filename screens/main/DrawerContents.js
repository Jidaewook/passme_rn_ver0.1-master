import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Text, Title, Avatar, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const DrawerContents = (props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex: 1}}>    
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            
                            {/* Profile Image */}
                            <Avatar.Image
                                source={{
                                    uri: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/52944323_2091549364214714_3093923968491454464_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=F1DSkxvNhw8AX89gyAQ&_nc_ht=scontent.fccu3-1.fna&oh=f5ef48dc15731b42c5e246ecdbe4fff5&oe=5EC2D8FE'
                                }}
                                size={50}
                            />

                            {/* Profile Detail */}
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>    
                                <Title style={styles.title}>Master</Title>
                                <Caption style={styles.caption}>@dw4157</Caption>
                            </View>    
                        </View>

                            {/* Following - 다른 항목으로 교체 */}
                         <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>133</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>144</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>
                    
                    {/* Drawer Menu */}
                    <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                        name="bullhorn-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Notice"
                                onPress={() => {props.navigation.navigate('NoticeScreen')}}
                            />
                        
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                        name="movie-open-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="NCS Lecture"
                                onPress={() => {props.navigation.navigate('LectureScreen')}}
                            />
                            
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                        name="tooltip-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="BBS"
                                onPress={() => {props.navigation.navigate('bbsScreen')}}
                            />
                            
                        </Drawer.Section>
                        <Drawer.Section title="Preference">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                    <View style={styles.preference}>
                                        <Text>Dark Theme</Text>
                                        <View pointerEvents="none">
                                            <Switch value={isDarkTheme}/>
                                        </View>
                                    </View>
                            </TouchableRipple>
                        </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            
        </View>
    );
};

export default DrawerContents;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});