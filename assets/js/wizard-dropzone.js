"use strict";

Dropzone.autoDiscover = false;

var previewNode = document.querySelector("#template");
previewNode.id = "";
var previewTemplate = previewNode.parentNode.innerHTML;
previewNode.parentNode.removeChild(previewNode);
var myDropzone = new Dropzone(document.body, {
  
  url: "#",
 
  thumbnailWidth: 800,
  thumbnailHeight: 600,
  parallelUploads: 20,
  previewTemplate: previewTemplate,
  autoQueue: false,  
  previewsContainer: "#previews",  
  clickable: ".fileinput-button"

});
myDropzone.on("addedfile", function (file) {
  
  file.previewElement.querySelector(".start").onclick = function () {
    myDropzone.enqueueFile(file);
  };

  feather.replace();
});

myDropzone.on("totaluploadprogress", function (progress) {
  document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
});
myDropzone.on("sending", function (file) {
  
  document.querySelector("#total-progress").style.opacity = "1";

  file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
});

myDropzone.on("queuecomplete", function (progress) {
  document.querySelector("#total-progress").style.opacity = "0";
});

document.querySelector("#actions .start").onclick = function () {
  myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
};

document.querySelector("#actions .cancel").onclick = function () {
  myDropzone.removeAllFiles(true);
};


var minSteps = 6,
    maxSteps = 60,
    timeBetweenSteps = 100,
    bytesPerStep = 100000;

myDropzone.uploadFiles = function (files) {
  var self = this;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

    for (var step = 0; step < totalSteps; step++) {
      var duration = timeBetweenSteps * (step + 1);
      setTimeout(function (file, totalSteps, step) {
        return function () {
          file.upload = {
            progress: 100 * (step + 1) / totalSteps,
            total: file.size,
            bytesSent: (step + 1) * file.size / totalSteps
          };
          self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);

          if (file.upload.progress == 100) {
            file.status = Dropzone.SUCCESS;
            self.emit("success", file, 'success', null);
            self.emit("complete", file);
            self.processQueue();
          }
        };
      }(file, totalSteps, step), duration);
    }
  }
};