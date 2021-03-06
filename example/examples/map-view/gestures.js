import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MapView } from 'react-native-baidumap-sdk'
import { Switch } from '../common'

const style = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  controls: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#292c36',
  },
  control: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    marginBottom: 4,
  },
})

export default class Gestures extends Component {
  static navigationOptions = { title: 'Gestures' }

  state = {
    zoomDisabled: true,
    scrollDisabled: true,
    rotateDisabled: true,
    overlookDisabled: true,
  }

  renderControl(name) {
    const prop = `${name}Disabled`
    return (
      <View style={style.control}>
        <Text style={style.label}>{name}</Text>
        <Switch
          onValueChange={value => this.setState({ [prop]: !value })}
          value={!this.state[prop]}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={style.controls}>
          {this.renderControl('overlook')}
          {this.renderControl('rotate')}
          {this.renderControl('scroll')}
          {this.renderControl('zoom')}
        </View>
        <MapView style={style.mapView} {...this.state} />
      </View>
    )
  }
}
