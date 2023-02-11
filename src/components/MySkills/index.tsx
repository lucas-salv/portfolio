import { MySkills, MySkillsTitle, MySkillsList } from "./styles";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full, DiJavascript1 } from 'react-icons/di';
import { IoLogoSass } from 'react-icons/io';
import { SiStyledcomponents, SiReact, SiRedux, SiNodedotjs, SiGraphql, SiFigma } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb'

export default () => {
    return (
        <MySkills>
            <MySkillsTitle><span>Minhas Habilidades</span></MySkillsTitle>
            <MySkillsList>
                <AiOutlineHtml5 size="40" />
                <DiCss3Full size="40" />
                <DiJavascript1 size="40" />
                <IoLogoSass size="40" />
                <SiStyledcomponents size="40" />
                <SiReact size="36" />
                <SiRedux size="36" />
                <TbBrandNextjs size="40" />
                <SiNodedotjs size="36" />
                <SiGraphql size="36" />
                <SiFigma size="36" />
            </MySkillsList>
        </MySkills>
    )
}