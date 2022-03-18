function creaCampos()
{
    var input=document.getElementById("contenedor_campo");
    var crear_input=document.createElement("input");
    crear_input.type="text";
    crear_input.placeholder="Hola";
    crear_input.onblur=validarInput;
    input.appendChild(crear_input);
}
function validarInput()
{
    var aviso=document.getElementById("contenedor_aviso");
    aviso.innerHTML="";
    var inputs=document.getElementsByTagName("input")[0].value;
    if (inputs.length<4)
    {
        var fallo=document.createElement("p");
        fallo.className="alert alert-danger";
        fallo.innerHTML="<strong>ERROR!</strong>El campo no tiene 4 carácteres o más";
        aviso.appendChild(fallo);
    }
    else
    {
        var correcto=document.createElement("p");
        correcto.className="alert alert-success";
        correcto.innerHTML="<strong>CORRECTO!</strong>El campo está correcto";
        aviso.appendChild(correcto);
    }
}