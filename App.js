import React from 'react';
import {Alert, StyleSheet, Text, View,
   TextInput, TouchableOpacity} from 'react-native';

export default class Persona extends React.Component
{
  constructor(props)
  {
    super(props)

    //Ahora definimos las variables para la tabla persona
    //de la Base de Datos MatriculasGrupoSabado

    this.state =
    {
      TextInput_id:'',
      TextInput_nif:'',
      TextInput_nombre: '',
      TextInput_apellido1: '',
      TextInput_apellido2: '',
      TextInput_ciudad: '',
      TextInput_clave:'',
      TextInput_direccion:'',
      TextInput_telefono:'',
      TextInput_fecha_nacimiento:'',
      TextInput_sexo:'',
      TextInput_tipo:'',
    }
  
  }
  
  //Ahora creamos las funciones de esta clase

  InsertarPersona = () =>
  {
    //Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch('http://192.168.88.100:8080/APIMatriculasGrupoSabado/Modelo/InsertarPersona.php',
    {
      method: 'POST',
      headers: 
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {  
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo            

        }
      )
    }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert(responseJson);

      }).catch((error) =>
      {
        console.error(error);
      }
      );
  }

  ActualizarPersona = () =>
  {
    //Ahora vamos a codificar la función actualizar para
    //consumir la API
    fetch('http://192.168.88.100:8080/APIMatriculasGrupoSabado/Modelo/ActualizarPersona.php',
      {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo            
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert('El registro ha sido actualizado');
      }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }

  BorrarPersona = () =>
  {
   //Ahora vamos a codificar la función borrar para
    //consumir la API
    fetch('http://192.168.88.100:8080/APIMatriculasGrupoSabado/Modelo/BorrarPersona.php',
      {
        method: 'DELETE',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id         
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert('El registro ha sido borrado');
      }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }

  ListarTodasLasPersonas = () =>
  {
//Ahora vamos a codificar la función ListarxId para
    //consumir la API
    fetch('http://192.168.88.100:8080/APIMatriculasGrupoSabado/Modelo/ListarTodasLasPersonas.php',
      {
        method: 'GET',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo        
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
    {
      this.state(
        {
          TextInput_id: responseJson[0]['id'],
          TextInput_nif: responseJson[0]['nif'],
          TextInput_nombre: responseJson[0]['nombre'],
          TextInput_apellido1: responseJson[0]['apellido1'],
          TextInput_apellido2: responseJson[0]['apellido2'],
          TextInput_ciudad: responseJson[0]['ciudad'],
          TextInput_clave: responseJson[0]['clave'],
          TextInput_direccion: responseJson[0]['direccion'],
          TextInput_telefono: responseJson[0]['telefono'],
          TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
          TextInput_sexo: responseJson[0]['sexo'],
          TextInput_tipo: responseJson[0]['tipo'] 
        }
      )
    }
    )
  }

  ListarPersonaxId = () =>
  {
    //Ahora vamos a codificar la función ListarxId para
    //consumir la API
    fetch('http://192.168.88.100:8080/APIMatriculasGrupoSabado/Modelo/ListarPersonaxid.php',
      {
        method: 'GET',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo        
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
    {
      this.state(
        {
          TextInput_nif: responseJson[0]['nif'],
          TextInput_nombre: responseJson[0]['nombre'],
          TextInput_apellido1: responseJson[0]['apellido1'],
          TextInput_apellido2: responseJson[0]['apellido2'],
          TextInput_ciudad: responseJson[0]['ciudad'],
          TextInput_clave: responseJson[0]['clave'],
          TextInput_direccion: responseJson[0]['direccion'],
          TextInput_telefono: responseJson[0]['telefono'],
          TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
          TextInput_sexo: responseJson[0]['sexo'],
          TextInput_tipo: responseJson[0]['tipo'] 
        }
      )
    }
    )
  }


  render()
  {
    return (
      <View style= {MisEstilos.MainContainer}>
        <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
            Registro de personas
        </Text>
        <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>
          <TextInput
          placeholder="Id" 
          onChangeText ={TextInputValue => this.setState(
              {
                TextInput_id: TextInputValue
              })}
              underlineColorAndroid= 'transparent'
              style={MisEstilos.TextInputStyleClass}
              value= {this.state.TextInput_id}
          >
          </TextInput>
          <TextInput
            placeholder="nif"
            onChangeText={TextInputValue => this.setState(
              {
                TextInput_nif: TextInputValue
              }
            )}
              underlineColorAndroid='transparent'
              style={MisEstilos.TextInputStyleClass}
              value={this.state.TextInput_nif}
              autoFocus={true}
          >
          </TextInput>
        </View>
        <TextInput
          placeholder="nombre"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_nombre: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_nombre}
            autoFocus={true}
        >
        </TextInput>
        
        <View style={ {flexWrap:'wrap',
        flexDirection:'row',
        backgroundColor:"green",marginTop:20}}>

        <TextInput
          placeholder="apellido1"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_apellido1: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_apellido1}
            autoFocus={true}
        >
        </TextInput>
        <TextInput
          placeholder="apellido2"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_apellido2: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_apellido2}
            autoFocus={true}
        >
        </TextInput>
        </View>
        <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>
        <TextInput
          placeholder="ciudad"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_ciudad: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_ciudad}
            autoFocus={true}
        >
        </TextInput>        
        <TextInput
          placeholder="clave"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_clave: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_clave}
            autoFocus={true}
        >
        </TextInput>        
        </View>

        <View style={ {flexWrap:'wrap',
        flexDirection:'row',backgroundColor:"white",
        marginTop:20}}>

        <TextInput
          placeholder="dirección"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_direccion: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_direccion}
            autoFocus={true}
        >
        </TextInput>        
        <TextInput
          placeholder="teléfono"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_telefono: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_telefono}
            autoFocus={true}
        >
        </TextInput>
        </View>

        <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>

        <TextInput
          placeholder="fechanto"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_fecha_nacimiento: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_fecha_nacimiento}
            autoFocus={true}
        >
        </TextInput>        
        <TextInput
          placeholder="sexo"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_sexo: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_sexo}
            autoFocus={true}
        >
        </TextInput>
        </View>
        <TextInput
          placeholder="tipo"
          onChangeText={TextInputValue => this.setState(
            {
              TextInput_tipo: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_tipo}
            autoFocus={true}
        >
        </TextInput>      

        <TouchableOpacity
          activeOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyle}
          onPress={this.InsertarPersona}
        >
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyle}
          onPress={this.ActualizarPersona}
        >
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyle}
          onPress={this.BorrarPersona}
        >
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyle}
          onPress={this.ListarPersonaxId}
        >
        </TouchableOpacity>        
      </View>

    );

  }

}

const MisEstilos = StyleSheet.create (
  {
    MainContainer:
    {
        alignItems: 'center',
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      width: '50%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#FF5722',
      borderRadius: 5,
    },
    TouchableOpacityStyle:
    {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '90%',
      backgroundColor: '#08BCD4'
    },
    TextStyle:
    {
      color: '#fff',
      textAlign: 'center',
    },
    rowViewContainer:
    {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
    },
  }
)