// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/** Phone number tests*/
test('check phone number 650-338-8565', () => {
    expect(functions.isPhoneNumber('650-338-8565')).toBe(true);
  });

test('check phone number 000-000-0000', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test('check phone number 6503388565', () => {
    expect(functions.isPhoneNumber('6503388565')).toBe(false);
});

test('check phone number 33885-65', () => {
    expect(functions.isPhoneNumber('33885-65')).toBe(false);
});


/** Phone number tests*/
test('check email marasli@ucsd.edu', () => {
    expect(functions.isEmail('marasli@ucsd.edu')).toBe(true);
  });

test('check email marasli@gmail.com', () => {
    expect(functions.isEmail('marasli@gmail.com')).toBe(true);
});

test('check email marasli', () => {
    expect(functions.isEmail('marasli')).toBe(false);
});

test('checkemail @ucsd.edu', () => {
    expect(functions.isEmail('@ucsd.edu')).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */

/** Passwords tests*/
test('check Passwords a1234', () => {
    expect(functions.isStrongPassword('a1234')).toBe(true);
  });

test('check Passwords b_564', () => {
    expect(functions.isStrongPassword('b_564')).toBe(true);
});

test('check Passwords f650338856555555555553333', () => {
    expect(functions.isStrongPassword('f650338856555555555553333')).toBe(false);
});

test('check Passwords d33885-65', () => {
    expect(functions.isStrongPassword('d33885-65')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.

/** date tests*/
test('check date 1/30/1947', () => {
    expect(functions.isDate('1/30/1947')).toBe(true);
  });

test('check date 4/04/1947', () => {
    expect(functions.isDate('4/04/1947')).toBe(true);
  });

test('check date 4/04/194', () => {
    expect(functions.isDate('a1234')).toBe(false);
  });

test('check date  I/04/1947', () => {
    expect(functions.isDate(' I/04/1947')).toBe(false);
  });

  // Matches valid 3 or 6 character hex codes used for HTML or CSS.

  /** hex color tests*/
test('check hex color  #FF5733', () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);
});
test('check hex color  FF5', () => {
    expect(functions.isHexColor('FF5')).toBe(true);
});
test('check hex color  #33', () => {
    expect(functions.isHexColor('#33')).toBe(false);
});
test('check hex color  #FF', () => {
    expect(functions.isHexColor('#FF')).toBe(false);
});