import axios from "axios";

export default {
    getBooks: function () {
        var parameter = "&filter=ebooks&orderBy=relevance&";
        // var userInput = "";
        var queryURL =
            "https://www.googleapis.com/books/v1/volumes?q=" +
            userInput +
            parameter +
            ":keyes&key=AIzaSyBaLr5TPsFewkitZXad_5_EaTeCT35K9No";

        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.items;

            for (var i = 0; i < results.length; i++) {
                booksArr.push(results[i]);
            };
        });
    }
};
