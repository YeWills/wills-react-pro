import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './index.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  timeout: PropTypes.number,
  onDismiss: PropTypes.func,
};

const defaultProps = {
  prefixCls: 'components-notification',
  title: '',
  content: '',
  timeout: 4500,
  onDismiss: () => {},
};

class Notification extends Component {
  componentDidMount() {
    const { onDismiss, timeout } = this.props;
    this.timeout = setTimeout(onDismiss, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    alert(2)
    const {
      prefixCls,
      title,
      content,
      onDismiss,
    } = this.props;

    return (
      <div className={`${prefixCls} ccc`}>
        <Icon className={`${prefixCls}-close`} type="close" onClick={onDismiss} />
        <div className={`${prefixCls}-title`}>
          {title}{125}
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
export default Notification;
