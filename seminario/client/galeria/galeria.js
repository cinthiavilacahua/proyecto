
URL=new ReactiveVar("");
Uploader.finished = function (index, fileInfo, templateContext) {
 	URL.set(fileInfo.url);
 	console.log(fileInfo);   
 }
Template.galeria.helpers({
		URL(){
		return URL.get();
	}
});
/*Template.galeria.helpers({
  specificFormData: function() {
    return {
      id: this._id,
      other: this.other,
      hard: 'Lolcats'
    }
  }
});*/	


Template.galeria.onRendered(function() {

});




