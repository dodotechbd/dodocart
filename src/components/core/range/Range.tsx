import { ChangeEvent, useEffect, useState } from 'react';

export const Range = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    if (fromValue > toValue) {
      setFromValue(toValue);
    }
  }, [fromValue, toValue]);
  return (
    <div>
      <p>{fromValue}</p>
      <p>{toValue}</p>
      <div className="relative py-8 mt-20">
        <input
          type="range"
          name=""
          min={0}
          max={100}
          value={fromValue > toValue ? toValue : fromValue}
          onInput={(e: ChangeEvent<HTMLInputElement>) => setFromValue(e.target.valueAsNumber)}
          id="fromSlider"
          className="from-thumb appearance-none h-0 z-10 absolute w-8/12 -top-1/2 -translate-y-1/2 bg-gray-400 left-0 pointer-events-none"
        />
        <input
          type="range"
          name=""
          min={0}
          max={100}
          value={toValue}
          onInput={(e: ChangeEvent<HTMLInputElement>) => setToValue(e.target.valueAsNumber)}
          id=""
          className={`to-thumb appearance-none h-1 ${
            toValue <= 0 ? 'z-20' : 'z-0'
          } absolute w-8/12 -top-1/2 -translate-y-1/2 bg-gray-400 left-0 pointer-events-none`}
        />
      </div>
    </div>
  );
};
