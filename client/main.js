import { Template } from 'meteor/templating';

const todos = [
  {text:'Pickup the kids from school'},
  {text:'Go food shopping'},
  {text: 'Ibrahima Bubakaketa is mad'}
];

Template.main.helpers({
  title(){
    return 'Quick Todos';
  }, 
  todos(){
    return todos;
  }
  
});
