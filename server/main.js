import { Meteor } from 'meteor/meteor';

Meteor.publish('todos', function todoPublication(){
  return Todos.find({
    $or: [
      {private:{$ne:true}},
      {owner:this.userId}
    ]
  });
});

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
  },
  'todos.remove' (id) {
    Todos.remove(id);
  },

//  'todos.setPrivate'(id, setToPrivate);
//   const todo = Todos.findone(id); 
'todos.setPrivate'(id, setToPrivate){
    const todo = Todos.findOne(id);

    if(todo.owner !== this.userId){
      throw new Meteor.Error('Unauthorized');
    } 

    Todos.update(id, {$set:{private: setToPrivate}});

// 'todos.setPrivate'(id, setToPrivate);
//   const todo = Todos.findOne(id);

//   if (todo.owner !==this.userId){
//     throw new Meteor.Error('unauthourised');
//   }

//   Todos.update(id, {$set:{private:setToPrivate}});

}

});



