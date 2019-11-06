declare module 'react-native-touchable-scale' {
  import React from 'react';
  import { StyleProp } from 'react-native';
  import { TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';

  export interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
    style?: StyleProp<ViewStyle>;
    defaultScale?: number;
    activeScale?: number;
    tension?: number;
    friction?: number;
    pressInTension?: number;
    pressInFriction?: number;
    pressOutTension?: number;
    pressOutFriction?: number;
    useNativeDriver?: boolean;
  }

  export default class TouchableScale<T> extends React.Component<TouchableScaleProps> { }
}
