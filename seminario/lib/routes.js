
Router.configure({
	layoutTemplate:"layout"
});
Router.route("/", function() {
	this.render("galeria");
});
Router.route("/chat", function() {
	this.render("chat");
});
Router.route("/quienessomos", function() {
	this.render("quienessomos");
});
Router.route("/contactenos", function() {
	this.render("contactenos");
});
Router.route("/registrar", function() {
	this.render("registrar");
});
Router.route("/galeria", function() {
	this.render("galeria");
});


