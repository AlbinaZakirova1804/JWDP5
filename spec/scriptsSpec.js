describe('display all products on a page', function () {
  beforeEach(function () {
    // Make an async call, passing the special done callback        
    getData();
  it('-> Should be true if the async call has completed', function () {
    expect(flag).toEqual(true);
    //expect(object.img).toBeDefined();
  }
  );
})
});