import styled from '@emotion/styled';

type ResponsiveProps = {
  isMobile: boolean;
};

export const Container = styled.div<ResponsiveProps>`
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '10px' : '20px')};
  background: #fffeee;
  // position: relative;
`;

export const BackButton = styled.button<ResponsiveProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-bottom: 16px;
  position: absolute;
  top: 15px;
  left: ${({ isMobile }) => (isMobile ? '-5px' : '-10px')};
`;

export const Task = styled.h1<ResponsiveProps>`
  margin: 0 auto;
  background: brown;
  width: ${({ isMobile }) => (isMobile ? '280px' : '320px')};
  color: #fffeee;
  font-size: ${({ isMobile }) => (isMobile ? '20px' : '25px')};
  border: aqua 2px solid;
  border-radius: 7px;
  text-align: center;
  padding: ${({ isMobile }) => (isMobile ? '8px' : '10px')};
  margin-bottom: 16px;
`;

export const InfoContainer = styled.div<ResponsiveProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '8px' : '16px')};
  margin-bottom: 16px;
  justify-content: center;
`;

export const TextVessel = styled.p<ResponsiveProps>`
  background: blue;
  color: #fffeee;
  font-size: ${({ isMobile }) => (isMobile ? '18px' : '25px')};
  border: aqua 2px solid;
  border-radius: 7px;
  padding: ${({ isMobile }) => (isMobile ? '4px' : '8px')};
  text-align: center;
  width: ${({ isMobile }) => (isMobile ? '100%' : '300px')};
  margin: 0;
`;

export const TextTool = styled.p<ResponsiveProps>`
  background: red;
  color: #fffeee;
  font-size: ${({ isMobile }) => (isMobile ? '18px' : '25px')};
  border: aqua 2px solid;
  border-radius: 7px;
  padding: ${({ isMobile }) => (isMobile ? '4px' : '8px')};
  text-align: center;
  width: ${({ isMobile }) => (isMobile ? '100%' : '320px')};
  margin: 0;
`;

export const Text = styled.p<ResponsiveProps>`
  margin: 0 auto;
  background: #000;
  color: #fffeee;
  font-size: ${({ isMobile }) => (isMobile ? '18px' : '25px')};
  border: aqua 2px solid;
  border-radius: 7px;
  padding: ${({ isMobile }) => (isMobile ? '6px' : '8px')};
  text-align: center;
  width: ${({ isMobile }) => (isMobile ? '220px' : '240px')};
`;

export const VesselWrapper = styled.div<ResponsiveProps>`
  margin: ${({ isMobile }) => (isMobile ? '16px auto' : '24px auto')};
  transform: ${({ isMobile }) => (isMobile ? 'scale(0.8)' : 'scale(1)')};
`;

export const Btns = styled.div<ResponsiveProps>`
  margin-top: ${({ isMobile }) => (isMobile ? '12px' : '16px')};
  display: flex;
  gap: ${({ isMobile }) => (isMobile ? '8px' : '16px')};
  justify-content: center;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;
`;

export const BaseButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ResetBtn = styled(BaseButton)`
  background-color: orange;
  color: white;
`;

export const CheckBtn = styled(BaseButton)`
  background-color: green;
  color: white;
`;
