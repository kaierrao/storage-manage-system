
import React, {PropTypes} from 'react';
import {Form, Button, Select} from 'antd';
import styles  from './index.css';

const FormItem = Form.Item;
const Option = Select.Option;

function FundsSearchForm({
	onSearch,
	form: {
		getFieldDecorator,
		getFieldsValue,
		validateFields
	}
}){
	const onSubmit = (e)=>{
		e.preventDefault();
		validateFields((err, values)=>{
			if(!!err){
				return;
			}
			onSearch(values);
		});
	};

	return (
		<div className={styles.fundsSearchForm}>
			<Form layout='inline' onSubmit={onSubmit}>
				<FormItem>
					{
						getFieldDecorator('productType', {
							initialValue: '1'
						})(
							<Select>
								<Option value='1'>书籍</Option>
								<Option value='2'>生活用品</Option>
							</Select>
						)
					}
				</FormItem>
				<FormItem>
					{
						getFieldDecorator('productName', {
							initialValue: '1'
						})(
							<Select>
								<Option value='1'>数学</Option>
								<Option value='2'>英语</Option>
							</Select>
						)
					}
				</FormItem>
				<Button type='primary' htmlType='submit'>搜索</Button>
			</Form>
		</div>
	);
}

FundsSearchForm.propTypes = {};

export default Form.create()(FundsSearchForm);