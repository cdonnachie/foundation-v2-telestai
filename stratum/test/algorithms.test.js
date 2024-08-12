const Algorithms = require('../main/algorithms');

////////////////////////////////////////////////////////////////////////////////

describe('Test algorithm functionality', () => {

  // Meraki Validation
  test('Test implemented meraki algorithm [2]', () => {
    const header = Buffer.from('63543d3913fe56e6720c5e61e8d208d05582875822628f483279a3e8d9c9a8b3', 'hex');
    const mixhash = Buffer.from('89732e5ff8711c32558a308fc4b8ee77416038a70995670e3eb84cbdead2e337', 'hex');
    const nonce = Buffer.from('9b95eb33003ba288', 'hex');
    const output = Buffer.alloc(32);
    expect(Algorithms.meraki.hash({}).apply(null, [header, nonce, 262524, mixhash, output])).toBe(false);
  });

  // Deterministic
  test('Test implemented sha256d algorithm', () => {
    const start = Buffer.from('000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f');
    const output = Buffer.from('dc83687981432eb309f7c96a51f8bd10cec4a4630f47fdca1c2768d34ba9031a', 'hex');
    expect(Algorithms.sha256d.hash({}).apply(null, [start]).length).toBe(32);
    expect(Algorithms.sha256d.hash({}).apply(null, [start])).toStrictEqual(output);
  });
});
