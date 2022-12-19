import { FC, useCallback, useState } from 'react';
import BoundInput from '../BoundInput/BoundInput';

interface BoundChooserProps {
  defaultMin: number;
  defaultMax: number;
  onSetMinNumber?: (minNumber: number) => void;
  onSetMaxNumber?: (maxNumber: number) => void;
}

const BoundChooser: FC<BoundChooserProps> = ({
  defaultMin,
  defaultMax,
  onSetMinNumber,
  onSetMaxNumber,
}) => {
  const [minNumber, setMinNumber] = useState<number>(defaultMin);
  const [maxNumber, setMaxNumber] = useState<number>(defaultMax);

  const onChangeMinBound = useCallback(
    (newMinNumber: number) => {
      setMinNumber(newMinNumber);
      onSetMinNumber?.(newMinNumber);
    },
    [onSetMinNumber]
  );

  const onChangeMaxBound = useCallback(
    (newMaxNumber: number) => {
      setMaxNumber(newMaxNumber);
      onSetMaxNumber?.(newMaxNumber);
    },
    [onSetMaxNumber]
  );

  return (
    <>
      <div>
        <BoundInput
          id="min-number"
          min={1}
          max={maxNumber}
          defaultBound={minNumber}
          text="Min Number:"
          onBoundChange={onChangeMinBound}
        />
      </div>
      <div>
        <BoundInput
          id="max-number"
          min={minNumber}
          defaultBound={maxNumber}
          text="Max Number:"
          onBoundChange={onChangeMaxBound}
        />
      </div>
    </>
  );
};

export default BoundChooser;
