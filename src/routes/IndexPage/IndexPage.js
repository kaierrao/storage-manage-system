import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {normal, title, welcome, list} from './index.css';

function IndexPage() {
    return (
        <div className={normal}>
            <h1 className={title}>欢迎光临小型进销库存管理系统</h1>
            <div className={welcome}/>
            {}
        </div>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
