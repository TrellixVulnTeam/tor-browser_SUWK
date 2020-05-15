// |reftest| skip-if(!this.hasOwnProperty('BigInt')) -- BigInt is not enabled unconditionally
// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-multiplicative-operators-runtime-semantics-evaluation
description: BigInt division arithmetic
features: [BigInt]
---*/
assert.sameValue(
  0xFEDCBA9876543210n / 0xFEDCBA9876543210n,
  0x1n,
  'The result of (0xFEDCBA9876543210n / 0xFEDCBA9876543210n) is 0x1n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0xFEDCBA987654320Fn,
  0x1n,
  'The result of (0xFEDCBA9876543210n / 0xFEDCBA987654320Fn) is 0x1n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0xFEDCBA98n,
  0x100000000n,
  'The result of (0xFEDCBA9876543210n / 0xFEDCBA98n) is 0x100000000n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0xFEDCBA97n,
  0x100000001n,
  'The result of (0xFEDCBA9876543210n / 0xFEDCBA97n) is 0x100000001n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0x1234n,
  0xE0042813BE5DCn,
  'The result of (0xFEDCBA9876543210n / 0x1234n) is 0xE0042813BE5DCn'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0x3n,
  0x54F43E32D21C10B0n,
  'The result of (0xFEDCBA9876543210n / 0x3n) is 0x54F43E32D21C10B0n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0x2n,
  0x7F6E5D4C3B2A1908n,
  'The result of (0xFEDCBA9876543210n / 0x2n) is 0x7F6E5D4C3B2A1908n'
);

assert.sameValue(
  0xFEDCBA9876543210n / 0x1n,
  0xFEDCBA9876543210n,
  'The result of (0xFEDCBA9876543210n / 0x1n) is 0xFEDCBA9876543210n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0x1n,
  -0xFEDCBA9876543210n,
  'The result of (0xFEDCBA9876543210n / -0x1n) is -0xFEDCBA9876543210n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0x2n,
  -0x7F6E5D4C3B2A1908n,
  'The result of (0xFEDCBA9876543210n / -0x2n) is -0x7F6E5D4C3B2A1908n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0x3n,
  -0x54F43E32D21C10B0n,
  'The result of (0xFEDCBA9876543210n / -0x3n) is -0x54F43E32D21C10B0n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0x1234n,
  -0xE0042813BE5DCn,
  'The result of (0xFEDCBA9876543210n / -0x1234n) is -0xE0042813BE5DCn'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0xFEDCBA97n,
  -0x100000001n,
  'The result of (0xFEDCBA9876543210n / -0xFEDCBA97n) is -0x100000001n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0xFEDCBA98n,
  -0x100000000n,
  'The result of (0xFEDCBA9876543210n / -0xFEDCBA98n) is -0x100000000n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0xFEDCBA987654320Fn,
  -0x1n,
  'The result of (0xFEDCBA9876543210n / -0xFEDCBA987654320Fn) is -0x1n'
);

assert.sameValue(
  0xFEDCBA9876543210n / -0xFEDCBA9876543210n,
  -0x1n,
  'The result of (0xFEDCBA9876543210n / -0xFEDCBA9876543210n) is -0x1n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA987654320Fn / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0xFEDCBA987654320Fn,
  0x1n,
  'The result of (0xFEDCBA987654320Fn / 0xFEDCBA987654320Fn) is 0x1n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0xFEDCBA98n,
  0x100000000n,
  'The result of (0xFEDCBA987654320Fn / 0xFEDCBA98n) is 0x100000000n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0xFEDCBA97n,
  0x100000001n,
  'The result of (0xFEDCBA987654320Fn / 0xFEDCBA97n) is 0x100000001n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0x1234n,
  0xE0042813BE5DCn,
  'The result of (0xFEDCBA987654320Fn / 0x1234n) is 0xE0042813BE5DCn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0x3n,
  0x54F43E32D21C10AFn,
  'The result of (0xFEDCBA987654320Fn / 0x3n) is 0x54F43E32D21C10AFn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0x2n,
  0x7F6E5D4C3B2A1907n,
  'The result of (0xFEDCBA987654320Fn / 0x2n) is 0x7F6E5D4C3B2A1907n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / 0x1n,
  0xFEDCBA987654320Fn,
  'The result of (0xFEDCBA987654320Fn / 0x1n) is 0xFEDCBA987654320Fn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0x1n,
  -0xFEDCBA987654320Fn,
  'The result of (0xFEDCBA987654320Fn / -0x1n) is -0xFEDCBA987654320Fn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0x2n,
  -0x7F6E5D4C3B2A1907n,
  'The result of (0xFEDCBA987654320Fn / -0x2n) is -0x7F6E5D4C3B2A1907n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0x3n,
  -0x54F43E32D21C10AFn,
  'The result of (0xFEDCBA987654320Fn / -0x3n) is -0x54F43E32D21C10AFn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0x1234n,
  -0xE0042813BE5DCn,
  'The result of (0xFEDCBA987654320Fn / -0x1234n) is -0xE0042813BE5DCn'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0xFEDCBA97n,
  -0x100000001n,
  'The result of (0xFEDCBA987654320Fn / -0xFEDCBA97n) is -0x100000001n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0xFEDCBA98n,
  -0x100000000n,
  'The result of (0xFEDCBA987654320Fn / -0xFEDCBA98n) is -0x100000000n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0xFEDCBA987654320Fn,
  -0x1n,
  'The result of (0xFEDCBA987654320Fn / -0xFEDCBA987654320Fn) is -0x1n'
);

assert.sameValue(
  0xFEDCBA987654320Fn / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA987654320Fn / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA98n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA98n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA98n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0xFEDCBA98n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0xFEDCBA98n / 0xFEDCBA98n,
  0x1n,
  'The result of (0xFEDCBA98n / 0xFEDCBA98n) is 0x1n'
);

assert.sameValue(
  0xFEDCBA98n / 0xFEDCBA97n,
  0x1n,
  'The result of (0xFEDCBA98n / 0xFEDCBA97n) is 0x1n'
);

assert.sameValue(
  0xFEDCBA98n / 0x1234n,
  0xE0042n,
  'The result of (0xFEDCBA98n / 0x1234n) is 0xE0042n'
);

assert.sameValue(
  0xFEDCBA98n / 0x3n,
  0x54F43E32n,
  'The result of (0xFEDCBA98n / 0x3n) is 0x54F43E32n'
);

assert.sameValue(
  0xFEDCBA98n / 0x2n,
  0x7F6E5D4Cn,
  'The result of (0xFEDCBA98n / 0x2n) is 0x7F6E5D4Cn'
);

assert.sameValue(
  0xFEDCBA98n / 0x1n,
  0xFEDCBA98n,
  'The result of (0xFEDCBA98n / 0x1n) is 0xFEDCBA98n'
);

assert.sameValue(
  0xFEDCBA98n / -0x1n,
  -0xFEDCBA98n,
  'The result of (0xFEDCBA98n / -0x1n) is -0xFEDCBA98n'
);

assert.sameValue(
  0xFEDCBA98n / -0x2n,
  -0x7F6E5D4Cn,
  'The result of (0xFEDCBA98n / -0x2n) is -0x7F6E5D4Cn'
);

assert.sameValue(
  0xFEDCBA98n / -0x3n,
  -0x54F43E32n,
  'The result of (0xFEDCBA98n / -0x3n) is -0x54F43E32n'
);

assert.sameValue(
  0xFEDCBA98n / -0x1234n,
  -0xE0042n,
  'The result of (0xFEDCBA98n / -0x1234n) is -0xE0042n'
);

assert.sameValue(
  0xFEDCBA98n / -0xFEDCBA97n,
  -0x1n,
  'The result of (0xFEDCBA98n / -0xFEDCBA97n) is -0x1n'
);

assert.sameValue(
  0xFEDCBA98n / -0xFEDCBA98n,
  -0x1n,
  'The result of (0xFEDCBA98n / -0xFEDCBA98n) is -0x1n'
);

assert.sameValue(
  0xFEDCBA98n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0xFEDCBA98n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0xFEDCBA98n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA98n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA97n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0xFEDCBA97n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / 0xFEDCBA98n,
  0x0n,
  'The result of (0xFEDCBA97n / 0xFEDCBA98n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / 0xFEDCBA97n,
  0x1n,
  'The result of (0xFEDCBA97n / 0xFEDCBA97n) is 0x1n'
);

assert.sameValue(
  0xFEDCBA97n / 0x1234n,
  0xE0042n,
  'The result of (0xFEDCBA97n / 0x1234n) is 0xE0042n'
);

assert.sameValue(
  0xFEDCBA97n / 0x3n,
  0x54F43E32n,
  'The result of (0xFEDCBA97n / 0x3n) is 0x54F43E32n'
);

assert.sameValue(
  0xFEDCBA97n / 0x2n,
  0x7F6E5D4Bn,
  'The result of (0xFEDCBA97n / 0x2n) is 0x7F6E5D4Bn'
);

assert.sameValue(
  0xFEDCBA97n / 0x1n,
  0xFEDCBA97n,
  'The result of (0xFEDCBA97n / 0x1n) is 0xFEDCBA97n'
);

assert.sameValue(
  0xFEDCBA97n / -0x1n,
  -0xFEDCBA97n,
  'The result of (0xFEDCBA97n / -0x1n) is -0xFEDCBA97n'
);

assert.sameValue(
  0xFEDCBA97n / -0x2n,
  -0x7F6E5D4Bn,
  'The result of (0xFEDCBA97n / -0x2n) is -0x7F6E5D4Bn'
);

assert.sameValue(
  0xFEDCBA97n / -0x3n,
  -0x54F43E32n,
  'The result of (0xFEDCBA97n / -0x3n) is -0x54F43E32n'
);

assert.sameValue(
  0xFEDCBA97n / -0x1234n,
  -0xE0042n,
  'The result of (0xFEDCBA97n / -0x1234n) is -0xE0042n'
);

assert.sameValue(
  0xFEDCBA97n / -0xFEDCBA97n,
  -0x1n,
  'The result of (0xFEDCBA97n / -0xFEDCBA97n) is -0x1n'
);

assert.sameValue(
  0xFEDCBA97n / -0xFEDCBA98n,
  0x0n,
  'The result of (0xFEDCBA97n / -0xFEDCBA98n) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0xFEDCBA97n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0xFEDCBA97n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0xFEDCBA97n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x1234n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x1234n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x1234n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x1234n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(0x1234n / 0xFEDCBA98n, 0x0n, 'The result of (0x1234n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(0x1234n / 0xFEDCBA97n, 0x0n, 'The result of (0x1234n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(0x1234n / 0x1234n, 0x1n, 'The result of (0x1234n / 0x1234n) is 0x1n');
assert.sameValue(0x1234n / 0x3n, 0x611n, 'The result of (0x1234n / 0x3n) is 0x611n');
assert.sameValue(0x1234n / 0x2n, 0x91An, 'The result of (0x1234n / 0x2n) is 0x91An');
assert.sameValue(0x1234n / 0x1n, 0x1234n, 'The result of (0x1234n / 0x1n) is 0x1234n');
assert.sameValue(0x1234n / -0x1n, -0x1234n, 'The result of (0x1234n / -0x1n) is -0x1234n');
assert.sameValue(0x1234n / -0x2n, -0x91An, 'The result of (0x1234n / -0x2n) is -0x91An');
assert.sameValue(0x1234n / -0x3n, -0x611n, 'The result of (0x1234n / -0x3n) is -0x611n');
assert.sameValue(0x1234n / -0x1234n, -0x1n, 'The result of (0x1234n / -0x1234n) is -0x1n');
assert.sameValue(0x1234n / -0xFEDCBA97n, 0x0n, 'The result of (0x1234n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(0x1234n / -0xFEDCBA98n, 0x0n, 'The result of (0x1234n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  0x1234n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x1234n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0x1234n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x1234n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x3n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x3n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x3n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x3n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(0x3n / 0xFEDCBA98n, 0x0n, 'The result of (0x3n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(0x3n / 0xFEDCBA97n, 0x0n, 'The result of (0x3n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(0x3n / 0x1234n, 0x0n, 'The result of (0x3n / 0x1234n) is 0x0n');
assert.sameValue(0x3n / 0x3n, 0x1n, 'The result of (0x3n / 0x3n) is 0x1n');
assert.sameValue(0x3n / 0x2n, 0x1n, 'The result of (0x3n / 0x2n) is 0x1n');
assert.sameValue(0x3n / 0x1n, 0x3n, 'The result of (0x3n / 0x1n) is 0x3n');
assert.sameValue(0x3n / -0x1n, -0x3n, 'The result of (0x3n / -0x1n) is -0x3n');
assert.sameValue(0x3n / -0x2n, -0x1n, 'The result of (0x3n / -0x2n) is -0x1n');
assert.sameValue(0x3n / -0x3n, -0x1n, 'The result of (0x3n / -0x3n) is -0x1n');
assert.sameValue(0x3n / -0x1234n, 0x0n, 'The result of (0x3n / -0x1234n) is 0x0n');
assert.sameValue(0x3n / -0xFEDCBA97n, 0x0n, 'The result of (0x3n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(0x3n / -0xFEDCBA98n, 0x0n, 'The result of (0x3n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  0x3n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x3n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0x3n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x3n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x2n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x2n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x2n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x2n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(0x2n / 0xFEDCBA98n, 0x0n, 'The result of (0x2n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(0x2n / 0xFEDCBA97n, 0x0n, 'The result of (0x2n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(0x2n / 0x1234n, 0x0n, 'The result of (0x2n / 0x1234n) is 0x0n');
assert.sameValue(0x2n / 0x3n, 0x0n, 'The result of (0x2n / 0x3n) is 0x0n');
assert.sameValue(0x2n / 0x2n, 0x1n, 'The result of (0x2n / 0x2n) is 0x1n');
assert.sameValue(0x2n / 0x1n, 0x2n, 'The result of (0x2n / 0x1n) is 0x2n');
assert.sameValue(0x2n / -0x1n, -0x2n, 'The result of (0x2n / -0x1n) is -0x2n');
assert.sameValue(0x2n / -0x2n, -0x1n, 'The result of (0x2n / -0x2n) is -0x1n');
assert.sameValue(0x2n / -0x3n, 0x0n, 'The result of (0x2n / -0x3n) is 0x0n');
assert.sameValue(0x2n / -0x1234n, 0x0n, 'The result of (0x2n / -0x1234n) is 0x0n');
assert.sameValue(0x2n / -0xFEDCBA97n, 0x0n, 'The result of (0x2n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(0x2n / -0xFEDCBA98n, 0x0n, 'The result of (0x2n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  0x2n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x2n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0x2n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x2n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x1n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x1n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  0x1n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x1n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(0x1n / 0xFEDCBA98n, 0x0n, 'The result of (0x1n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(0x1n / 0xFEDCBA97n, 0x0n, 'The result of (0x1n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(0x1n / 0x1234n, 0x0n, 'The result of (0x1n / 0x1234n) is 0x0n');
assert.sameValue(0x1n / 0x3n, 0x0n, 'The result of (0x1n / 0x3n) is 0x0n');
assert.sameValue(0x1n / 0x2n, 0x0n, 'The result of (0x1n / 0x2n) is 0x0n');
assert.sameValue(0x1n / 0x1n, 0x1n, 'The result of (0x1n / 0x1n) is 0x1n');
assert.sameValue(0x1n / -0x1n, -0x1n, 'The result of (0x1n / -0x1n) is -0x1n');
assert.sameValue(0x1n / -0x2n, 0x0n, 'The result of (0x1n / -0x2n) is 0x0n');
assert.sameValue(0x1n / -0x3n, 0x0n, 'The result of (0x1n / -0x3n) is 0x0n');
assert.sameValue(0x1n / -0x1234n, 0x0n, 'The result of (0x1n / -0x1234n) is 0x0n');
assert.sameValue(0x1n / -0xFEDCBA97n, 0x0n, 'The result of (0x1n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(0x1n / -0xFEDCBA98n, 0x0n, 'The result of (0x1n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  0x1n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (0x1n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  0x1n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (0x1n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x1n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x1n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x1n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x1n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(-0x1n / 0xFEDCBA98n, 0x0n, 'The result of (-0x1n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(-0x1n / 0xFEDCBA97n, 0x0n, 'The result of (-0x1n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x1n / 0x1234n, 0x0n, 'The result of (-0x1n / 0x1234n) is 0x0n');
assert.sameValue(-0x1n / 0x3n, 0x0n, 'The result of (-0x1n / 0x3n) is 0x0n');
assert.sameValue(-0x1n / 0x2n, 0x0n, 'The result of (-0x1n / 0x2n) is 0x0n');
assert.sameValue(-0x1n / 0x1n, -0x1n, 'The result of (-0x1n / 0x1n) is -0x1n');
assert.sameValue(-0x1n / -0x1n, 0x1n, 'The result of (-0x1n / -0x1n) is 0x1n');
assert.sameValue(-0x1n / -0x2n, 0x0n, 'The result of (-0x1n / -0x2n) is 0x0n');
assert.sameValue(-0x1n / -0x3n, 0x0n, 'The result of (-0x1n / -0x3n) is 0x0n');
assert.sameValue(-0x1n / -0x1234n, 0x0n, 'The result of (-0x1n / -0x1234n) is 0x0n');
assert.sameValue(-0x1n / -0xFEDCBA97n, 0x0n, 'The result of (-0x1n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x1n / -0xFEDCBA98n, 0x0n, 'The result of (-0x1n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  -0x1n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x1n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0x1n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x1n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x2n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x2n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x2n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x2n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(-0x2n / 0xFEDCBA98n, 0x0n, 'The result of (-0x2n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(-0x2n / 0xFEDCBA97n, 0x0n, 'The result of (-0x2n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x2n / 0x1234n, 0x0n, 'The result of (-0x2n / 0x1234n) is 0x0n');
assert.sameValue(-0x2n / 0x3n, 0x0n, 'The result of (-0x2n / 0x3n) is 0x0n');
assert.sameValue(-0x2n / 0x2n, -0x1n, 'The result of (-0x2n / 0x2n) is -0x1n');
assert.sameValue(-0x2n / 0x1n, -0x2n, 'The result of (-0x2n / 0x1n) is -0x2n');
assert.sameValue(-0x2n / -0x1n, 0x2n, 'The result of (-0x2n / -0x1n) is 0x2n');
assert.sameValue(-0x2n / -0x2n, 0x1n, 'The result of (-0x2n / -0x2n) is 0x1n');
assert.sameValue(-0x2n / -0x3n, 0x0n, 'The result of (-0x2n / -0x3n) is 0x0n');
assert.sameValue(-0x2n / -0x1234n, 0x0n, 'The result of (-0x2n / -0x1234n) is 0x0n');
assert.sameValue(-0x2n / -0xFEDCBA97n, 0x0n, 'The result of (-0x2n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x2n / -0xFEDCBA98n, 0x0n, 'The result of (-0x2n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  -0x2n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x2n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0x2n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x2n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x3n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x3n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x3n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x3n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(-0x3n / 0xFEDCBA98n, 0x0n, 'The result of (-0x3n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(-0x3n / 0xFEDCBA97n, 0x0n, 'The result of (-0x3n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x3n / 0x1234n, 0x0n, 'The result of (-0x3n / 0x1234n) is 0x0n');
assert.sameValue(-0x3n / 0x3n, -0x1n, 'The result of (-0x3n / 0x3n) is -0x1n');
assert.sameValue(-0x3n / 0x2n, -0x1n, 'The result of (-0x3n / 0x2n) is -0x1n');
assert.sameValue(-0x3n / 0x1n, -0x3n, 'The result of (-0x3n / 0x1n) is -0x3n');
assert.sameValue(-0x3n / -0x1n, 0x3n, 'The result of (-0x3n / -0x1n) is 0x3n');
assert.sameValue(-0x3n / -0x2n, 0x1n, 'The result of (-0x3n / -0x2n) is 0x1n');
assert.sameValue(-0x3n / -0x3n, 0x1n, 'The result of (-0x3n / -0x3n) is 0x1n');
assert.sameValue(-0x3n / -0x1234n, 0x0n, 'The result of (-0x3n / -0x1234n) is 0x0n');
assert.sameValue(-0x3n / -0xFEDCBA97n, 0x0n, 'The result of (-0x3n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x3n / -0xFEDCBA98n, 0x0n, 'The result of (-0x3n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  -0x3n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x3n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0x3n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x3n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x1234n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x1234n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0x1234n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x1234n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(-0x1234n / 0xFEDCBA98n, 0x0n, 'The result of (-0x1234n / 0xFEDCBA98n) is 0x0n');
assert.sameValue(-0x1234n / 0xFEDCBA97n, 0x0n, 'The result of (-0x1234n / 0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x1234n / 0x1234n, -0x1n, 'The result of (-0x1234n / 0x1234n) is -0x1n');
assert.sameValue(-0x1234n / 0x3n, -0x611n, 'The result of (-0x1234n / 0x3n) is -0x611n');
assert.sameValue(-0x1234n / 0x2n, -0x91An, 'The result of (-0x1234n / 0x2n) is -0x91An');
assert.sameValue(-0x1234n / 0x1n, -0x1234n, 'The result of (-0x1234n / 0x1n) is -0x1234n');
assert.sameValue(-0x1234n / -0x1n, 0x1234n, 'The result of (-0x1234n / -0x1n) is 0x1234n');
assert.sameValue(-0x1234n / -0x2n, 0x91An, 'The result of (-0x1234n / -0x2n) is 0x91An');
assert.sameValue(-0x1234n / -0x3n, 0x611n, 'The result of (-0x1234n / -0x3n) is 0x611n');
assert.sameValue(-0x1234n / -0x1234n, 0x1n, 'The result of (-0x1234n / -0x1234n) is 0x1n');
assert.sameValue(-0x1234n / -0xFEDCBA97n, 0x0n, 'The result of (-0x1234n / -0xFEDCBA97n) is 0x0n');
assert.sameValue(-0x1234n / -0xFEDCBA98n, 0x0n, 'The result of (-0x1234n / -0xFEDCBA98n) is 0x0n');

assert.sameValue(
  -0x1234n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0x1234n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0x1234n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0x1234n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA97n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0xFEDCBA97n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / 0xFEDCBA98n,
  0x0n,
  'The result of (-0xFEDCBA97n / 0xFEDCBA98n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / 0xFEDCBA97n,
  -0x1n,
  'The result of (-0xFEDCBA97n / 0xFEDCBA97n) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA97n / 0x1234n,
  -0xE0042n,
  'The result of (-0xFEDCBA97n / 0x1234n) is -0xE0042n'
);

assert.sameValue(
  -0xFEDCBA97n / 0x3n,
  -0x54F43E32n,
  'The result of (-0xFEDCBA97n / 0x3n) is -0x54F43E32n'
);

assert.sameValue(
  -0xFEDCBA97n / 0x2n,
  -0x7F6E5D4Bn,
  'The result of (-0xFEDCBA97n / 0x2n) is -0x7F6E5D4Bn'
);

assert.sameValue(
  -0xFEDCBA97n / 0x1n,
  -0xFEDCBA97n,
  'The result of (-0xFEDCBA97n / 0x1n) is -0xFEDCBA97n'
);

assert.sameValue(
  -0xFEDCBA97n / -0x1n,
  0xFEDCBA97n,
  'The result of (-0xFEDCBA97n / -0x1n) is 0xFEDCBA97n'
);

assert.sameValue(
  -0xFEDCBA97n / -0x2n,
  0x7F6E5D4Bn,
  'The result of (-0xFEDCBA97n / -0x2n) is 0x7F6E5D4Bn'
);

assert.sameValue(
  -0xFEDCBA97n / -0x3n,
  0x54F43E32n,
  'The result of (-0xFEDCBA97n / -0x3n) is 0x54F43E32n'
);

assert.sameValue(
  -0xFEDCBA97n / -0x1234n,
  0xE0042n,
  'The result of (-0xFEDCBA97n / -0x1234n) is 0xE0042n'
);

assert.sameValue(
  -0xFEDCBA97n / -0xFEDCBA97n,
  0x1n,
  'The result of (-0xFEDCBA97n / -0xFEDCBA97n) is 0x1n'
);

assert.sameValue(
  -0xFEDCBA97n / -0xFEDCBA98n,
  0x0n,
  'The result of (-0xFEDCBA97n / -0xFEDCBA98n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0xFEDCBA97n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA97n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA97n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA98n / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA98n / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA98n / 0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0xFEDCBA98n / 0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA98n / 0xFEDCBA98n,
  -0x1n,
  'The result of (-0xFEDCBA98n / 0xFEDCBA98n) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA98n / 0xFEDCBA97n,
  -0x1n,
  'The result of (-0xFEDCBA98n / 0xFEDCBA97n) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA98n / 0x1234n,
  -0xE0042n,
  'The result of (-0xFEDCBA98n / 0x1234n) is -0xE0042n'
);

assert.sameValue(
  -0xFEDCBA98n / 0x3n,
  -0x54F43E32n,
  'The result of (-0xFEDCBA98n / 0x3n) is -0x54F43E32n'
);

assert.sameValue(
  -0xFEDCBA98n / 0x2n,
  -0x7F6E5D4Cn,
  'The result of (-0xFEDCBA98n / 0x2n) is -0x7F6E5D4Cn'
);

assert.sameValue(
  -0xFEDCBA98n / 0x1n,
  -0xFEDCBA98n,
  'The result of (-0xFEDCBA98n / 0x1n) is -0xFEDCBA98n'
);

assert.sameValue(
  -0xFEDCBA98n / -0x1n,
  0xFEDCBA98n,
  'The result of (-0xFEDCBA98n / -0x1n) is 0xFEDCBA98n'
);

assert.sameValue(
  -0xFEDCBA98n / -0x2n,
  0x7F6E5D4Cn,
  'The result of (-0xFEDCBA98n / -0x2n) is 0x7F6E5D4Cn'
);

assert.sameValue(
  -0xFEDCBA98n / -0x3n,
  0x54F43E32n,
  'The result of (-0xFEDCBA98n / -0x3n) is 0x54F43E32n'
);

assert.sameValue(
  -0xFEDCBA98n / -0x1234n,
  0xE0042n,
  'The result of (-0xFEDCBA98n / -0x1234n) is 0xE0042n'
);

assert.sameValue(
  -0xFEDCBA98n / -0xFEDCBA97n,
  0x1n,
  'The result of (-0xFEDCBA98n / -0xFEDCBA97n) is 0x1n'
);

assert.sameValue(
  -0xFEDCBA98n / -0xFEDCBA98n,
  0x1n,
  'The result of (-0xFEDCBA98n / -0xFEDCBA98n) is 0x1n'
);

assert.sameValue(
  -0xFEDCBA98n / -0xFEDCBA987654320Fn,
  0x0n,
  'The result of (-0xFEDCBA98n / -0xFEDCBA987654320Fn) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA98n / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA98n / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA987654320Fn / 0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0xFEDCBA987654320Fn,
  -0x1n,
  'The result of (-0xFEDCBA987654320Fn / 0xFEDCBA987654320Fn) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0xFEDCBA98n,
  -0x100000000n,
  'The result of (-0xFEDCBA987654320Fn / 0xFEDCBA98n) is -0x100000000n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0xFEDCBA97n,
  -0x100000001n,
  'The result of (-0xFEDCBA987654320Fn / 0xFEDCBA97n) is -0x100000001n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0x1234n,
  -0xE0042813BE5DCn,
  'The result of (-0xFEDCBA987654320Fn / 0x1234n) is -0xE0042813BE5DCn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0x3n,
  -0x54F43E32D21C10AFn,
  'The result of (-0xFEDCBA987654320Fn / 0x3n) is -0x54F43E32D21C10AFn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0x2n,
  -0x7F6E5D4C3B2A1907n,
  'The result of (-0xFEDCBA987654320Fn / 0x2n) is -0x7F6E5D4C3B2A1907n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / 0x1n,
  -0xFEDCBA987654320Fn,
  'The result of (-0xFEDCBA987654320Fn / 0x1n) is -0xFEDCBA987654320Fn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0x1n,
  0xFEDCBA987654320Fn,
  'The result of (-0xFEDCBA987654320Fn / -0x1n) is 0xFEDCBA987654320Fn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0x2n,
  0x7F6E5D4C3B2A1907n,
  'The result of (-0xFEDCBA987654320Fn / -0x2n) is 0x7F6E5D4C3B2A1907n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0x3n,
  0x54F43E32D21C10AFn,
  'The result of (-0xFEDCBA987654320Fn / -0x3n) is 0x54F43E32D21C10AFn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0x1234n,
  0xE0042813BE5DCn,
  'The result of (-0xFEDCBA987654320Fn / -0x1234n) is 0xE0042813BE5DCn'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0xFEDCBA97n,
  0x100000001n,
  'The result of (-0xFEDCBA987654320Fn / -0xFEDCBA97n) is 0x100000001n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0xFEDCBA98n,
  0x100000000n,
  'The result of (-0xFEDCBA987654320Fn / -0xFEDCBA98n) is 0x100000000n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0xFEDCBA987654320Fn,
  0x1n,
  'The result of (-0xFEDCBA987654320Fn / -0xFEDCBA987654320Fn) is 0x1n'
);

assert.sameValue(
  -0xFEDCBA987654320Fn / -0xFEDCBA9876543210n,
  0x0n,
  'The result of (-0xFEDCBA987654320Fn / -0xFEDCBA9876543210n) is 0x0n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0xFEDCBA9876543210n,
  -0x1n,
  'The result of (-0xFEDCBA9876543210n / 0xFEDCBA9876543210n) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0xFEDCBA987654320Fn,
  -0x1n,
  'The result of (-0xFEDCBA9876543210n / 0xFEDCBA987654320Fn) is -0x1n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0xFEDCBA98n,
  -0x100000000n,
  'The result of (-0xFEDCBA9876543210n / 0xFEDCBA98n) is -0x100000000n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0xFEDCBA97n,
  -0x100000001n,
  'The result of (-0xFEDCBA9876543210n / 0xFEDCBA97n) is -0x100000001n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0x1234n,
  -0xE0042813BE5DCn,
  'The result of (-0xFEDCBA9876543210n / 0x1234n) is -0xE0042813BE5DCn'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0x3n,
  -0x54F43E32D21C10B0n,
  'The result of (-0xFEDCBA9876543210n / 0x3n) is -0x54F43E32D21C10B0n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0x2n,
  -0x7F6E5D4C3B2A1908n,
  'The result of (-0xFEDCBA9876543210n / 0x2n) is -0x7F6E5D4C3B2A1908n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / 0x1n,
  -0xFEDCBA9876543210n,
  'The result of (-0xFEDCBA9876543210n / 0x1n) is -0xFEDCBA9876543210n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0x1n,
  0xFEDCBA9876543210n,
  'The result of (-0xFEDCBA9876543210n / -0x1n) is 0xFEDCBA9876543210n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0x2n,
  0x7F6E5D4C3B2A1908n,
  'The result of (-0xFEDCBA9876543210n / -0x2n) is 0x7F6E5D4C3B2A1908n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0x3n,
  0x54F43E32D21C10B0n,
  'The result of (-0xFEDCBA9876543210n / -0x3n) is 0x54F43E32D21C10B0n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0x1234n,
  0xE0042813BE5DCn,
  'The result of (-0xFEDCBA9876543210n / -0x1234n) is 0xE0042813BE5DCn'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0xFEDCBA97n,
  0x100000001n,
  'The result of (-0xFEDCBA9876543210n / -0xFEDCBA97n) is 0x100000001n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0xFEDCBA98n,
  0x100000000n,
  'The result of (-0xFEDCBA9876543210n / -0xFEDCBA98n) is 0x100000000n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0xFEDCBA987654320Fn,
  0x1n,
  'The result of (-0xFEDCBA9876543210n / -0xFEDCBA987654320Fn) is 0x1n'
);

assert.sameValue(
  -0xFEDCBA9876543210n / -0xFEDCBA9876543210n,
  0x1n,
  'The result of (-0xFEDCBA9876543210n / -0xFEDCBA9876543210n) is 0x1n'
);
reportCompare(0, 0);