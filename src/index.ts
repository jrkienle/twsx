import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function twsx(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export default twsx;
