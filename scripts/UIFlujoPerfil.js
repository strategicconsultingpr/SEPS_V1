$(document).ready(function () {
    frmActionModeSetup();
    startupFunctions();
});
function startupFunctions() {
    try {
        changeTabOrder();
        setupFechaPerfilLabel();
        ddlCondLaboral();
        ddlArrestado30();
        ddlDrogaPrimF();
        ddlDSMVPsicoAmbiPrim();
        ddlDSMVPsicoAmbiSec();
        ddlRazonAlta();
        ddlGrado();
        TakeHomeParticipa();
    }
    catch (ex) {
        throw ex;
    }
}
function tabEvent(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {
        var prefix = "mainBodyContent_WucEpisodioPerfil_";
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
function setupFechaPerfilLabel() {
    try {
        switch (currentPageName().toUpperCase()) {
            case ("FRMEVALUACION"): $("#fechaPerfil").html("Fecha de evaluación:"); break;
            case ("FRMALTA"): $("#fechaPerfil").html("Fecha de alta:"); break;
            default: break;
        }
    }
    catch (e) { }
}
function currentPageName() {
    var path = window.location.pathname;
    var page = path.substr(path.lastIndexOf("/") + 1).split(".", 1);
    var formname = page[0].toString();
    return formname;
}
function changeTabOrder() {
    try {
        var prefix = "#mainBodyContent_WucEpisodioPerfil_";
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

function dsmivShowHideClick() {
    try {
        var showContentButton = document.getElementById("dsmiv_showContentButton");
        if (showContentButton.getAttribute("aria-expanded") == "false") {
            showContentButton.innerText = "Esconder contenido";
        }
        else {
            showContentButton.innerText = "Mostrar contenido";
        }
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
function showDSMV(txtDescripcion, txtDescripcionHidden) {
    try {
        var url = 'frmdsmi_v.aspx?' + 'txtDescripcion=' + txtDescripcion + '&txtDescripcionHidden=' + txtDescripcionHidden
        var ventana = window.open(url, "list", "width=620,height=280,resizable=yes,toolbar=no,status=no,menubar=no");
    }
    catch (ex) { }
}

function ddlCondLaboral() {
    try {
        var ddlCondLaboral = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_ddlCondLaboral");
        var ddlNoFueraLaboral = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_ddlNoFueraLaboral");
        switch (ddlCondLaboral.value) {
            case ("5"):
                ddlNoFueraLaboral.disabled = false;
                break;
            default:
                ddlNoFueraLaboral.value = 99;
                ddlNoFueraLaboral.disabled = true;
                break;
        }
    }
    catch (ex) { }
}
function ddlArrestado30() {
    try {
        var txtArrestos30 = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_txtArrestos30");
        var rvArrestos30 = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_rvArrestos30");
        switch (document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_ddlArrestado").value) {
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
function ddlRazonAlta() {
    try {
        var ddlRazonAlta = document.getElementById("mainBodyContent_WucDatosAlta_ddlRazonAlta");
        var ddlCentroReferido = document.getElementById("mainBodyContent_WucDatosAlta_ddlCentroReferido");
        var ddlCategoriasDeCentrosPrivados = document.getElementById("mainBodyContent_WucDatosAlta_ddlCategoriasDeCentrosPrivados");
        if (typeof (ddlCategoriasDeCentrosPrivados) != "undefined" && ddlCategoriasDeCentrosPrivados != null) {
            switch (ddlRazonAlta.value) {
                case ("3"):
                    ddlCentroReferido.disabled = false;
                    ddlCategoriasDeCentrosPrivados.disabled = true;
                    ddlCategoriasDeCentrosPrivados.value = 0;
                    break;
                case ("7"):
                    ddlCategoriasDeCentrosPrivados.disabled = false;
                    ddlCentroReferido.disabled = true;
                    ddlCentroReferido.value = 0;
                    break;
                default:
                    ddlCentroReferido.disabled = true;
                    ddlCategoriasDeCentrosPrivados.disabled = true;
                    ddlCentroReferido.value = 0;
                    ddlCategoriasDeCentrosPrivados.value = 0;
                    break;
            }
        }
    }
    catch (ex) { }
}
function TakeHomeParticipa() {
    var frmActionMode = document.getElementById("frmActionMode");
    if (frmActionMode.value == "read") {
        try {
            var lblParticipa = document.getElementById("mainBodyContent_WucTakeHome_lblTHBelong");
            $Participa = $(".Participa");
            $NoParticipa = $(".NoParticipa");
            switch (lblParticipa.innerText) {
                case ("No"): $Participa.hide(); $NoParticipa.show(); break;
                case ("Sí"): $Participa.show(); $NoParticipa.hide(); break
                default: $Participa.hide(); $NoParticipa.hide(); break;
            }
        }
        catch (ex) { }
    }
    else {
        try {
            var ddlParticipa = document.getElementById("mainBodyContent_WucTakeHome_ddlTHBelong");
            var díaFechaEntrada = document.getElementById("mainBodyContent_WucTakeHome_ddlFechaEntradaDía");
            var mesFechaEntrada = document.getElementById("mainBodyContent_WucTakeHome_ddlFechaEntradaMes");
            var añoFechaEntrada = document.getElementById("mainBodyContent_WucTakeHome_txtFechaEntradaAño");
            var díaFechaSalida = document.getElementById("mainBodyContent_WucTakeHome_ddlFechaSalidaDía");
            var mesFechaSalida = document.getElementById("mainBodyContent_WucTakeHome_ddlFechaSalidaMes");
            var añoFechaSalida = document.getElementById("mainBodyContent_WucTakeHome_txtFechaSalidaAño");
            var ddlTHEtapa = document.getElementById("mainBodyContent_WucTakeHome_ddlTHEtapa");
            var txtCantidadBotellas = document.getElementById("mainBodyContent_WucTakeHome_txtCantidadBotellas");
            var ddlFrecuenciaBotellas = document.getElementById("mainBodyContent_WucTakeHome_ddlFrecuenciaBotellas");
            $Participa = $(".Participa");
            $NoParticipa = $(".NoParticipa");
            switch (ddlParticipa.value) {
                case ("1")://Participa
                    díaFechaEntrada.disabled = false;
                    mesFechaEntrada.disabled = false;
                    añoFechaEntrada.disabled = false;
                    díaFechaSalida.disabled = false;
                    mesFechaSalida.disabled = false;
                    añoFechaSalida.disabled = false;
                    ddlTHEtapa.disabled = false;
                    txtCantidadBotellas.disabled = false;
                    ddlFrecuenciaBotellas.disabled = false;
                    $NoParticipa.hide();
                    $Participa.show();
                    break;
                case ("2")://No participa
                    díaFechaEntrada.disabled = true;
                    mesFechaEntrada.disabled = true;
                    añoFechaEntrada.disabled = true;
                    añoFechaEntrada.value = '';
                    díaFechaSalida.disabled = true;
                    mesFechaSalida.disabled = true;
                    añoFechaSalida.disabled = true;
                    añoFechaSalida.value = '';
                    ddlTHEtapa.disabled = true;
                    ddlTHEtapa.value = '';
                    txtCantidadBotellas.disabled = true;
                    txtCantidadBotellas.value = '';
                    ddlFrecuenciaBotellas.disabled = true;
                    ddlFrecuenciaBotellas.value = '';
                    $Participa.hide();
                    $NoParticipa.show();
                    break;
                default:
                    díaFechaEntrada.disabled = true;
                    mesFechaEntrada.disabled = true;
                    añoFechaEntrada.disabled = true;
                    añoFechaEntrada.value = '';
                    díaFechaSalida.disabled = true;
                    mesFechaSalida.disabled = true;
                    añoFechaSalida.disabled = true;
                    añoFechaSalida.value = '';
                    ddlTHEtapa.disabled = true;
                    ddlTHEtapa.value = '';
                    txtCantidadBotellas.disabled = true;
                    txtCantidadBotellas.value = '';
                    ddlFrecuenciaBotellas.disabled = true;
                    ddlFrecuenciaBotellas.value = '';
                    $Participa.hide();
                    $NoParticipa.hide();
                    break;
            }
        }
        catch (ex) { }
    }
}
function ddlGrado() {
    try {
        var ddlGrado = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_ddlGrado");
        var ddlDesertor = document.getElementById("mainBodyContent_WucDatosDemograficosPerfil_ddlDesertorEscolar");
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

function ddlDSMVPsicoAmbiPrim() {
    try {
        var ddlDSMVPsicoAmbiPrim = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDSMVPsicoAmbiPrim");
        var ddlDSMVPsicoAmbiSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDSMVPsicoAmbiSec");
        var ddlDSMVPsicoAmbiTer = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDSMVPsicoAmbiTer");
        switch (ddlDSMVPsicoAmbiPrim.value) {
            case ("99"):
                ddlDSMVPsicoAmbiSec.value = 99;
                ddlDSMVPsicoAmbiTer.value = 99;
                ddlDSMVPsicoAmbiSec.disabled = true;
                ddlDSMVPsicoAmbiTer.disabled = true;
                break;
            default:
                ddlDSMVPsicoAmbiSec.value = 0;
                ddlDSMVPsicoAmbiTer.value = 0;
                ddlDSMVPsicoAmbiSec.disabled = false;
                ddlDSMVPsicoAmbiTer.disabled = false;
                break;
        }
    }
    catch (ex) { }
}
function ddlDSMVPsicoAmbiSec() {
    try {
        var ddlDSMVPsicoAmbiSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDSMVPsicoAmbiSec");
        var ddlDSMVPsicoAmbiTer = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDSMVPsicoAmbiTer");
        switch (ddlDSMVPsicoAmbiSec.value) {
            case ("99"):
                ddlDSMVPsicoAmbiTer.value = 99;
                ddlDSMVPsicoAmbiTer.disabled = true;
                break;
            default:
                ddlDSMVPsicoAmbiTer.value = 0;
                ddlDSMVPsicoAmbiTer.disabled = false;
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
        var ddlDrogaPrim = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaPrim");
        var ddlDrogaSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaSec");
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaTerc");
        var ddlViaPrim = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaPrim");
        var ddlViaSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaSec");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaTerc");
        var ddlFrecPrim = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecPrim");
        var ddlFrecSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecSec");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecTerc");
        var txtEdadPrim = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadPrim");
        var txtEdadSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadSec");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadTerc");
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
        var ddlDrogaSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaSec");
        var ddlViaSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaSec");
        var ddlFrecSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecSec");
        var txtEdadSec = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadSec");
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaTerc");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaTerc");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecTerc");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadTerc");
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
        var ddlDrogaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaTerc");
        var ddlViaTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaTerc");
        var ddlFrecTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlFrecTerc");
        var txtEdadTerc = document.getElementById("mainBodyContent_WucEpisodioPerfil_txtEdadTerc");
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
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaPrim");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaPrim");
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
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaSec");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaSec");
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
        var ddlDroga = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlDrogaTerc");
        var ddlVia = document.getElementById("mainBodyContent_WucEpisodioPerfil_ddlViaTerc");
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

function cvTakeHomeRazonesNoParticipaValidation(oSrc, args) {
    try {
        var ddlTHBelong = document.getElementById('mainBodyContent_WucTakeHome_ddlTHBelong');
        var lbxRazonSeleccionado = document.getElementById('mainBodyContent_WucTakeHome_lbxRazonSeleccionado');
        switch (ddlTHBelong.value) {
            case ("2"):
                if (lbxRazonSeleccionado.options.length < 1) {
                    args.IsValid = false;
                }
                else {
                    args.IsValid = true;
                }
                break;
            default:
                args.IsValid = true;
                break;
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
            showUnclosableModal();
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
function scrollToTheError() { $('html,body').animate({ scrollTop: $('.rightFloatAsterisk,.leftFloatAsterisk,.asterisk').filter(':visible').first().offset().top - 5 }, 500); }
function scrollToTop() { $('html,body').animate({ scrollTop: 0 }, 250); }
function enableTheDisabled() { $("select").removeAttr("disabled"); $("input").removeAttr("disabled"); }
function hideTheButtons() { $("#mainBodyContent_btnGuardarCambios").hide(); $("#mainBodyContent_btnRegistrar").hide(); }
function showUnclosableModal() {
    var tipoDePerfil = $("#hTipoPagina").val();
    switch ($("#frmActionMode").val()) {
        case ("create"): $("#mensageModal").text("Guardando perfil de " + tipoDePerfil + "."); break;
        case ("update"): $("#mensageModal").text("Actualizando perfil de " + tipoDePerfil + "."); break;
        default: $("#mensageModal").text("Guardando perfil."); break;
    }
    $("#myModalUnclosable").modal('show');
}