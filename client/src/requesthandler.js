
fetch('/api/posts/').then(

function (response) {
    response.json().then( // use .json() instead of .text()
    function(json) {
    alert(JSON.stringify(json));

    });
    if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error))


    
    fetch('/api/posts/').then(
 {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    Firstname: Firstname,
    Surname: Surname,
    Phonenumber: Phonenumber,
    Lessonid: Lessonid,
    Spaces: Spaces
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
});

export default requesthandeler; 