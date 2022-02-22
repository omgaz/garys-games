import talkingClock from '.';

describe('talking clock', () => {
  test('should read out for a set time', () => {
    expect(talkingClock('10:15')).toBe('It’s ten fifteen am');
  });

  test('should read out zeros as oh', () => {
    expect(talkingClock('15:07')).toBe('It’s three oh seven pm');
  });

  test('should read out midnight', () => {
    expect(talkingClock('00:00')).toBe('It’s twelve am');
  });

  test('should read out noon', () => {
    expect(talkingClock('12:00')).toBe('It’s twelve pm');
  });
});

