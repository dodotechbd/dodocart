import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

interface RangeProps {
  min?: number;
  max?: number;
  onChange?: Function;
}

export const Range = ({ min = 0, max = 50000, onChange }: RangeProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);
  return (
    <>
      <div className="flex justify-between w-72">
        <div>
          <p className="text-sm text-[#A7A7A7] mb-2">From</p>
          <input
            type="text"
            className="w-24 outline-none rounded p-2 border-[0.5px] border-[#9F9F9F]"
            value={minVal}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = Math.min(+event.target.value, maxVal - 1);
              const newValue = value < min ? min : value > max - 1 ? max - 1 : value;
              setMinVal(newValue);
            }}
          />
        </div>
        <div className="text-end">
          <p className="text-sm text-[#A7A7A7] mb-2">To</p>
          <input
            type="text"
            className="w-24 outline-none rounded p-2 border-[0.5px] border-[#9F9F9F]"
            value={maxVal}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = Math.max(+event.target.value, minVal + 1);
              const newValue = value <= min ? min + 1 : value > max ? max : value;
              setMaxVal(newValue);
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <input
          type="range"
          name=""
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
          }}
          id="fromSlider"
          className={`thumb w-72 h-0 absolute pointer-events-none outline-none appearance-none z-[3] ${
            minVal > max - 100 && 'z-[5]'
          }`}
        />
        <input
          type="range"
          name=""
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
          }}
          id=""
          className="thumb w-72 h-0 absolute pointer-events-none outline-none appearance-none z-[4]"
        />

        <div className="relative w-72">
          <div className="absolute h-1 rounded-[3px] bg-[#CECECE] w-full z-[1]"></div>
          <div ref={range} className="absolute h-1 rounded-[3px] bg-[#414141] z-[2]"></div>
        </div>
      </div>
    </>
  );
};
