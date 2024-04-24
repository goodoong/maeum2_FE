import Container from "../../common/atom/Container";
import CustomText from "../../common/atom/CustomText";
import CustomBtn from "../../common/atom/CustomBtn";



const Maintemplate = ({ route, navigation, appState }) => {
    return (
        <Container>
            <CustomText>마음아</CustomText>
            {/* 이미지 */}
            <CustomBtn  size="sm" color="buttonyellow" rounded={true} title="회원 가입"/>
        </Container>
    )
}

export default Maintemplate;