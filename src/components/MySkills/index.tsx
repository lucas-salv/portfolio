import { MySkills, MySkillsTitle, MySkillsList } from "./styles";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full, DiJavascript1 } from 'react-icons/di';

export default () => {
    return (
        <MySkills>
            <MySkillsTitle><span>Minhas Habilidades</span></MySkillsTitle>
            <MySkillsList>
                <AiOutlineHtml5 size="40" />
                <DiCss3Full size="40" />
                <DiJavascript1 size="40" />
                <AiOutlineHtml5 size="40" />
                <DiCss3Full size="40" />
                <DiJavascript1 size="40" />
                <AiOutlineHtml5 size="40" />
                <DiCss3Full size="40" />
                <DiJavascript1 size="40" />
                <AiOutlineHtml5 size="40" />
                <DiCss3Full size="40" />
            </MySkillsList>
        </MySkills>
    )
}