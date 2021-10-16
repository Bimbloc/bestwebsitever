/*window.onload = function () {
    document.body.innerHTML = '<h1>VUELVE A ABRILO CON EDGE ATREVETE!</h1>';
};*/
var party = [
    {name: 'Bat', id: 'bat1'},
    {name: 'Slime', id: 'slime'},
    {name: 'Bat', id: 'bat2'}
];

window.onload = function () {
    let num=2;
    var button = document.getElementById('summon');
    button.addEventListener('click', function () {
        console.log('Summon!');
        var img = new Image();
         if(num%2==0)
        
    img.src = 'https://i.pinimg.com/originals/d7/aa/23/d7aa23888f28942dd5128453ec102e8b.jpg'
    else
    img.src = 'http://images2.memedroid.com/images/UPLOADED61/53c1212febf91.jpeg'
    document.getElementById('kittens').appendChild(img);
    num=num+1;
    console.log("meow");
    });
    var list = document.getElementById('party-monsters');
    party.forEach(function (character) {
        var li = document.createElement('li');
        li.innerHTML = character.name + ' (<code>' + character.id + '</code>)';
        list.appendChild(li);
    });
    var select = document.querySelector('select[name=chara]');
party.forEach(function (character) {
    var option = document.createElement('option');
    option.innerHTML = character.name;
    option.value = character.id;
    select.appendChild(option);
   });

}

