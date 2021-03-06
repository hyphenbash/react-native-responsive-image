var React = require('react-native');
var Device = require('./device');
var { Image } = React;

var ResponsiveImage = React.createClass({
    setNativeProps: function(nativeProps) {
        this._root.setNativeProps(nativeProps);
    },
    render: function () {
        var width = Math.ceil(this.props.initWidth * Device.scale);
        var height = Math.ceil(this.props.initHeight * Device.scale);
        return (
            <Image style={[{width: width, height: height}, this.props.style]}
                   source={this.props.source}
                   ref={component => this._root = component}>
                {this.props.children}
            </Image>
        );
    }
});

module.exports = ResponsiveImage;
