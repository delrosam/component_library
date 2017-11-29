
  $( function() {
    var arr = [
      {
        value: "Jumbo Tron 1",
        label: "Jumbo Tron 1",
        anchor: "#jb-1"
      },
      {
        value: "Jumbo Tron 1.1",
        label: "Jumbo Tron 1.1",
        anchor: "#jb-1-1"
      },
      {
        value: "Jumbo Tron 1.2",
        label: "Jumbo Tron 1.2",
        anchor: "#jb-1-2"
      },
      {
        value: "Jumbo Tron 1.3",
        label: "Jumbo Tron 1.3",
        anchor: "#jb-1-3"
      },
      {
        value: "Jumbo Tron 2",
        label: "Jumbo Tron 2",
        anchor: "#jb-2"
      },
      {
        value: "Jumbo Tron 3",
        label: "Jumbo Tron 3",
        anchor: "#jb-3"
      },
      {
        value: "Jumbo Tron 3.1",
        label: "Jumbo Tron 3.1",
        anchor: "#jb-3-1"
      },
      {
        value: "Jumbo Tron 3.2",
        label: "Jumbo Tron 3.2",
        anchor: "#jb-3-2"
      }
    ];

    //AUTO COMPLETE SEARCH
    $('#search-box').autocomplete({
        source: arr,
        select: function (event, ui){
            $('input[name="search_box"]').val(ui.item.label);
            $anchorLink = ui.item.anchor;
            $('#searchBtn').attr("href", $anchorLink);

            return false;
        }
    });

  } );
