
import numeral from 'numeral';

const numberFormat = (number)=> numeral(number).format('0,0.00');

export default numberFormat;