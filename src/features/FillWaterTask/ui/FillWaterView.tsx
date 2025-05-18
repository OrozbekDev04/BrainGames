import styled from '@emotion/styled';

interface PourControlProps {
  name: string;
  volume: number;
  onPour: () => void;
  capacity: number;
  filled: number;
  onRemove: () => void;
}

export const PourControl = ({ name, volume, onPour, onRemove , capacity,filled }: PourControlProps) => {
  return (
    <Wrapper>
      <Label>{name} ({volume} л)</Label>
      <ButtonGroup>
        <Button onClick={onRemove} disabled={filled <= 0}>Убрать</Button>
        <Button onClick={onPour} disabled={filled === capacity}>Налить</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #005fcc;
  }
`;
