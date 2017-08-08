$("#submitbtn").on("click", function (event) {

event.preventDefault();

var SearchTerm = $("#searchterm").val().trim();

console.log ("Search Term: " + SearchTerm);


//W3 Schools
var queryURL="https://www.googleapis.com/customsearch/v1?q="+SearchTerm+"&cx=004474692957123199963:djvpgk424qy&key=AIzaSyBmlXlslIssD1zOH_GvxoD0z5UCTqjIGDc"

  $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
          console.log(response);

          for (var i = 0; i < response.items.length; i++) {

          	
          
          var content = "<div id='contentItem'><h1>" + response.items[i].title + "</h1> <a href=" + response.items[i].link + ">"+ response.items[i].link+ "</a>"  + "</h1> <p>Section: "+ response.items[i].snippet + "</p></div>";

          $('#displayResults1').append(content);
      		}

    });
	

//Overstack.com
var query2URL="https://www.googleapis.com/customsearch/v1?q="+SearchTerm+"&cx=004474692957123199963:zwg44jgvva0&key=AIzaSyBmlXlslIssD1zOH_GvxoD0z5UCTqjIGDc"

  $.ajax({
          url: query2URL,
          method: 'GET'
        }).done(function(response2) {
          console.log(response2);

          for (var i = 0; i < response2.items.length; i++) {

          	
          
          var content2 = "<div id='contentItem'><h1>" + response2.items[i].title + "</h1> <a href=" + response2.items[i].link + ">"+ response2.items[i].link+ "</a>"  + "</h1> <p>Section: "+ response2.items[i].snippet + "</p></div>";

          $('#displayResults2').append(content2);
      		}

    });


//Google (Exlcuding W3 Schools, Overstack, YouTube)
var query3URL="https://www.googleapis.com/customsearch/v1?q="+SearchTerm+"&cx=004474692957123199963:jnafc-1ikvc&key=AIzaSyBmlXlslIssD1zOH_GvxoD0z5UCTqjIGDc"

  $.ajax({
          url: query3URL,
          method: 'GET'
        }).done(function(response3) {
          console.log(response3);

          for (var i = 0; i < response3.items.length; i++) {

          	
          
          var content3 = "<div id='contentItem'><h1>" + response3.items[i].title + "</h1> <a href=" + response3.items[i].link + ">"+ response3.items[i].link+ "</a>"  + "</h1> <p>Section: "+ response3.items[i].snippet + "</p></div>";

          $('#displayResults3').append(content3);
      }

    });
    });
