import { ChangeEvent, useCallback, useId } from 'react';
import { ReactNode, useState } from 'react';

export interface InnerProductEntry {
  name: string;
  display: ReactNode;
  onSelect?: () => void;
}

interface InnerProductChooserProps {
  nameIPRecord: Record<string, InnerProductEntry>;
}

const InnerProductChooser = ({ nameIPRecord }: InnerProductChooserProps) => {
  const [innerProductName, setInnerProductName] = useState<string>();
  const innerProductId = useId();

  const onInnerProductNameChosen = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setInnerProductName(e.currentTarget.value);
      nameIPRecord[e.currentTarget.value]?.onSelect?.();
    },
    [nameIPRecord]
  );

  return (
    <>
      <select
        id={innerProductId}
        title="Inner Product"
        onChange={onInnerProductNameChosen}
      >
        {Object.entries(nameIPRecord).map((entry, index) => (
          <option id={entry[0]} key={index}>
            {entry[1].name}
          </option>
        ))}
      </select>
      {innerProductName && nameIPRecord[innerProductName].display}
    </>
  );
};

export default InnerProductChooser;
