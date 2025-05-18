import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { addRightWeight, nextBalance, resetGame } from '../model/balanceSlice';
import { selectLeftMoment, selectRightMoment } from '../model/selectors';
import {
  Container,
  BalanceText,
  ButtonReset,
  ScaleWrapper,
  Beam,
  Tick,
  TickNumber,
  CenterStand,
  CenterStandFood,
  Weight,
  TextInfo,
  ButtonGroup,
  BackButton,
  TickWrapper
} from './_style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../../../shared/lib/useSound';
import { getRandomPhrase } from '../../../shared/lib/phrases';

export default function BalanceGame() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();
  const { playPour, playSuccess, playRandome } = useSound();
  const { leftWeights, rightWeights, availableWeights, isWinner } =
    useAppSelector((state) => state.balance);

  const leftMoment = useAppSelector(selectLeftMoment);
  const rightMoment = useAppSelector(selectRightMoment);
  const [dragId, setDragId] = useState<number | null>(null);

  const handleDrop = (pos: number) => {
    if (dragId === null || pos <= 0) return;

    playPour();
    dispatch(
      addRightWeight({
        value: dragId,
        position: pos
      })
    );
  };

  const handleRandome = () => {
    dispatch(nextBalance());
    playRandome();
  };

  const handleReset = () => {
    dispatch(resetGame());
    playRandome();
  };

  useEffect(() => {
    if (isWinner) {
      playSuccess();
      alert(getRandomPhrase());
    }
  }, [isWinner]);

  const netMoment = rightMoment - leftMoment;
  const rotation = Math.max(-13, Math.min(13, netMoment));

  return (
    <Container isMobile={isMobile}>
      <BackButton onClick={() => navigate('/')}>
        <ArrowBackIcon fontSize={isMobile ? 'medium' : 'large'} />
      </BackButton>
      <BalanceText isMobile={isMobile}>Уравновесь весы</BalanceText>
      <ButtonGroup isMobile={isMobile}>
        <ButtonReset isMobile={isMobile} onClick={handleRandome}>
          Следуещий игру
        </ButtonReset>
        <ButtonReset isMobile={isMobile} color="orange" onClick={handleReset}>
          Сбросить игру
        </ButtonReset>
      </ButtonGroup>

      <ScaleWrapper isMobile={isMobile}>
        <Beam rotation={rotation} isMobile={isMobile}>
          {Array.from({ length: 21 }, (_, i) => {
            const pos = i - 10;
            return (
              <TickWrapper
                key={pos}
                isMobile={isMobile}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(pos)}
              >
                <Tick isMobile={isMobile}>
                  <TickNumber
                    rotation={isMobile ? 0 : rotation}
                    isMobile={isMobile}
                  >
                    {pos}
                  </TickNumber>
                </Tick>
              </TickWrapper>
            );
          })}
        </Beam>
        <CenterStand isMobile={isMobile} />
        <CenterStandFood isMobile={isMobile} />

        {leftWeights.map((w, i) => (
          <Weight
            key={`left-${i}`}
            isDragging={false}
            position={w.position}
            isMobile={isMobile}
            style={{
              top: isMobile ? 80 : 100,
              left: 50 + (isMobile ? 18 : 23.8) * (w.position + 10)
            }}
          >
            {w.value}
          </Weight>
        ))}

        {rightWeights.map((w, i) => (
          <Weight
            key={`right-${i}`}
            isDragging={false}
            position={w.position}
            isMobile={isMobile}
            style={{
              top: isMobile ? 80 : 100,
              left: 50 + (isMobile ? 18 : 23.8) * (w.position + 10)
            }}
          >
            {w.value}
          </Weight>
        ))}

        {availableWeights.map((value, i) => (
          <Weight
            key={`avail-${i}`}
            draggable
            isDragging={dragId === value}
            position={null}
            isMobile={isMobile}
            onDragStart={() => setDragId(value)}
            style={{
              top: isMobile ? 200 : 250,
              left: 100 + i * (isMobile ? 50 : 60)
            }}
          >
            {value}
          </Weight>
        ))}
      </ScaleWrapper>

      <TextInfo isMobile={isMobile}>
        Левый момент: {leftMoment}, Правый момент: {rightMoment}
      </TextInfo>
    </Container>
  );
}
