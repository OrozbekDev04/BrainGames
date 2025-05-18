import styled from '@emotion/styled';

type ResponsiveProps = {
  isMobile: boolean;
  color?: string;
};

export const Container = styled.div<ResponsiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d9e5f6;
  min-height: 100vh;
  padding-top: ${({ isMobile }) => (isMobile ? '20px' : '40px')};
`;

export const ScaleWrapper = styled.div<ResponsiveProps>`
  position: relative;
  width: ${({ isMobile }) => (isMobile ? '90%' : '600px')};
  height: ${({ isMobile }) => (isMobile ? '250px' : '300px')};
  margin: ${({ isMobile }) => (isMobile ? '10px 0' : '20px 0')};
`;

export const Beam = styled.div<{ rotation: number } & ResponsiveProps>`
  position: absolute;
  top: ${({ isMobile }) => (isMobile ? '100px' : '140px')};
  left: 0;
  right: 0;
  margin: auto;
  width: ${({ isMobile }) => (isMobile ? '90%' : '500px')};
  height: ${({ isMobile }) => (isMobile ? '25px' : '30px')};
  background: #4676bd;
  border-radius: 8px;
  transform: rotate(${(props) => props.rotation}deg);
  transform-origin: center center;
  display: flex;
  justify-content: space-between;
  transition: transform 0.3s ease;
  @media (max-width: 550px) {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      border-top: 2px solid white;
      z-index: 1;
    }
  }
`;

export const Tick = styled.div<ResponsiveProps>`
  width: 2px;
  height: ${({ isMobile }) => (isMobile ? '12px' : '15px')};
  background: white;
  position: relative;
  top: ${({ isMobile }) => (isMobile ? '15px' : '20px')};
`;

export const TickNumber = styled.div<{ rotation: number } & ResponsiveProps>`
  position: absolute;
  bottom: ${({ isMobile }) => (isMobile ? '-22px' : '-25px')};
  left: 50%;
  transform: translateX(-50%) rotate(${(props) => -props.rotation}deg)
    ${({ isMobile }) => isMobile && 'scale(0.8)'};
  font-size: ${({ isMobile }) => (isMobile ? '10px' : '12px')};
  color: white;
  white-space: nowrap;
  z-index: 2;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.6);
  padding: 2px 4px;
  border-radius: 3px;

  @media (max-width: 550px) {
    transform: translateX(-50%) rotate(0deg) scale(0.7);
    bottom: -18px;
    font-weight: bold;
  }
`;

export const TickWrapper = styled.div<ResponsiveProps>`
  width: ${({ isMobile }) => (isMobile ? '4.76%' : '20px')};
  display: flex;
  justify-content: center;
  position: relative;
  height: 40px;
  overflow: visible;
`;

export const CenterStand = styled.div<ResponsiveProps>`
  position: absolute;
  top: ${({ isMobile }) => (isMobile ? '140px' : '170px')};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ isMobile }) => (isMobile ? '15px' : '20px')};
  height: ${({ isMobile }) => (isMobile ? '80px' : '100px')};
  background: #d34d5c;
  border-radius: 4px;
`;

export const CenterStandFood = styled.div<ResponsiveProps>`
  position: absolute;
  top: ${({ isMobile }) => (isMobile ? '200px' : '250px')};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ isMobile }) => (isMobile ? '80px' : '120px')};
  height: ${({ isMobile }) => (isMobile ? '15px' : '20px')};
  background: #d34d5c;
  border-radius: 4px;
`;

export const Weight = styled.div<
  {
    isDragging: boolean;
    position: number | null;
  } & ResponsiveProps
>`
  width: ${({ isMobile }) => (isMobile ? '30px' : '30px')};
  height: ${({ isMobile }) => (isMobile ? '45px' : '60px')};
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid gray;
  cursor: grab;
  position: absolute;
  transition: 0.3s;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};

  ${(props) =>
    props.position !== null &&
    props.position < 0 &&
    `
    background: #ff6b6b;
    box-shadow: 0 2px 4px rgba(255, 107, 107, 0.3);
  `}

  ${(props) =>
    props.position !== null &&
    props.position > 0 &&
    `
    background: #4ecdc4;
    box-shadow: 0 2px 4px rgba(78, 205, 196, 0.3);
  `}

  ${(props) =>
    props.position === null &&
    `
    background: #f5a623;
    box-shadow: 0 2px 4px rgba(245, 166, 35, 0.3);
  `}
`;

export const BalanceText = styled.h2<ResponsiveProps>`
  color: brown;
  font-weight: 800;
  font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '2rem')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
`;

export const ButtonGroup = styled.div<ResponsiveProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ isMobile }) => (isMobile ? `10px` : `20px`)};
`;

export const ButtonReset = styled.button<ResponsiveProps>`
  background: ${({ color }) => (color === 'orange' ? color : `green`)};
  color: white;
  padding: ${({ isMobile }) => (isMobile ? '8px 16px' : '10px 20px')};
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
  border-radius: 8px;
  margin-bottom: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-bottom: 16px;
  position: absolute;
  top: 15px;
  left: 0;
`;

export const TextInfo = styled.p<ResponsiveProps>`
  color: orange;
  font-weight: 700;
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
  margin-top: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
  text-align: center;
`;
