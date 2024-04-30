// 추후에 전역 상태로 관리하기 
// 서버에서 불러온 이미지 값 || null 이면 기본 이미지 출력

import React from 'react';
import CustomImage from '../../common/atom/CustomImgae';
import DefaultImage from '../../../assets/Images/ProfileImage.png';

const ProfileImage = ({ size }) => {
    let width = 0;
    let height = 0;
    
    if (size === 'xs') {
        width = 20;
        height = 20;
    } else if (size === 'sm') {
        width = 40;
        height = 30;
    } else if (size === 'lg') {
        width = 80;
        height = 60;
    } else {
        width = 34;
        height = 34;
    }

    return (
        <CustomImage source={DefaultImage} width={width} height={height} />
    );
}

export default ProfileImage;