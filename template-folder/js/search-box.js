
  $( function() {
    var arr = [
      {
        value: "Jumbo Tron 1",
        label: "Jumbo Tron 1",
        anchor: "/heroes/jumbo-tron.html#jb-1"
      },
      {
        value: "Jumbo Tron 1.1",
        label: "Jumbo Tron 1.1",
        anchor: "/heroes/jumbo-tron.html#jb-1-1"
      },
      {
        value: "Jumbo Tron 1.2",
        label: "Jumbo Tron 1.2",
        anchor: "/heroes/jumbo-tron.html#jb-1-2"
      },
      {
        value: "Jumbo Tron 1.3",
        label: "Jumbo Tron 1.3",
        anchor: "/heroes/jumbo-tron.html#jb-1-3"
      },
      {
        value: "Jumbo Tron 2",
        label: "Jumbo Tron 2",
        anchor: "/heroes/jumbo-tron.html#jb-2"
      },
      {
        value: "Jumbo Tron 2.1",
        label: "Jumbo Tron 2.1",
        anchor: "/heroes/jumbo-tron.html#jb-2-1"
      },
      {
        value: "Jumbo Tron 2.2",
        label: "Jumbo Tron 2.2",
        anchor: "/heroes/jumbo-tron.html#jb-2-2"
      },
      {
        value: "Jumbo Tron 2.3",
        label: "Jumbo Tron 2.3",
        anchor: "/heroes/jumbo-tron.html#jb-2-3"
      },
      {
        value: "Jumbo Tron 3",
        label: "Jumbo Tron 3",
        anchor: "/heroes/jumbo-tron.html#jb-3"
      },
      {
        value: "Jumbo Tron 3.1",
        label: "Jumbo Tron 3.1",
        anchor: "/heroes/jumbo-tron.html#jb-3-1"
      },
      {
        value: "Jumbo Tron 3.2",
        label: "Jumbo Tron 3.2",
        anchor: "/heroes/jumbo-tron.html#jb-3-2"
      },
      {
        value: "Jumbo Tron 4",
        label: "Jumbo Tron 4",
        anchor: "/heroes/jumbo-tron-video.html#jb-4"
      },
      {
        value: "Basic HTML 5 Template",
        label: "Basic HTML 5 Template",
        anchor: "/template-folder/basic-html5.html"
      },
      {
        value: "Cards 1 - 3x1",
        label: "Cards 1 - 3x1 Template",
        anchor: "/cards/cards.html#cd-1"
      },
      {
        value: "Cards 1.2 - 3x1",
        label: "Cards 1.2 - 3x1 Template",
        anchor: "/cards/cards.html#cd-1-2"
      },      ,
      {
        value: "Cards 2 - 3x1 Fullsize",
        label: "Cards 2 - 3x1 Fullsize Template",
        anchor: "/cards/cards.html#cd-2"
      },
      {
        value: "Cards 2.1 - 3x1 Fullsize Initially Hidden Overlay",
        label: "Cards 2.1 - 3x1 Fullsize Initially Hidden Overlay",
        anchor: "/cards/cards.html#cd-2-1"
      },
      {
        value: "Cards 2.2 - 3x1 Fullsize Just Title",
        label: "Cards 2.2 - 3x1 Fullsize Just Title",
        anchor: "/cards/cards.html#cd-2-2"
      },
      {
        value: "Cards 2.3 - 3x1 Fullsize Overlay Swap",
        label: "Cards 2.3 - 3x1 Fullsize Overlay Swap",
        anchor: "/cards/cards.html#cd-2-3"
      },
      {
        value: "Cards 3 - 3x1 Fullsize Inverse",
        label: "Cards 3 - 3x1 Fullsize Inverse",
        anchor: "/cards/cards.html#cd-3"
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
