declare module 'react-native-touchable-scale' {
  import React from 'react';
  import { TouchableWithoutFeedbackProps } from 'react-native';

  export interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
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

  export default class TouchableScale extends React.Component<TouchableScaleProps> {}
}
