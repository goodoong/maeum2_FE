export const settingList1 = [
  {key: '도움말', icon: 'help', screen: 'tutorial'},
  {key: '회원정보 수정', icon: 'person', screen: 'info'},
  {key: '로그아웃', icon: 'logout'},
];

export const InformationList = [
  {key: '성', Regex: '', errormsg: '성을 입력해주세요.'},
  {
    key: '이름',
    Regex: /^[A-Za-z가-힣]{2,20}$/,
    errormsg:
      '이름은 한글 또는 영문으로 시작하고, 2자 이상 20자 이하로 입력해주세요.',
  },
  {
    key: 'Email',
    Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errormsg: '올바른 이메일 주소를 입력해주세요.',
  },
  {
    key: '연락처',
    Regex: /^\d{10,11}$/,
    errormsg: '올바른 연락처를 입력해주세요.',
  },
];
