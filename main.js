$.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (data) {
        
        const source = $('#users-template').html()
        const template = Handlebars.compile(source)

        const newHTML = template({user: data});
        $('#users').append(newHTML);
    },
    error: function (xhr, text, error) {
                    console.log(text);
    }
})
