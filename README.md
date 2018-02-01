# Animated touchable component.

<img src="https://cloud.githubusercontent.com/assets/795466/14046540/42f7d80a-f2b3-11e5-98b7-e6c9fa39d213.gif" width="300" />

| Props                  | Required      | Default Value |
| -------------          | ------------- | ------------- |
| [TouchableWithoutFeedback props...](https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html#props)
| **style** style             | No            |               | 
| **defaultScale** number     | No            | 1             | 
| **activeScale** number      | No            | 0.9           | 
| **tension** number          | No            | 150           | 
| **friction** number         | No            | 3             | 
| **pressInTension** number   | No            |               | 
| **pressInFriction** number  | No            |               | 
| **pressOutTension** number  | No            |               | 
| **pressOutFriction** number | No            |               | 
| **useNativeDriver** boolean | No            | true          | 

## Install

```
npm install --save react-native-touchable-scale
```

## Usage

```js
import TouchableScale from 'react-native-touchable-scale';

const Button = function(props) {
    return (
        <TouchableScale
            style={style.button}
            onPress={props.onPress}
            activeScale={0.7}
        >
            {props.children}
        </TouchableScale>
    );
};
```
