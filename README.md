# 마음의 창: 스무고개의 여행

자폐 스펙트럼 장애(ASD) 아동을 위한 양방향 소통 플랫폼, **마음의 창**입니다.

## 🏆 성과 
### 한국정보처리학회 ASK 2024
본 연구는 ASK 2024 학술발표대회 논문집에 정식 등재되었습니다.
[➔ 논문 다운로드](https://www.manuscriptlink.com/society/kips/conference/ask2024/file/downloadSoConfManuscript/abs/KIPS_C2024A0101)

### 2024 디지털 경진대회(SW 부문) 금상
본 프로젝트는 소프트웨어중심대학 사업단이 주관한 2024 교내 디지털경진대회(SW부문)에서 금상을 수상하였습니다.

## 💻 Project

**마음의 창**은 대화형 AI를 활용하여 스무고개 게임을 통해 ASD(자폐 스펙트럼 장애) 아동이 질문하고 응답하는 기술을 연습하도록 돕는 크로스 플랫폼입니다. 놀이 치료에서 자주 활용되는 질문과 응답 게임을 AI 치료자 역할로 구현하여 디지털 환경에서 익숙한 아동이 소통 능력을 훈련할 수 있도록 지원합니다. 

### 의의
**전문가 자문**
- 전문 치료사에게 사전 자문을 구한 결과, ASD 아동의 특성에 맞는 반응 설계가 이루어진다면 긍정적인 자극을 제공할 수 있다는 평가를 받았습니다.
- 다만, 칭찬이나 격려의 말이 일률적으로 제공될 경우 반향어로 이어질 수 있다는 우려가 제기되었습니다.
- 이를 보완하기 위해, 상호 소통 중심의 반응 설계를 강조하고, 백엔드 서버에서 메시지를 랜덤하게 제공하도록 하여 반복적 반응을 줄였습니다.

**수요 조사**
- ASD 아동 관련 네이버 카페를 통해 구글폼 설문을 진행한 결과, 참여자들은 본 연구 플랫폼의 상호작용 가능성을 긍정적으로 평가했습니다.
- 또한 스무고개 외에도 다양한 게임 콘텐츠가 추가되기를 바란다는 의견이 다수 제시되었습니다.

**발전 가능성**
현재 AI 기반의 양방향 소통을 활용한 자폐 스펙트럼 치료 기술은 상용화 단계에 이르지 않았습니다. 그러나 디지털 치료제 분야의 높은 성장 가능성과 함께, 본 연구에 대한 ASD 아동 부모들의 긍정적인 반응을 고려할 때 본 플랫폼은 충분히 개발 가치가 있다고 판단됩니다.

#### 🧑🏻‍🤝‍🧑🏻 FE Developer Roles

- **Prototype**

| 채민아         | 김윤선        |
| -------------- | ------------- |
| Main           | Signup        |
| Setting        | Auth          |
| Gamie          | Report        |
| Splash         |               |

- **Feature Development**

| 채민아         | 김윤선        |
| -------------- | ------------- |
| Signup         | Lottie Character |
| Kakao 연동     | Tutorial      |
| Login          | Report        |
| Game           |               |
| Main           |               |
| Setting        |               |

- **BE GitHub**: [Github Link](https://github.com/yuseonkim/maeum2_BE)

- **Notion**: [Notion Link](https://www.notion.so/2024-1b6b85ce66944f60b7b3bb25f9129fba)

- **시연 영상**: [Youtube Link](https://www.youtube.com/watch?v=Xs86UbhY9k8&t=16s)

---

### 🎈 Service Flow

![image01](https://github.com/ddookddook/maeum2_FE/assets/103165845/b506b901-1d85-4143-a7d2-b296f6f5ab01)

---

### ⏰ Develop Period

- 2024.03.29 - 2024.08.27

---

### 🔎 Purpose

디지털 치료와 놀이 치료를 결합하여 자폐 스펙트럼 장애 아동들의 치료 효과를 극대화하는 것을 목표로 합니다. 디지털 치료를 통해 시간과 비용을 절약하고, 지역, 장소, 시간의 제약을 넘어 치료를 받을 수 있는 기회를 제공합니다.

---

## 🚀 How to Start?

```bash
cd app
npm install
cd android
./gradlew clean
cd .. 
npm run android
```

참고 : React Native Android 빌드는 아직 JDK 21을 공식 지원하지 않음, JDK 17까지만 안정적으로 동작합니다. 

## 🤖 Technology stack

<div align="center">


#### FrontEnd stack
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat-square&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>

#### React Native Library 
<a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg"><img width="256" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/256px-React-icon.svg.png?20220125121207"></a>


<img src="https://img.shields.io/badge/Lottie-68BC71?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/AsyncStorage-61DAFB?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/Voice-61DAFB?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/Sound-61DAFB?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/Nativewind-61DAFB?style=flat-square&logo=&logoColor=white"/>
<img src="https://img.shields.io/badge/Webview-61DAFB?style=flat-square&logo=&logoColor=white"/>


#### Cowork tools

<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
</div>
<br/>


```
Reason why
- React Native: iOS와 Android 동시 개발. 
- React Native Voice / Sound: 실제 디바이스에서 음성 인식 및 출력을 지원.
- Lottie: 움직이는 캐릭터 애니메이션을 구현, 다양한 디바이스 해상도에 맞게 Json 파일을 사용.
- Redux: 회원가입 절차에 따라 사용자가 입력한 정보를 임시 저장하여 순차적 진행 가능, 게임 순서 저장. 
- AsyncStorage : 앱을 종료해도 로그인 상태 유지. 
- Webview : 카카오 로그인 연동 화면 구현.
```

## 💡 Main Function

![Frame 97](https://github.com/ddookddook/maeum2_FE/assets/103165845/408d9f68-1322-4d0e-a31a-5674b266a367)


## 📱 User Interface 

#### Account  

| Login | Kakao | 
| --- | --- | 
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/559aa68e-52ed-40ec-ae2b-478f78af2560) | ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/532a1be0-4b8d-4421-ab38-acb2f88a1cae) | 


#### Signup  

| 보호자 정보 | 문자 인증 | 아이 정보 |
| --- | --- | --- | 
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/ab798cda-1387-4648-8957-ba91e4e056bb)| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/ad7b8fbf-d83c-484d-9410-7f9aa8b1f71b)| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/fdfaa46f-65f6-4f7f-b23c-839763a32feb)|


#### Home

| Splash | Main |
| --- |--- |
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/a23bb6a5-3b78-4786-a7e9-aed036be4b4a)| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/7f984e67-1445-4013-bc8c-9c6d0fcfc03e)| 


#### Game 

| STT | TTS | 
| --- | --- | 
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/43e7d198-1d88-45ea-8005-242dfe019ef3) |![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/e8187940-95c8-4c2c-ac01-31e149d1c98c)| 


#### Setting

| UserInfo | UserInfoFix | Confirm Modal | 
| --- | --- | --- | 
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/a07eb073-3ad2-4185-9eca-ce5dfcc45ffa) |![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/8c54ecae-f9a2-414e-864b-ff2f88397045)| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/48e43228-3417-4f93-8d98-5f0a952d2b4a)| 


#### History

| None | Report | Detail Chat | 
| --- | --- | --- | 
| ![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/35b3bdae-8d92-4fd9-bc33-2a34afba877c) |![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/a8422a7d-f59d-4cd7-8b73-74b8899a3fd4) |![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/17394d9a-614c-4c81-a426-9f6567d77985)| 

#### ETC

| Error Handling | Validation | Loading | 
| --- | --- | --- | 
|![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/bf327bfd-a4f9-44dd-95e8-17eff7080848) |![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/a6523e6d-1e65-4959-9b13-9ac0478d381c)|![image](https://github.com/ddookddook/maeum2_FE/assets/103165845/c1966dd7-bfa8-41f9-b926-e19b0a3e551a)| 


