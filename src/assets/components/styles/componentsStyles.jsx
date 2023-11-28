import styled from "styled-components";

export const Figure = styled.figure`
width: 25vw;
height: 30vh;
border-left: 3px solid #00D2DF;
`
export const Info = styled.div`
color: #FFFFFF;
display: flex;
flex-direction: column;
gap: 5px;
`
export const Nome = styled.p`
color:#00D2DF;
`
export const Descricao = styled.p`
color: #C4C4C4;
`
export const Img = styled.img`
width: 100%;
height: 100%;
`
export const Projeto = styled.div`
width: 25vw;
height: 65vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const A = styled.a`
background: transparent;
text-decoration: none;
color: #C4C4C4;
padding: 8px;
border: 1px solid;
border-image: linear-gradient(to right, #121212, #00D2DF) 1;
cursor: pointer;
`
export const Buttons = styled.div`
display: flex;
justify-content: space-around;
`