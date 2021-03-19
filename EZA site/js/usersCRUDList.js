let apiurl = 'https://dmwxjh34he.execute-api.us-east-1.amazonaws.com/dev/EZAFunc';

async function getAllUser() {
    let response = await fetch(apiurl+'/users/');
    let data = await response.json();
    console.log(data);
    alert("Job Complete!");
}

async function getOneUser(id) {
    let response = await fetch(apiurl+'/users/'+id+'/');
    let data = await response.json();
    console.log(data);
    alert("Job Complete!");
}

function addUser() {
    
    var is_teach = (document.getElementById("isTeacherRegister").value == "true")
    console.log(is_teach)
    
    let newUserData = {
      email: document.getElementById("emailInputRegister").value,
      password: document.getElementById("passwordInputRegister").value,
      password2: document.getElementById("password2InputRegister").value,
      first_name: document.getElementById("firstNameRegister").value,
      last_name: document.getElementById("lastNameRegister").value,
      user_age: document.getElementById("ageRegister").value,
      is_teacher: is_teach,
      specialty: document.getElementById("specialtyRegister").value,
      bio: document.getElementById("bioRegister").value,
      join_date: document.getElementById("joinDateRegister").value,
      user_id: document.getElementById("userIdRegister").value
  }
    console.log(newUserData)
    postOneUser(newUserData)
    alert("Job Complete!");
};

function postOneUser(newUserInfo) {

    return fetch('https://dmwxjh34he.execute-api.us-east-1.amazonaws.com/dev/EZAFunc/users', {
        method: 'POST',
        body: JSON.stringify(
            { 
                email: newUserInfo.email, 
                password:newUserInfo.password, 
                first_name: newUserInfo.first_name, 
                last_name: newUserInfo.last_name, 
                user_age: newUserInfo.user_age, 
                is_teacher: newUserInfo.is_teacher, 
                specialty: newUserInfo.specialty, 
                bio: newUserInfo.bio, 
                join_date: newUserInfo.join_date, 
                user_id: newUserInfo.user_id
            }
        ), 
        headers: { "Content-type": "application/json; charset=UTF-8" } }) 
        .then(response => response.json()) 
        .then(json => console.log(json))
}

function updateOneUser(id) {

    return fetch(apiurl+'/users/'+id+'/', {
        method: 'PUT',
        body: JSON.stringify({ assignment_id: id, answersheet: 'newItem.answersheet', average_hours_to_complete: 3, description: 'newItem.description', name: 'newItem.name', tags: 'newItem.tags', user_id: 1, worksheet: 'newItem.worksheet'}), 
        headers: { "Content-type": "application/json; charset=UTF-8" } }) 
        .then(response => response.json()) 
        .then(json => console.log(json))
}

function deleteOneUser(id) {

    return fetch(apiurl+'/users/'+id+'/', {
        method: 'DELETE'
    }) 
        .then(response => response.json()) 
        .then(json => console.log(json))
}