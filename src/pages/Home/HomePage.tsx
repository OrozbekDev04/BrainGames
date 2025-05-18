import { useNavigate } from 'react-router-dom';
import { useSound } from '../../shared/lib/useSound';
import { Card, CardContent, CardDescription, CardGroup, CardImage, CardTitle, HomeText } from './style';
import { useMediaQuery, useTheme } from '@mui/material';
import WaterIcon from '../../shared/assets/WaterImage.jpeg'; // Замените на реальные пути
import BalanceIcon from '../../shared/assets/BalanceImage.png'; // Замените на реальные пути

export const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { playGame } = useSound();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const handleRouteWater = () => {
    playGame();
    navigate('water-task');
  };

  const handleRouteBalance = () => {
    playGame();
    navigate('balance-task');
  };

  return (
    <div style={{ padding: isMobile ? '16px' : '24px' }}>
      <HomeText isMobile={isMobile}>BRAIN GAMES</HomeText>
      <CardGroup isMobile={isMobile}>
        <GameCard 
          isMobile={isMobile}
          onClick={handleRouteWater}
          title="Water Task"
          description="Наполни сосуд точно"
          image={WaterIcon}
        />
        <GameCard 
          isMobile={isMobile}
          onClick={handleRouteBalance}
          title="Balance Task"
          description="Уравновесь предметы"
          image={BalanceIcon}
        />
      </CardGroup>
    </div>
  );
};

interface GameCardProps {
  isMobile: boolean;
  onClick: () => void;
  title: string;
  description: string;
  image: string;
}

const GameCard = ({ isMobile, onClick, title, description, image }: GameCardProps) => (
  <Card isMobile={isMobile} onClick={onClick}>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);