import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const ModalDatePicker = ({title}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title={title} onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        locale="ko-KR"
        maximumDate={new Date('2023-12-31')} // 연령 제한
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ModalDatePicker;
