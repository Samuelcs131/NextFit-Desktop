import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        background: none;
        font-family: ${({theme})=>theme.typography.body1.fontFamily};
     }
     
     html{
        font-size: ${({theme})=>theme.typography.htmlFontSize};
     }
     
     body{
        background: ${({theme})=>theme.pallete.background.default};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.body1.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.body1.letterSpacing};
        font-weight: ${({theme})=>theme.typography.body1.fontWeight};
        color: ${({theme})=>theme.pallete.text.primary};
     }

   p{
        font-size: ${({theme})=>theme.typography.fontSize};
   }

   a{
     
   }

   // HEADING
   h1{
        font-family: ${({theme})=>theme.typography.h1.fontFamily};
        font-size: calc(${({theme})=>theme.typography.h1.fontSize} + 1.5vw);
        line-height: ${({theme})=>theme.typography.h1.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h1.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h1.fontWeight};
   }
   h2{
        font-family: ${({theme})=>theme.typography.h2.fontFamily};
        font-size: calc(${({theme})=>theme.typography.h2.fontSize} + .9vw);
        line-height: ${({theme})=>theme.typography.h2.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h2.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h2.fontWeight};
   }
   h3{
        font-family: ${({theme})=>theme.typography.h3.fontFamily};
        font-size: calc(${({theme})=>theme.typography.h3.fontSize} + .6vw);
        line-height: ${({theme})=>theme.typography.h3.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h3.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h3.fontWeight};
   }
   h4{
        font-family: ${({theme})=>theme.typography.h4.fontFamily};
        font-size: calc(${({theme})=>theme.typography.h4.fontSize} + .3vw);
        line-height: ${({theme})=>theme.typography.h4.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h4.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h4.fontWeight};
   }
   h5{
        font-family: ${({theme})=>theme.typography.h5.fontFamily};
        font-size: ${({theme})=>theme.typography.h5.fontSize};
        line-height: ${({theme})=>theme.typography.h5.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h5.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h5.fontWeight};
   }
   h6{
        font-family: ${({theme})=>theme.typography.h6.fontFamily};
        font-size: ${({theme})=>theme.typography.h6.fontSize};
        line-height: ${({theme})=>theme.typography.h6.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h6.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h6.fontWeight};
   }

     // SM
     @media screen and (min-width: ${({theme})=>theme.breakpoints.value.sm}) {
          
     }

     // MD
     @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
          
     }
     
     // LG
     @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
          
     }
     
     // XL
     @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
          h1{ font-size: ${({theme})=>theme.typography.h1.fontSize}; }
          h2{ font-size: ${({theme})=>theme.typography.h2.fontSize}; }
          h3{ font-size: ${({theme})=>theme.typography.h3.fontSize}; }
          h4{ font-size: ${({theme})=>theme.typography.h4.fontSize}; } 
     }
     
     // XXL
     @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
     }

`