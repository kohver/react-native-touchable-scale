import React from 'react';
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, Animated, ViewPropTypes } from 'react-native';

/**
 * @typedef {Object} TouchableWithoutFeedbackProps
 * @property {Object} children
 * @property {Object} [accessibilityComponentType]
 * @property {boolean} [accessibilityTraits]
 * @property {boolean} [accessible]
 * @property {number} [delayLongPress]
 * @property {number} [delayPressIn]
 * @property {number} [delayPressOut]
 * @property {boolean} [disabled]
 * @property {Object} [hitSlop]
 * @property {{top: number, left: number, bottom: number, right: number}} [hitSlop]
 * @property {Function} [onLayout]
 * @property {Function} [onLongPress]
 * @property {Function} [onPress]
 * @property {Function} [onPressIn]
 * @property {Function} [onPressOut]
 * @property {{top: number, left: number, bottom: number, right: number}} [pressRetentionOffset]
 */

/**
 * @typedef {TouchableWithoutFeedbackProps} TouchableScaleProps
 * @property {Object} [style]
 * @property {number} [defaultScale=1]
 * @property {number} [activeScale=0.9]
 * @property {number} [tension=150]
 * @property {number} [friction=3]
 * @property {number} [pressInTension]
 * @property {number} [pressInFriction]
 * @property {number} [pressOutTension]
 * @property {number} [pressOutFriction]
 * @property {boolean} [useNativeDriver]
 */
export default class TouchableScale extends React.Component {
    constructor(...args) {
        super(...args);
        /** @type {TouchableScaleProps} */
        const props = this.props;

        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.scaleAnimation = new Animated.Value(props.defaultScale);
    }

    render() {
        /** @type {TouchableScaleProps} */
        const props = this.props;

        return (
            <TouchableWithoutFeedback
                // todo: pass only TouchableWithoutFeedback's props.
                {...props}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
                <Animated.View
                    style={[props.style, {
                        transform: [
                            {scale: this.scaleAnimation},
                        ]},
                    ]}
                >
                    {props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    onPressIn(...args) {
        /** @type {TouchableScaleProps} */
        const props = this.props;
        const tension = typeof props.pressInTension !== 'undefined' ? props.pressInTension : props.tension;
        const friction = typeof props.pressInFriction !== 'undefined' ? props.pressInFriction : props.friction;

        Animated.spring(this.scaleAnimation, {
            toValue: props.activeScale,
            tension: tension,
            friction: friction,
            useNativeDriver: props.useNativeDriver,
        }).start();

        if (props.onPressIn) {
            props.onPressIn(...args);
        }
    }

    onPressOut(...args) {
        /** @type {TouchableScaleProps} */
        const props = this.props;
        const tension = typeof props.pressOutTension !== 'undefined' ? props.pressOutTension : props.tension;
        const friction = typeof props.pressOutFriction !== 'undefined' ? props.pressOutFriction : props.friction;

        Animated.spring(this.scaleAnimation, {
            toValue: props.defaultScale,
            tension: tension,
            friction: friction,
            useNativeDriver: props.useNativeDriver,
        }).start();

        if (props.onPressOut) {
            props.onPressOut(...args);
        }
    }
}

TouchableScale.propTypes = {
    ...TouchableWithoutFeedback.propTypes,
    style: ViewPropTypes.style,
    defaultScale: PropTypes.number.isRequired,
    activeScale: PropTypes.number.isRequired,
    tension: PropTypes.number.isRequired,
    friction: PropTypes.number.isRequired,
    pressInTension: PropTypes.number,
    pressInFriction: PropTypes.number,
    pressOutTension: PropTypes.number,
    pressOutFriction: PropTypes.number,
    useNativeDriver: PropTypes.bool,
};

TouchableScale.defaultProps = {
    defaultScale: 1,
    activeScale: 0.9,
    tension: 150,
    friction: 3,
    useNativeDriver: true,
};
