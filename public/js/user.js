$(document).ready(function() {

    var name = $("#name");
    var email = $("#email");
    var location = $("#location");
    var handle = $("#handle");
    var creatingProfile = $("#creating-profile");

    $(creatingProfile).on("submit", handleFormSubmit);

    var url = window.location.search;
    var UserId;

    var updating = false;

    if (url.indexOf("?user_id=") !== -1) {
        UserId = url.split("=")[1];
        getUserData(UserId, "user");
    }

    getUsers();

    function handleFormSubmit(event) {
        event.preventDefault();

        if(!name.val().trim() || !email.val().trim() || location.val().trim() || handle.val().trim()) {
            return;
        }

        var newUser = {
            name: name.val().trim(),
            email: email.val().trim(),
            handle: handle.val().trim()
        };

        if(updating) {
            newUser.id = UserId;
            updateUser(newUser);
        }
        else {
            submitUser(newUser);
        }
    }

    function submitUser(user) {
        $.post("/api/user", post, function() {
            window.location.href = "/profile";
        });
    }

    function getUserData (id, type) {
        var queryUrl;
        switch(type) {
            case "user":
                queryUrl = "/api/user/" + id;
                break;
            case "handle":
                queryUrl = "/api/user/" + handle;
                break;
                default:
                return;
        }
        $.get(queryUrl, function(data) {
            if(data) {
                console.log(data.UserId || data.id);

                name.val(data.name);
                email.val(data.email);
                UserId = data.UserId || data.id;

                updating = true;
            }
        });
    }

    function getUsers() {
        $.get("/api/user", renderUserList);
    }

    function renderUserList(data) {
        if (!data.length) {
            window.location.href = "/popDestinations";
        }
    }

    function updateUser(user) {
        $.ajax({
            method: "PUT",
            url: "/api/user",
            data: user
        })
        .done(function() {
            window.location.href = "/profile";
        });
    }
});