import React from "react"
import {Text, TextInput, View, TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

const [height, setHeight] = React.useState(null)
const [weight, setWeight] = React.useState(null)
const [messageImc, setMessageImc] = React.useState("preencha o peso e altura")
const [imc, setImc] = React.useState(null)
const [textButton, setTextButton] = React.useState("calcular")

function imcCalculator() {
    return setImc((weight/ (height * height)).toFixed(2))
}

function validationImc() {
    if (weight != null && height != null) {
        imcCalculator()
        setWeight(null)
        setHeight(null)
        setMessageImc("seu imc é:")
        setTextButton("calcular novamente")
        return
    }
    setImc(null)
    setTextButton("calcular")
    setMessageImc("preencha o peso e altura")
}


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="ex. 75"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc 
            messageResultImc={messageImc} 
            resultImc={imc} 
            />
        </View>
    );
}
