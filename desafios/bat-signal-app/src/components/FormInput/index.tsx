import React from 'react';
import { View, Text, TextInput, TextInputProps  } from 'react-native';

import { styles } from './styles';

interface FormInputProps extends TextInputProps  {
    label: string,
    required?: boolean,
}

export function FormInput({label, required, ...rest}:FormInputProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.labelText}>
            {required ? <Text style={styles.requiredMark}>* </Text> : ''}
            {label}
        </Text>
        <TextInput style={styles.textInput} placeholderTextColor="grey" {...rest}/>
    </View>
  );
}