import React, {Component, PropTypes} from 'react';
import {orderTitle, orderNumberClass} from './index.css';

const OrderTitle = ({orderNumber}) => {

    return (
        <div className={orderTitle}>
          进销库存系统出货单
       
            <span className={orderNumberClass}>单据编号：{orderNumber}</span>
        </div>
    );
};

export default OrderTitle;