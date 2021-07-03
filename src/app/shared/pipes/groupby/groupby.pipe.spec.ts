import { GroupByPipe } from './group-by.pipe';

xdescribe('GroupByPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });
});
