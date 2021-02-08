$(document).ready(function () {
  $("#dataTable").DataTable({
    ajax: "websites.json",
    order: [[0, "asc"]],
    lengthMenu: [10, 25, 50, 75, 100],
    columnDefs: [
      {
        render: function (data, type, row) {
          var link = convertToLink(data);
          return link;
        },
        targets: 1,
      },
    ],
  });
});

function convertToLink(link) {
  var html = '<a href="' + link + '">' + link + "</a>";
  return html;
}
