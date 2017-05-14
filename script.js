$(document).ready(function(){
  TextField.document.designMode = "On";
});

function execCmd (command) {
  TextField.document.execCommand(command, false, null);
}

function execCmdWithArg (command,arg) {
  TextField.document.execCommand(command, false, arg);
}















