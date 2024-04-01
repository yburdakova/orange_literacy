import { formatDate } from './formatDate';

describe('formatDate', () => {
  
  // invalid date string
  it('correctly formats a valid date string', () => {
    expect(formatDate('2024-03-19T12:05:00Z')).toEqual({
      
      year: '2024',
      month: 'Mar',
      day: '19',
      hours: '08', 
      minutes: '05',
    });
  });

  // invalid date string : string is not data
  it('returns "No date provided" for an invalid date string format', () => {
    expect(formatDate('sygeufw ygwet8 w6te8w')).toBe('No date provided');
  });

  // invalid date string : there is no date provided
  it('returns "No date provided" when no date is provided', () => {
    expect(formatDate()).toBe('No date provided');
  });

});
