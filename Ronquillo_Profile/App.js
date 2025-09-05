import React, { useRef, useEffect } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import avatarPic from './assets/images/profilePic.png'
import design from './styles/ProfileDesign.styles'

const ProfilePanel = () => {
  const heartOne = useRef(new Animated.Value(0)).current
  const heartTwo = useRef(new Animated.Value(0)).current
  const heartThree = useRef(new Animated.Value(0)).current

  const cloudOne = useRef(new Animated.Value(0)).current
  const cloudTwo = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const float = (item, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(item, { toValue: -10, duration: 1500, delay, useNativeDriver: true }),
          Animated.timing(item, { toValue: 0, duration: 1500, useNativeDriver: true }),
        ])
      ).start()
    }

    const drift = (cloud, distance, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(cloud, { toValue: distance, duration: 4000, delay, useNativeDriver: true }),
          Animated.timing(cloud, { toValue: 0, duration: 4000, useNativeDriver: true }),
        ])
      ).start()
    }

    float(heartOne, 0)
    float(heartTwo, 500)
    float(heartThree, 1000)

    drift(cloudOne, 15, 0)
    drift(cloudTwo, -15, 1000)
  }, [])

  return (
    <View style={design.profileCard}>
      <View style={design.headerArea}>
        <Animated.View style={[design.cloudOne, { transform: [{ translateX: cloudOne }] }]} />
        <Animated.View style={[design.cloudTwo, { transform: [{ translateX: cloudTwo }] }]} />

        <Animated.Text style={[design.heartOne, { transform: [{ translateY: heartOne }] }]}>♥</Animated.Text>
        <Animated.Text style={[design.heartTwo, { transform: [{ translateY: heartTwo }] }]}>♥</Animated.Text>
        <Animated.Text style={[design.heartThree, { transform: [{ translateY: heartThree }] }]}>♥</Animated.Text>
      </View>

      <View style={design.profileContent}>
        <View style={design.picWrapper}>
          <Image source={avatarPic} style={design.profilePic} />
        </View>

        <Text style={design.profileFullname}>Mikaelizah C. Ronquillo</Text>
        <View style={design.infoDivider} />

        <Text style={design.profileUser}>Mika</Text>
        <View style={design.infoDivider} />

        <Text style={design.profileAbout}>My name is Mikaelizah Ronquillo, a 3rd Year Student in 
          Bachelor off Science in Information Technology. i love cats.
        </Text>
        <View style={design.infoDivider} />

        <Text style={design.profileCourse}>Bachelor of Science in Information Technology</Text>
      </View>
    </View>
  )
}

export default ProfilePanel
