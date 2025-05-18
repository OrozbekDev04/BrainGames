import { useAppDispatch, useAppSelector } from '../../app/store';
import { useMediaQuery, useTheme } from '@mui/material';
import { Vessel } from '../../entities/vessel/ui/Vessel';
import { PourControl } from '../../features/FillWaterTask/ui/FillWaterView';
import { useSound } from '../../shared/lib/useSound';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  pour,
  remove,
  reset,
  nextTask
} from '../../features/FillWaterTask/model/fillWaterSlice';
import {
  selectCurrentAmount,
  selectPourCount,
  selectVesselCapacity,
  selectToolVolume
} from '../../features/FillWaterTask/model/selectors';
import { useNavigate } from 'react-router-dom';
import { BackButton, Btns, CheckBtn, Container, InfoContainer, ResetBtn, Task, Text,TextVessel, VesselWrapper } from './style';
import { getRandomPhrase } from '../../shared/lib/phrases';

const vessels = [
  { name: 'Ведро', capacity: 10 },
  { name: 'Контейнер', capacity: 6 },
  { name: 'Банка', capacity: 1 }
];

const tools = [
  { name: 'Бутылка', volume: 1 },
  { name: 'Стакан', volume: 0.25 }
];

export const WaterTaskPage = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const { playPour, playSuccess, playError, playBubble } = useSound();
  const currentVolume = useAppSelector(selectCurrentAmount);
  const vesselCapacity = useAppSelector(selectVesselCapacity);
  const pourCount = useAppSelector(selectPourCount);
  const toolVolume = useAppSelector(selectToolVolume);

  const selectedVessel = vessels.find((v) => v.capacity === vesselCapacity);
  const selectedTool = tools.find((t) => t.volume === toolVolume);

  const isCorrect = currentVolume === vesselCapacity;

  const handlePour = () => {
    playPour();
    dispatch(pour());
  };

  const handleRemove = () => {
    playBubble();
    dispatch(remove());
  };

  const handleReset = () => {
    playBubble();
    dispatch(reset());
  };

  const handleCheck = () => {
    if (isCorrect) {
      playSuccess();
      alert(getRandomPhrase());
      dispatch(nextTask());
    } else {
      setTimeout(() => {
        playError();
        alert('Попробуй ещё!');
      }, 100);
    }
  };

  return (
    <Container isMobile={isMobile}>
      <BackButton onClick={() => navigate('/')} isMobile={isMobile}>
        <ArrowBackIcon fontSize={isMobile ? 'medium' : 'large'} />
      </BackButton>

      <Task isMobile={isMobile}>Задание: Наполни сосуд</Task>

      <InfoContainer isMobile={isMobile}>

        <TextVessel isMobile={isMobile}>
            Сосуд:{' '}
          <strong>
            {selectedVessel?.name} ({selectedVessel?.capacity} л)
          </strong><br />
          Предмет:{' '}
          <strong>
            {selectedTool?.name} ({selectedTool?.volume} л)
          </strong>
        </TextVessel>
      </InfoContainer>

      <Text isMobile={isMobile}>Вы налили: {pourCount} раз</Text>

      <VesselWrapper isMobile={isMobile}>
        <Vessel name="Ведро" capacity={vesselCapacity} filled={currentVolume} />
      </VesselWrapper>

      <PourControl
        name={selectedTool?.name || ''}
        volume={toolVolume}
        onPour={handlePour}
        capacity={vesselCapacity}
        filled={currentVolume}
        onRemove={handleRemove}
      />

      <Btns isMobile={isMobile}>
        <ResetBtn onClick={handleReset} disabled={currentVolume <= 0}>
          Сбросить
        </ResetBtn>
        <CheckBtn onClick={handleCheck}>Проверить</CheckBtn>
      </Btns>
    </Container>
  );
};

