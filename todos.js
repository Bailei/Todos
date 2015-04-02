$(function() {
	var Todo = Backbone.Model.extend({
		default: {
			title: "empty todo...",
			order: Todos.nextOrder(),
			done: false
		},

		toggle: function() {
			this.save({
				done: !this.get("done")
			});
		}
	});


	var TodoList = Backbone.Collections.extend({
		model: Todo,
		localStorage: new Backbone.localStorage("todos-backbone"),

		done: function(){
			return this.where({done = true});
		},

		remaining: function() {
			return this.where({done = false});
		},

		nextOrder: function() {
			if(!this.length) 
				return 1;
			else
				return this.last().get("order") + 1;
		},

		comparator: order
	});

	var Todos = new TodoList;
});