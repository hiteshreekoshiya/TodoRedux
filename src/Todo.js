/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {addTodo, deleteTodo, removeTodo} from './Actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Todo() {
  const [inputData, setInputData] = useState(null);
  const dispatch = useDispatch();
  const list = useSelector(state => state.TodoReducers.list);
  const name = useSelector(state => state.TodoReducers.name);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 25, fontWeight: '700', marginRight: 20}}>
          Hello {name}
        </Text>

        <Button
          title="Change User"
          onPress={() => {
            dispatch({type: 'UPDATE_NAME'});
          }}
        />
      </View>

      <Text style={{fontSize: 25, fontWeight: '700'}}>Add your list here</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <TextInput
          placeholder="Add Items..."
          style={{
            borderWidth: 0.5,
            padding: 12,
            fontSize: 16,
            width: 260,
            marginRight: 15,
          }}
          onChangeText={value => {
            setInputData(value);
          }}
          value={inputData}
        />
        <Button
          title="Add"
          onPress={() => {
            dispatch(addTodo(inputData));
            setInputData(null);
          }}
        />
      </View>

      {list.map(elem => {
        return (
          <View
            key={elem.id}
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                padding: 12,
                fontSize: 16,
                width: 260,
                marginRight: 15,
              }}>
              <Text>{elem.data}</Text>
            </View>

            <Button
              title="Delete"
              color="red"
              onPress={() => {
                dispatch(deleteTodo(elem.id));
              }}
            />
          </View>
        );
      })}

      <View style={{marginTop: 25}}>
        <Button
          title="Remove All"
          color={'red'}
          onPress={() => {
            dispatch(removeTodo());
          }}
        />
      </View>
    </View>
  );
}
