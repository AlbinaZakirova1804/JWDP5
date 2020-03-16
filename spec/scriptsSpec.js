//have to add require scripts.js
describe('display all products on a page', function () {

    // Make an async call, passing the special done callback  
  function getData(){
    return [{},{}]
  };    
  const data = getData();
   //mock
   //var data;
  //data =[];
  it('-> Should return an array of objects', function () {
    const datatype = typeof(data);
    console.log('This is data - >', data);
    expect(data).toEqual([{},{}]);
  
})
});