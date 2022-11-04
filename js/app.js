//1-Select the section with an id of container without using querySelector.
 var sectionById = document.getElementById('container');

 //2-Select the section with an id of container using querySelector.
 var HtmlElement_section1 = document.querySelector('#container');//More accurate way to get the section you want
 //Or
 var HtmlElement_section2 = document.querySelector('section');//Select the first section

//3-Select all of the list items with a class of “second”.
var listItems_of_class_second = document.querySelectorAll('.second');

 //4-Select a list item with a class of third, but only the list item inside of the ol tag.
 var listItems_ol_of_class_third = document.querySelector('ol .third');

 //5-Give the section with an id of container the text “Hello!”.
 var Element_section_id_container = document.querySelector('#container');
 // Element_section_id_container.innerText='hello';// =>Remove comment sign for testing

//6-Add the class main to the div with a class of footer.
var AddClass_main = document.querySelector('.footer');
AddClass_main.classList.add('main');

//7-Remove the class main on the div with a class of footer.
var AddClass_main2 = document.querySelector('.footer');
AddClass_main2.classList.remove('main');

//8-Create a new li element.
 var new_li = document.createElement('li');

//9-Give the li the text “four”.

new_li.innerText='four';

//10-Append the li to the ul element.
 var ul = document.querySelector('ul');
 ul.append(new_li);
 //Or
 ul.appendChild(new_li);

 //11-Loop over all of the lis inside the ol tag and give them a background color of “green”.
 var olElements = document.querySelectorAll('#container ol li');
 for(let li of olElements){
    li.style.backgroundColor='green';
 }

 //12-Remove the div with a class of footer

 var RemoveClass_footer = document.querySelector('.footer');
 RemoveClass_footer.classList.remove('footer');
