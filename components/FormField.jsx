import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants/icons';

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row">
            <TextInput
            className="flex-1 text-white font-psemibold text-base w-full"
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChangeText}
            secureTextEntry={title==="Password" && !showPassword}/>
            {
                title==="Password" &&
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                        source={!showPassword? icons.eye : icons.eyeHide}
                        className="h-6 w-6" 
                        resizeMode='contain'/>
                </TouchableOpacity>
            }
      </View>
    </View>
  )
}

export default FormField