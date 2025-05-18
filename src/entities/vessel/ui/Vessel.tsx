import styled from '@emotion/styled';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface VesselProps {
  name: string;
  capacity: number;
  filled: number;
}


export const Vessel = ({ name, capacity, filled }: VesselProps) => {
  const percentage = Math.min((filled / capacity) * 100, 100);
  const waterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (waterRef.current) {
      const percent = (filled / capacity) * 100;
      gsap.to(waterRef.current, {
        height: `${percent}%`,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [filled]);

  return (
    <Wrapper>
      <Title>{name}</Title>
      <VesselContainer>
        <Water $fillHeight={percentage} ref={waterRef}/>
      </VesselContainer>
      <VolumeInfo>
        {filled} / {capacity} литров
      </VolumeInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const VesselContainer = styled.div`
  width: 100px;
  height: 200px;
  border: 2px solid #444;
  border-radius: 8px;
  position: relative;
  background: #eee;
  overflow: hidden;
`;

interface WaterProps {
  $fillHeight: number;
}

const Water = styled.div<WaterProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4caeff;
  height: ${({ $fillHeight }) => `${$fillHeight}%`};
  transition: height 0.5s ease-in-out;
`;

const VolumeInfo = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;

