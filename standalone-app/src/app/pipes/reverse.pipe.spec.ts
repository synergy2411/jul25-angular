import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should reverse the given string', () => {
    let greetings = 'hello';
    let result = pipe.transform(greetings);
    expect(result).toEqual('olleh');
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
