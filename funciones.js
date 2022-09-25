function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Reporte de Gasolina');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}