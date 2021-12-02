

$("#add_user").submit(function(event){
    alert("Data Inserted Successfuly!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();
    let data = {};

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data);

    let request = {
        "url": "http://localhost:3000/api/users/" + data.id,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Update Successfully!");
    })
})

if(window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id");

        let request = {
            "url": "http://localhost:3000/api/users/" + id,
            "method": "DELETE"
        }

        if(confirm("Apa Lu Tega Mau Hapus Ini ?")){
            $.ajax(request).done(function(response){
                alert("Yah Ke Hapus");
                location.reload()
            })
        }

    })
}