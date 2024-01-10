import debounce from '.';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

describe('debounce', () => {
  test('function executes immediately with a timeout of 0', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(0, fn);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(fn).toHaveBeenCalledTimes(3);
  });

  test('function executes with all passed arguments', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(0, fn);

    debouncedFn('arg1', 'arg2', 'arg3');
    debouncedFn('arg4', 'arg5', 'arg6');

    expect(fn).toHaveBeenNthCalledWith(1, 'arg1', 'arg2', 'arg3');
    expect(fn).toHaveBeenNthCalledWith(2, 'arg4', 'arg5', 'arg6');
  });

  test('function executes immediately and then debounces all further calls until timeout has passed', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(100, fn);

    debouncedFn();
    debouncedFn();
    debouncedFn();
    jest.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('timeout resets if called multiple within time period', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(100, fn);

    debouncedFn();
    jest.advanceTimersByTime(50);
    debouncedFn();
    jest.advanceTimersByTime(100);
    debouncedFn();
    jest.advanceTimersByTime(50);
    debouncedFn();
    jest.advanceTimersByTime(100);
    debouncedFn();
    jest.advanceTimersByTime(50);
    debouncedFn();
    jest.advanceTimersByTime(100);
    debouncedFn();

    expect(fn).toHaveBeenCalledTimes(4);
  });
});
