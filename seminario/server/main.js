//import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {

  UploadServer.init({
    tmpDir: process.cwd() +'../../../../../../.tmp',
    uploadDir: process.cwd() +'../../../../../../.uploads/',
    checkCreateDirectories: true,
    finished:function(fileInfo, formFields) {

    }, //create the directories for you
  });
});