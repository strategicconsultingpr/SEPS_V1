$(document).ready(function () {
    frmActionModeSetup();
    startupFunctions();
});
function startupFunctions() {
    try {
        changeTabOrder();
        ddlEstadoLegal_Load();
        ddlVaron();
        ddlGrado();
        ddlFuenteReferido();
        ddlDSMVPsicoAmbiPrim();
        ddlDSMVPsicoAmbiSec();
        ddlPreviosMental();
        ddlPreviosSustancias();
        ddlUltMental();
        ddlUltSustancias();
        ddlDrogaPrimF();
        ddlReunionesGrupos();
        ddlEstadoLegal();
        ddlArrestado();
        ddlArrestado30();
        ddlCondLaboral();
        ddlNivelCuidadoSaludMental();
        ddlNivelCuidadoSustancias();
    }
    catch (ex) {
        throw ex;
    }
}
function tabEvent(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {
        var prefix = "mainBodyContent_WucEpisodioAdmision_";
        var inputs = [prefix + "ddlDrogaPrim"/*0*/, prefix + "ddlViaPrim"/*1*/, prefix + "ddlFrecPrim"/*2*/, prefix + "txtEdadPrim"/*3*/,
                        prefix + "ddlDrogaSec"/*4*/, prefix + "ddlViaSec"/*5*/, prefix + "ddlFrecSec"/*6*/, prefix + "txtEdadSec"/*7*/,
                        prefix + "ddlDrogaTerc"/*8*/, prefix + "ddlViaTerc"/*9*/, prefix + "ddlFrecTerc"/*10*/, prefix + "txtEdadTerc"/*11*/];
        if (e.shiftKey) {
            switch (e.currentTarget.id) {
                case (prefix + "ddlDrogaSec"):
                    for (var i = 3; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlDrogaTerc"):
                    for (var i = 7; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaPrim"):
                    for (var i = 0; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaSec"):
                    for (var i = 4; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaTerc"):
                    for (var i = 8; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecPrim"):
                    for (var i = 1; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecSec"):
                    for (var i = 5; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecTerc"):
                    for (var i = 9; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "txtEdadPrim"):
                    for (var i = 2; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "txtEdadSec"):
                    for (var i = 6; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "txtEdadTerc"):
                    for (var i = 10; i >= 0; i--) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                default: break;
            }
        }
        else {
            switch (e.currentTarget.id) {
                case (prefix + "ddlDrogaPrim"):
                    for (var i = 1; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlDrogaSec"):
                    for (var i = 5; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlDrogaTerc"):
                    for (var i = 9; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaPrim"):
                    for (var i = 2; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaSec"):
                    for (var i = 6; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlViaTerc"):
                    for (var i = 10; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecPrim"):
                    for (var i = 3; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecSec"):
                    for (var i = 7; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "ddlFrecTerc"):
                    for (var i = 11; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "txtEdadPrim"):
                    for (var i = 4; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                case (prefix + "txtEdadSec"):
                    for (var i = 8; i <= 11; i++) {
                        if ($("#" + inputs[i]).is(':enabled')) {
                            $("#" + inputs[i]).focus(); e.preventDefault(); return;
                        }
                    }
                    break;
                default: break;
            }
        }
    }
}
function changeTabOrder() {
    try {
        var prefix = "#mainBodyContent_WucEpisodioAdmision_";
        $(prefix + "ddlDrogaPrim").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlDrogaSec").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlDrogaTerc").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlViaPrim").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlViaSec").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlViaTerc").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlFrecPrim").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlFrecSec").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "ddlFrecTerc").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "txtEdadPrim").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "txtEdadSec").on('keydown', function (e) { tabEvent(e) });
        $(prefix + "txtEdadTerc").on('keydown', function (e) { tabEvent(e) });
    }
    catch (ex) { }
}
function frmActionModeSetup() {
    try {
        var frmActionMode = document.getElementById("frmActionMode");
        if (frmActionMode.value == "read") {
            $(".SEPSDivs").addClass("SEPSDivsInfo");
            $(".SEPSDivs").removeClass("SEPSDivs");
        }
    }
    catch (ex) { }
}

function showDSMV(txtDescripcion, txtDescripcionHidden) {
    try {
        var url = 'frmdsmi_v.aspx?' + 'txtDescripcion=' + txtDescripcion + '&txtDescripcionHidden=' + txtDescripcionHidden
        var ventana = window.open(url, "list", "width=620,height=280,resizable=yes,toolbar=no,status=no,menubar=no");
    }
    catch (ex) { }
}
function DSMV() {
    try {
        var lbx = document.getElementById("lbxDSMV");
        var txtDescripcion = document.getElementById("txtDescripcion");
        var txtDescripcionHidden = document.getElementById("txtDescripcionHidden");
        var txtDescripcionPadre = window.opener.document.getElementById(txtDescripcion.value);
        var txtDescripcionHiddenPadre = window.opener.document.getElementById(txtDescripcionHidden.value);
        txtDescripcionHiddenPadre.value = lbx.value;
        txtDescripcionPadre.value = lbx[lbx.selectedIndex].text;
        window.close();
    }
    catch (ex) { }
}
function dsmivShowHideClick() {
    var showContentButton = document.getElementById("dsmiv_showContentButton");
    if (showContentButton.getAttribute("aria-expanded") == "false") {
        showContentButton.innerText = "Esconder contenido";
    }
    else {
        showContentButton.innerText = "Mostrar contenido";
    }
}

function ddlPreviosSustancias() {
    try {
        var ddlPreviosSustancias = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlPreviosSustancias");
        var ddlUltSustancias = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlUltSustancias");
        var ddlNivelSustancias = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlNivelSustancias");
        var txtDíasSustUlt = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasSustUlt");
        var txtMesesSustUlt = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtMesesSustUlt");
        switch (ddlPreviosSustancias.value) {
            case ("1"): case ("99"):
                ddlUltSustancias.value = 99;
                ddlNivelSustancias.value = 99;
                txtDíasSustUlt.value = "0";
                txtMesesSustUlt.value = "0";
                ddlUltSustancias.disabled = true;
                ddlNivelSustancias.disabled = true;
                txtDíasSustUlt.disabled = true;
                txtMesesSustUlt.disabled = true;
                break;
            default:
                ddlUltSustancias.disabled = false;
                ddlNivelSustancias.disabled = false;
                txtDíasSustUlt.disabled = false;
                txtMesesSustUlt.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlPreviosMental() {
    try {
        var ddlPreviosMental = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlPreviosMental");
        var ddlUltMental = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlUltMental");
        var ddlNivelMental = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlNivelMental");
        var txtDíasMentUlt = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasMentUlt");
        var txtMesesMentUlt = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtMesesMentUlt");
        switch (ddlPreviosMental.value) {
            case ("1"): case ("99"):
                ddlUltMental.value = 99;
                ddlNivelMental.value = 99;
                txtDíasMentUlt.value = "0";
                txtMesesMentUlt.value = "0";
                ddlUltMental.disabled = true;
                ddlNivelMental.disabled = true;
                txtDíasMentUlt.disabled = true;
                txtMesesMentUlt.disabled = true;
                break;
            default:
                ddlUltMental.disabled = false;
                ddlNivelMental.disabled = false;
                txtDíasMentUlt.disabled = false;
                txtMesesMentUlt.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlUltMental() {
    try {
        var días = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasMentUlt");
        var meses = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtMesesMentUlt");
        switch (document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlUltMental").value) {
            case ("0")://Empty string
            case ("1")://Menos de un mes (30 días)
            case ("2")://1 a 3 meses
            case ("3")://4 a 6 meses
            case ("4")://7 a 11 meses
            case ("5")://1 año a 2 años
            case ("6")://3 a 4 años
            case ("7")://5 a 6 años
            case ("8")://7 años o más
                días.disabled = false;
                meses.disabled = false;
                break;
            case ("95")://No información
            case ("99")://No aplica
                días.value = 0;
                meses.value = 0;
                días.disabled = true;
                meses.disabled = true;
                break;
            default: break;
        }
    }
    catch (ex) { }
}
function ddlUltSustancias() {
    try {
        var días = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasSustUlt");
        var meses = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtMesesSustUlt");
        switch (document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlUltSustancias").value) {
            case ("0")://Empty string
            case ("1")://Menos de un mes (30 días)
            case ("2")://1 a 3 meses
            case ("3")://4 a 6 meses
            case ("4")://7 a 11 meses
            case ("5")://1 año a 2 años
            case ("6")://3 a 4 años
            case ("7")://5 a 6 años
            case ("8")://7 años o más
                días.disabled = false;
                meses.disabled = false;
                break;
            case ("95")://No información
            case ("99")://No aplica
                días.value = 0;
                meses.value = 0;
                días.disabled = true;
                meses.disabled = true;
                break;
            default: break;
        }
    }
    catch (ex) { }
}
function ddlNivelCuidadoSustancias() {
    try {
        var txtDíasSustancias = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasSustancias");
        switch (document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlNivelCuidadoSustancias").value) {
            case ("99")://No aplica
                txtDíasSustancias.value = "0";
                txtDíasSustancias.disabled = true;
                break;
            default:
                txtDíasSustancias.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlNivelCuidadoSaludMental() {
    try {
        var txtDíasMental = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtDíasMental");
        switch (document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlNivelCuidadoSaludMental").value) {
            case ("99")://No aplica
                txtDíasMental.value = "0";
                txtDíasMental.disabled = true;
                break;
            default:
                txtDíasMental.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlDSMVPsicoAmbiPrim() {
    try {
        var ddlDSMVPsicoAmbiPrim = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDSMVPsicoAmbiPrim");
        var ddlDSMVPsicoAmbiSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDSMVPsicoAmbiSec");
        var ddlDSMVPsicoAmbiTer = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDSMVPsicoAmbiTer");
        switch (ddlDSMVPsicoAmbiPrim.value) {
            case ("99"):
                ddlDSMVPsicoAmbiSec.value = 99;
                ddlDSMVPsicoAmbiTer.value = 99;
                ddlDSMVPsicoAmbiSec.disabled = true;
                ddlDSMVPsicoAmbiTer.disabled = true;
                break;
            default:
                ddlDSMVPsicoAmbiSec.disabled = false;
                ddlDSMVPsicoAmbiTer.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlDSMVPsicoAmbiSec() {
    try {
        var ddlDSMVPsicoAmbiSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDSMVPsicoAmbiSec");
        var ddlDSMVPsicoAmbiTer = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDSMVPsicoAmbiTer");
        if (ddlDSMVPsicoAmbiSec.value == 99) {
            ddlDSMVPsicoAmbiTer.value = 99;
            ddlDSMVPsicoAmbiTer.disabled = true;
        }
        else {
            ddlDSMVPsicoAmbiTer.disabled = false;
        }
    }
    catch (ex) { }
}
function ddlVaron() {
    try {
        var ddlVaron = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlVaron");
        var txtNumNinos = document.getElementById("mainBodyContent_WucDatosDemograficos_txtNumNinos");
        var rvNumNinos = document.getElementById("mainBodyContent_WucDatosDemograficos_rvNumNinos");
        switch (ddlVaron.value) {
            case ("1")://SIN HIJOS
                txtNumNinos.value = '0';
                rvNumNinos.minimumvalue = '0';
                txtNumNinos.disabled = true;
                break;
            case ("2")://CON HIJOS
                if (txtNumNinos.value == '0') {
                    txtNumNinos.value = '';
                }
                rvNumNinos.minimumvalue = '1';
                txtNumNinos.disabled = false;
                break;
            case ("99"): break;//No Aplica
            default://En blanco
                rvNumNinos.minimumvalue = '0';
                txtNumNinos.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlFuenteReferido() {
    try {
        var ddlFuenteReferido = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFuenteReferido");
        var ddlEstadoLegal = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlEstadoLegal");
        switch (ddlFuenteReferido.value) {
            case ("25"):
                ddlEstadoLegal.disabled = true;
                ddlEstadoLegal.value = 99;
                break;
            default:
                ddlEstadoLegal.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlGrado() {
    try {
        var ddlGrado = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlGrado");
        var ddlDesertor = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlDesertorEscolar");
        var edad = parseInt(document.getElementById("mainBodyContent_WucDatosPersonales_lblEdad").innerText);
        if (edad >= 18) {
            switch (ddlGrado.value) {
                case ("12")://Diploma de escuela superior
                case ("14")://Créditos universitarios
                case ("16")://Curso vocacional
                case ("22")://Grado asociado
                case ("23")://Bachillerato
                case ("24")://Maestría
                case ("25")://Doctorado
                case ("25")://Otro (educación especial")
                    // No es desertor
                    ddlDesertor.value = 2;//No
                    ddlDesertor.disabled = true;
                    break;
                case ("96")://No informo
                    // No aplica
                    ddlDesertor.value = 99;//No aplica
                    ddlDesertor.disabled = true;
                    break;
                case ("13")://Ninguna
                case ("26")://Pre-escolar
                case ("27")://Kindergarten
                case ("1")://Primero
                case ("2")://Segundo
                case ("3")://Tercero
                case ("4")://Cuarto
                case ("5")://Quinto
                case ("6")://Sexto
                case ("7")://Séptimo
                case ("8")://Octavo
                case ("9")://Noveno
                case ("10")://Décimo
                case ("11")://Undécimo
                    //Es desertor
                    ddlDesertor.value = 1;//Sí
                    ddlDesertor.disabled = true;
                    break;
            }
        }
    }
    catch (ex) { }
}
function ddlCondLaboral() {
    try {
        var ddlCondLaboral = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlCondLaboral");
        var ddlNoFueraLaboral = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlNoFueraLaboral");
        var ddlFuenteIngreso = document.getElementById("mainBodyContent_WucDatosDemograficos_ddlFuenteIngreso");
        switch (ddlCondLaboral.value) {
            case ("5"):
                ddlNoFueraLaboral.disabled = false;
                break;
            case ("1"): case ("2"):
                ddlFuenteIngreso.value = 1;
                ddlFuenteIngreso.disabled = true;
                break;
            default:
                ddlNoFueraLaboral.value = 99;
                ddlNoFueraLaboral.disabled = true;
                ddlFuenteIngreso.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlEstadoLegal() {
    try {
        var ddlArrestado = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlArrestado");
        var ddlArrestado30 = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlArrestado30");
        switch (document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlEstadoLegal")) {
            case ("1"): case ("2"): case ("3"): case ("5"): case ("6"): case ("9"): case ("11"): case ("12"): case ("14"): case ("15"): case ("22"):
                ddlArrestado.value = 1;
                ddlArrestado.disabled = true;
                ddlArrestado30.disabled = false;
                ddlArrestado();
                ddlArrestado30();
                break;
            default:
                ddlArrestado.disabled = false;
                ddlArrestado();
                ddlArrestado30();
                break;
        }
    }
    catch (ex) { }
}
function ddlEstadoLegal_Load() {
    try {
        switch (document.getElementById("hFKPrograma").value) {
            case ("27"): case ("31"): case ("32"): case ("33"): case ("34"): case ("35"): case ("36"): case ("37"): case ("38"): case ("39"): case ("40"): case ("41"): case ("42")://TASC
                $("#mainBodyContent_WucEpisodioAdmision_ddlEstadoLegal option").filter(function () { return ["0", "1", "2"].indexOf(this.value) < 0; }).remove();
                break;
            default: break;
        }
    }
    catch (ex) { }
}
function ddlArrestado() {
    try {
        var ddlArrestado = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlArrestado");
        var txtArrestos3O = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtArrestos30");
        var ddlArrestado3O = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlArrestado30");
        var rvArrestos3O = document.getElementById("mainBodyContent_WucEpisodioAdmision_rvArrestos30");
        switch (ddlArrestado.value) {
            case ("1")://Sí
                txtArrestos3O.disabled = false;
                ddlArrestado3O.disabled = false;
                ddlArrestado30();
                break;
            case ("2")://No
                txtArrestos3O.value = '0';
                ddlArrestado3O.value = 2;
                rvArrestos3O.minimumvalue = "0";
                ddlArrestado3O.disabled = true;
                txtArrestos3O.disabled = true;
                break;
            default:
                ddlArrestado3O.disabled = false;
                ddlArrestado30();
                break;
        }
    }
    catch (ex) { }
}
function ddlArrestado30() {
    try {
        var txtArrestos30 = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtArrestos30");
        var ddlArrestado30 = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlArrestado30");
        var rvArrestos30 = document.getElementById("mainBodyContent_WucEpisodioAdmision_rvArrestos30");
        switch (ddlArrestado30.value) {
            case ("1")://Sí
                if (txtArrestos30.value == "0") {
                    txtArrestos30.value = "";
                }
                rvArrestos30.minimumvalue = "1";
                txtArrestos30.disabled = false;
                break;
            case ("2")://No
                txtArrestos30.value = '0';
                rvArrestos30.minimumvalue = "0";
                txtArrestos30.disabled = true;
                break;
            default:
                rvArrestos30.minimumvalue = "0";
                txtArrestos30.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlReunionesGrupos() {
    try {
        var ddlReunionesGrupos = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlReunionesGrupos");
        var ddlFreq_AutoAyuda = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFreq_AutoAyuda");
        switch (ddlReunionesGrupos.value) {
            case ("2"):
                ddlFreq_AutoAyuda.value = 1;
                ddlFreq_AutoAyuda.disabled = true;
                break;
            default:
                ddlFreq_AutoAyuda.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
var sustanciasList = {
    Alcohol: "1",
    Anfetaminas: "2",
    Barbitúricos: "3",
    Benzodiazepinas: "4",
    Cocaína: "5",
    Otrosopiáceosyopioides: "6",
    Marihuanasintética: "7",
    Crack: "8",
    Ecstasy: "9",
    Heroína: "10",
    Metanfetamina: "11",
    HeroínaCocaínaSpeedball: "12",
    Marihuana: "13",
    Metadona: "14",
    PCP: "15",
    Percocet: "16",
    Sedantes: "17",
    Tabacocigarrillo: "18",
    Nousaactualmente: "19",
    Inhalantes: "20",
    Alucinógenos: "21",
    Otro: "22",
    Medicamentosnorecetados: "23",
    Xanax: "24",
    Anestesiadecaballo: "26",
    CocaínaMarihuanaDiablillo: "27",
    Noinformó: "96",
    Noaplica: "99"
}
var viaList = {
    Inyectada: "1",
    Nasal: "2",
    OralBebida: "3",
    Fumada: "4",
    Otro: "10",
    Desconocido: "95",
    NoAplica: "99"
}
function ddlDrogaPrimF() {
    try {
        var ddlDrogaPrim = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaPrim");
        var ddlDrogaSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaSec");
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaTerc");
        var ddlViaPrim = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaPrim");
        var ddlViaSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaSec");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaTerc");
        var ddlFrecPrim = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecPrim");
        var ddlFrecSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecSec");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecTerc");
        var txtEdadPrim = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadPrim");
        var txtEdadSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadSec");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadTerc");
        ddlViaPrim.disabled = false;
        ddlFrecPrim.disabled = false;
        txtEdadPrim.disabled = false;
        switch (ddlDrogaPrim.value) {
            case (sustanciasList.Alcohol): case (sustanciasList.Ecstasy): case (sustanciasList.Metadona): case (sustanciasList.Percocet): case (sustanciasList.Xanax):
                ddlViaPrim.value = viaList.OralBebida;
                ddlDrogaSec.disabled = false;
                ddlViaPrim.disabled = true;
                break;
            case (sustanciasList.Inhalantes):
                ddlViaPrim.value = viaList.Nasal;
                ddlDrogaSec.disabled = false;
                ddlViaPrim.disabled = true;
                break;
            case (sustanciasList.Anestesiadecaballo):
                ddlViaPrim.value = viaList.Inyectada;
                ddlDrogaSec.disabled = false;
                ddlViaPrim.disabled = true;
                break;
            case (sustanciasList.Tabacocigarrillo):
                ddlViaPrim.value = viaList.Fumada;
                ddlDrogaSec.disabled = false;
                ddlViaPrim.disabled = true;
                break;
            case (sustanciasList.Nousaactualmente): case (sustanciasList.Noaplica): case (sustanciasList.Noinformó):
            case ("95"): case ("98")://OLDVALUES
                ddlViaPrim.value = viaList.NoAplica;
                ddlViaPrim.disabled = true;
                ddlFrecPrim.value = 99;
                ddlFrecPrim.disabled = true;
                txtEdadPrim.value = "0";
                txtEdadPrim.disabled = true;
                ddlDrogaSec.value = sustanciasList.Noaplica;
                ddlDrogaTerc.value = sustanciasList.Noaplica;
                ddlViaSec.value = viaList.NoAplica;
                ddlViaTerc.value = viaList.NoAplica;
                ddlFrecSec.value = 99;
                ddlFrecTerc.value = 99;
                txtEdadSec.value = "0";
                txtEdadTerc.value = "0";
                ddlDrogaSec.disabled = true;
                ddlDrogaTerc.disabled = true;
                ddlViaSec.disabled = true;
                ddlViaTerc.disabled = true;
                ddlFrecSec.disabled = true;
                ddlFrecTerc.disabled = true;
                txtEdadSec.disabled = true;
                txtEdadTerc.disabled = true;
                break;
            default:
                ddlViaPrim.disabled = false;
                ddlDrogaSec.disabled = false;
                break;
        }
        ddlViaPrimF();
        ddlDrogaSecF();
    }
    catch (ex) { }
}
function ddlDrogaSecF() {
    try {
        var ddlDrogaSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaSec");
        var ddlViaSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaSec");
        var ddlFrecSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecSec");
        var txtEdadSec = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadSec");
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaTerc");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaTerc");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecTerc");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadTerc");
        ddlViaSec.disabled = false;
        ddlFrecSec.disabled = false;
        txtEdadSec.disabled = false;
        switch (ddlDrogaSec.value) {
            case (sustanciasList.Alcohol): case (sustanciasList.Ecstasy): case (sustanciasList.Metadona): case (sustanciasList.Percocet): case (sustanciasList.Xanax):
                ddlViaSec.value = viaList.OralBebida;
                ddlDrogaTerc.disabled = false;
                ddlViaSec.disabled = true;
                break;
            case (sustanciasList.Inhalantes):
                ddlViaSec.value = viaList.Nasal;
                ddlDrogaTerc.disabled = false;
                ddlViaSec.disabled = true;
                break;
            case (sustanciasList.Anestesiadecaballo):
                ddlViaSec.value = viaList.Inyectada;
                ddlDrogaTerc.disabled = false;
                ddlViaSec.disabled = true;
                break;
            case (sustanciasList.Tabacocigarrillo):
                ddlViaSec.value = viaList.Fumada;
                ddlDrogaTerc.disabled = false;
                ddlViaSec.disabled = true;
                break;
            case (sustanciasList.Nousaactualmente): case (sustanciasList.Noaplica): case (sustanciasList.Noinformó):
            case ("95"): case ("98")://OLDVALUES
                ddlViaSec.value = viaList.NoAplica;
                ddlViaSec.disabled = true;
                ddlFrecSec.value = 99;
                ddlFrecSec.disabled = true;
                txtEdadSec.value = "0";
                txtEdadSec.disabled = true;
                ddlDrogaTerc.value = sustanciasList.Noaplica;
                ddlViaTerc.value = viaList.NoAplica;
                ddlFrecTerc.value = 99;
                txtEdadTerc.value = "0";
                ddlDrogaTerc.disabled = true;
                ddlViaTerc.disabled = true;
                ddlFrecTerc.disabled = true;
                txtEdadTerc.disabled = true;
                break;
            default:
                ddlViaSec.disabled = false;
                ddlDrogaTerc.disabled = false;
                break;
        }
        ddlViaSecF();
        ddlDrogaTercF();
    }
    catch (ex) { }
}
function ddlDrogaTercF() {
    try {
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaTerc");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaTerc");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlFrecTerc");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioAdmision_txtEdadTerc");
        ddlViaTerc.disabled = false;
        ddlFrecTerc.disabled = false;
        txtEdadTerc.disabled = false;
        switch (ddlDrogaTerc.value) {
            case (sustanciasList.Alcohol): case (sustanciasList.Ecstasy): case (sustanciasList.Metadona): case (sustanciasList.Percocet): case (sustanciasList.Xanax):
                ddlViaTerc.value = viaList.OralBebida;
                ddlViaTerc.disabled = true;
                break;
            case (sustanciasList.Inhalantes):
                ddlViaTerc.value = viaList.Nasal;
                ddlViaTerc.disabled = true;
                break;
            case (sustanciasList.Anestesiadecaballo):
                ddlViaTerc.value = viaList.Inyectada;
                ddlViaTerc.disabled = true;
                break;
            case (sustanciasList.Tabacocigarrillo):
                ddlViaTerc.value = viaList.Fumada;
                ddlViaTerc.disabled = true;
                break;
            case (sustanciasList.Nousaactualmente): case (sustanciasList.Noaplica): case (sustanciasList.Noinformó):
            case ("95"): case ("98")://OLDVALUES
                ddlViaTerc.value = viaList.NoAplica;
                ddlViaTerc.disabled = true;
                ddlFrecTerc.value = 99;
                ddlFrecTerc.disabled = true;
                txtEdadTerc.value = "0";
                txtEdadTerc.disabled = true;
                break;
            default:
                ddlViaTerc.disabled = false;
                break;
        }
        ddlViaTercF();
    }
    catch (ex) { }
}
function ddlViaPrimF() {
    try {
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaPrim");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaPrim");
        if (ddlDroga.value == sustanciasList.Heroína) {
            if (ddlVia.value != viaList.Nasal && ddlVia.value != viaList.Inyectada && ddlVia.value != 0) {
                alert('La droga(heroína) permite solo las vias "Nasal" o "Inyectada".');
                ddlVia.value = 0;
            }
        }
        else if (ddlDroga.value == sustanciasList.Marihuana || ddlDroga.value == sustanciasList.Marihuanasintética) {
            if (ddlVia.value == viaList.Nasal) {
                if (ddlDroga.value == sustanciasList.Marihuana) {
                    alert("La droga(Marihuana) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
                else if (ddlDroga.value == sustanciasList.Marihuanasintética) {
                    alert("La droga(Marihuana Sintética) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
            }
        }
    }
    catch (ex) { }
}
function ddlViaSecF() {
    try {
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaSec");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaSec");
        if (ddlDroga.value == sustanciasList.Heroína) {
            if (ddlVia.value != viaList.Nasal && ddlVia.value != viaList.Inyectada && ddlVia.value != 0) {
                alert('La droga(heroína) permite solo las vias "Nasal" o "Inyectada".');
                ddlVia.value = 0;
            }
        }
        else if (ddlDroga.value == sustanciasList.Marihuana || ddlDroga.value == sustanciasList.Marihuanasintética) {
            if (ddlVia.value == viaList.Nasal) {
                if (ddlDroga.value == sustanciasList.Marihuana) {
                    alert("La droga(Marihuana) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
                else if (ddlDroga.value == sustanciasList.Marihuanasintética) {
                    alert("La droga(Marihuana Sintética) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
            }
        }
    }
    catch (ex) { }
}
function ddlViaTercF() {
    try {
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlDrogaTerc");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioAdmision_ddlViaTerc");
        if (ddlDroga.value == sustanciasList.Heroína) {
            if (ddlVia.value != viaList.Nasal && ddlVia.value != viaList.Inyectada && ddlVia.value != 0) {
                alert('La droga(heroína) permite solo las vias "Nasal" o "Inyectada".');
                ddlVia.value = 0;
            }
        }
        else if (ddlDroga.value == sustanciasList.Marihuana || ddlDroga.value == sustanciasList.Marihuanasintética) {
            if (ddlVia.value == viaList.Nasal) {
                if (ddlDroga.value == sustanciasList.Marihuana) {
                    alert("La droga(Marihuana) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
                else if (ddlDroga.value == sustanciasList.Marihuanasintética) {
                    alert("La droga(Marihuana Sintética) no permite la via \"Nasal\".");
                    ddlVia.value = 0;
                }
            }
        }
    }
    catch (ex) { }
}
var saving = false;
function validate() {
    var isValid = Page_ClientValidate();
    if (!saving) {
        if (isValid) {
            saving = true;
            scrollToTop();
            showUnlosableModal();
            hideTheButtons();
            enableTheDisabled();
        }
        else {
            scrollToTheError();
        }
        return isValid;
    }
    else { return false; }
}
function validatePaciente() {
    var isValid = Page_ClientValidate();
    if (!saving) {
        if (isValid) {
            saving = true;
            showUnlosableModalPaciente();
            hideTheButtonsPacientes();
            enableTheDisabled();
        }
        else {
            scrollToTheError();
        }
        return isValid;
    }
    else { return false; }
}
function scrollToTheError() { $('html,body').animate({ scrollTop: $('.rightFloatAsterisk,.leftFloatAsterisk,.asterisk').filter(':visible').first().offset().top - 5 }, 500); }
function scrollToTop() { $('html,body').animate({ scrollTop: 0 }, 250); }
function enableTheDisabled() { $("select").removeAttr("disabled"); $("input").removeAttr("disabled"); }
function hideTheButtons() { $("#mainBodyContent_btnGuardarCambios").hide(); $("#mainBodyContent_btnRegistrar").hide(); }
function hideTheButtonsPacientes() { $("#mainBodyContent_btnActualizarPersona").hide(); $("#mainBodyContent_btnRegistrar").hide(); }
function showUnlosableModal() {
    switch ($("#frmActionMode").val()) {
        case ("create"): $("#mensageModal").text("Guardando perfil de admisión."); break;
        case ("update"): $("#mensageModal").text("Actualizando perfil de admisión."); break;
        default: $("#mensageModal").text("Guardando perfil."); break;
    }
    $("#myModalUnclosable").modal('show');
}
function showUnlosableModalPaciente() {
    switch ($("#frmActionMode").val()) {
        case ("registrar"): $("#mensageModal").text("Registrando paciente."); break;
        case ("editar"): $("#mensageModal").text("Actualizando paciente."); break;
        default: $("#mensageModal").text("Guardando paciente."); break;
    }
    $("#myModalUnclosable").modal('show');
}