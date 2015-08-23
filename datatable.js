$(document).ready(function() {
    
    $('#dataTable').DataTable( {
        "ajax": 'websites.json',
        "lengthMenu": [25, 50, 75, 100],
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        
                        var link = convertToLink(data);
                        
                        return link;
                        
                        //return data + "!";
                    },
                    "targets": 1
                }
            ]
    } );
    
} );

function convertToLink(link) {
    
    var html = '<a href="' + link + '">' + link + "</a>";
    
    return html;
    
}