import { useState, useEffect } from 'react';
import { Stack, StackProps, Box, Input,  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper, } from '@chakra-ui/react'

const today: Date = new Date();
const millennium: Date = new Date('2000-01-01');
const day: number = 24 * 60 * 60 * 1000;

const dateForInput = (date: Date | string)=> {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }
  return '';
};

const countDays = (start: Date, end: Date): number => {
  const diff = Math.round((end.getTime() - start.getTime()) / day);
  return diff;
};

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date.getTime() + days * day);
  return result;
};

export const Counter = (props: StackProps) => {
  const [start, setStart] = useState<Date>(millennium);
  const [end, setEnd] = useState<Date>(today);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`UseEffect count ${count}`);
    // if (isNum(count)) {
      // setEnd(addDays(start, count));
    // }
  }, [count]);
  
  useEffect(() => {
    console.log(`UseEffect dates ${start} / ${end}`);
      setCount(countDays(start, end));
  }, [start, end]);


  const handleStart = (v: string) => {
    console.log("handleStart", v, v.length, typeof v);
    const newDate = new Date(v);
    if (v.length && newDate instanceof Date ) {
      setStart(newDate);
    } else {
      console.log('Start not a date', v)
    }
  };
  const handleEnd = (v: string) => {
    console.log("handleEnd", v, v.length, typeof v);
    const newDate = new Date(v);
    if (v.length && newDate instanceof Date ) {
      setEnd(newDate);
    } else {
      console.log('End not a date', v)
    }
  };
  const handleCount = (v: string) => {
    console.log("handleCount", typeof v, v, parseInt(v));
    const vNumber = parseInt(v) || 0
    setCount(vNumber);
    setEnd(addDays(start, vNumber));
  };

  return (
    <Stack
      spacing={8}
      {...props}
      sx={{'input[type="date"]::-webkit-calendar-picker-indicator': {
        color: 'red'
      }}}
    >
      <Input
        type="date"
        value={dateForInput(start)}
        onChange={(e) => handleStart(e.target.value)}
        size="lg"
      />
      <Input
        type="date"
        value={dateForInput(end)}
        onChange={(e) => handleEnd(e.target.value)}
        size="lg"
      />
      <NumberInput
        value={count}
        onChange={(v) => handleCount(v)}
        size="lg"
        flex={1}
        colorScheme="cyan"
      >
        <NumberInputField             
          textAlign="right"
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Stack>
  )
}
