import React,{useState} from 'react';
import {Button} from 'react-native';
import CustomBtn from './CustomBtn';
import DatePicker from 'react-native-date-picker';

const ModalDatePicker = ({title, date, setDate}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomBtn color="buttonpink" size="xs" rounded title={title} onPress={() => setOpen(true)}  />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        locale="ko-KR"
        maximumDate={new Date()}
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ModalDatePicker;