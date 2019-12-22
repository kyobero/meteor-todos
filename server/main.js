import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'todos.insert' (text, time){
    if (!this.userId){
      throw new Meteor.Error('not-authourized');
    }
  
    Todos.insert({
      text,
      time, 
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  'todos.setChecked'(id, setChecked){
    Todos.update(id, {$set:{checked: setChecked}});
  }
});
