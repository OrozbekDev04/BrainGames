import styled from '@emotion/styled';

type ResponsiveProps = {
  isMobile: boolean;
}

export const HomeText = styled.h1<ResponsiveProps>`
  margin: 0 auto;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  width: ${({ isMobile }) => (isMobile ? '90%' : '400px')};
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? '24px' : '32px')};
  border-radius: 12px;
  text-align: center;
  padding: ${({ isMobile }) => (isMobile ? '12px' : '16px')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '24px' : '32px')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Card = styled.div<ResponsiveProps>`
  width: ${({ isMobile }) => (isMobile ? '160px' : '220px')};
  height: ${({ isMobile }) => (isMobile ? '220px' : '280px')};
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px ;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardGroup = styled.div<ResponsiveProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '24px' : '32px')};
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  text-align: center;
`;