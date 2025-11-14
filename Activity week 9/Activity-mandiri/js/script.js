function fn_ValForm(){
    var sMg = "";

            if(document.getElementById("name").value == ""){
                sMsg += "\n* Anda belum mengisikan nama";
            }
            if(document.getElementById("email").value == ""){
                sMsg += "\n* Anda belum mengisikan nama";
            }else{
                var emailPattern = /^[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i;
                if(!emailPattern.test(document.getElementById("email").value)){
                    sMsg += "\n* Format email tidak valid";
                }
            }
            if(document.getElementById("message").value == "").replace(/^\s+|\s+$/g, "");{
                sMsg += "\n* Anda belum mengisikan nama";
            }

            if(sMsg != ""){
                alert("Peringatan:\n" +sMsg);
                return false;
            }else{
                return true;
            }
        }
    