// I'm not going to do any insanely accurate testing here since clsx and tailwind-merge are both
// very well-maintained projects

import { describe, expect, it } from 'vitest';
import twsx from '.';

describe('twsx', () => {
  it('should return an empty string when no arguments are provided', () => {
    expect(twsx()).toEqual('');
  });

  it('should theoretically support unlimited arguments', () => {
    expect(twsx('foo', 'bar', 'baz', 'qux')).toEqual('foo bar baz qux');
  });

  it('should include null or undefined arguments as empty strings', () => {
    expect(twsx('foo', null, 'bar', undefined, 'baz', 'qux')).toEqual('foo bar baz qux');
  });

  it('should use whatever className is last in the string', () => {
    expect(twsx('px-1', 'px-4', 'px-2')).toEqual('px-2');
  });

  it('should support conditional classNames', () => {
    const SOME_BOOLEAN = true
    expect(twsx('px-1', 'px-4', 'px-2', { 'px-3': SOME_BOOLEAN })).toEqual('px-3');
  });
});
