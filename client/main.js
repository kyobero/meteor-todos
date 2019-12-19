import { Template } from 'meteor/templating';

// const todos = [
//   {text:'Pickup the kids from school'},
//   {text:'Go food shopping'},
//   {text: 'Ibrahima Bubakaketa is mad'}
// ];

Template.main.helpers({
  title(){
    return 'Quick Todos';
  }, 
  todos(){
    const todos = Todos.find();
    return todos;
  }  
});

Template.main.events({
  'submit.add-todo'(event){
    event.preventDefault();

    const text = event.target.text.value;
    const time = event.target.time.value;
    
    Todos.insert({
      text,
      time
    });

    event.target.text.value = '';
    event.target.time.value = '';
  }
});

Template.todo.events({
  'click .toggle-checked'(event){
    Todos.update(this._id, {
        $set:{checked:!this.checked}
    });
  }
});

