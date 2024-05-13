import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker date={date} onDateChange={setDate} />;
};

export default CustomDatePicker;