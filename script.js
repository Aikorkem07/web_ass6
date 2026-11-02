$(document).ready(function() {

    console.log("jQuery is ready!");

    $("h2").css("color", "#865452");

    $(".eyebrow").css("font-weight", "bold");

    $("#greeting").text("Creative mind. Beauty enthusiast.");

    $("#themeButton").click(function() {
        $("body").toggleClass("dark-theme");

        if ($("body").hasClass("dark-theme")) {
            $(this).text("Light mode");
        } else {
            $(this).text("Dark mode");
        }
    });

    $("#themeButtonLight").click(function() {
        $("body").removeClass("dark-theme");
        $("#themeButton").text("Dark mode");
    });

    $("#themeButtonDark").click(function() {
        $("body").addClass("dark-theme");
        $("#themeButton").text("Light mode");
    });

    $("#hideButton").click(function() {
        $("#statusMessage").hide();
    });

    $("#showButton").click(function() {
        $("#statusMessage").show();
    });

    $("#toggleButton").click(function() {
        $("#statusMessage").toggle();
    });

    $("#fadeInButton").click(function() {
        $(".gallery-image").fadeIn(500);
    });

    $("#fadeOutButton").click(function() {
        $(".gallery-image").fadeOut(500);
    });

    $("#fadeToggleButton").click(function() {
        $(".gallery-image").fadeToggle(500);
    });

    $(".slidePanel").hide();

    $(".journal-heading").after(
        '<div class="journal-controls">' +
        '<button id="showJournal">Show all</button>' +
        '<button id="hideJournal">Hide all</button>' +
        '</div>'
    );

    $(".slideButton").click(function() {
        $(this).next(".slidePanel").slideToggle(400);
    });

    $("#showJournal").click(function() {
        $(".slidePanel").slideDown(400);
    });

    $("#hideJournal").click(function() {
        $(".slidePanel").slideUp(400);
    });

    $("#addSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            let newItem = $("<li>").text(skill);

            $("#skillList").append(newItem);
            $("#skillInput").val("");
            $("#listMessage").text("Skill added successfully!");
        } else {
            $("#listMessage").text("Please enter a skill.");
        }
    });

    $("#prependSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            let newItem = $("<li>").text(skill);

            $("#skillList").prepend(newItem);
            $("#skillInput").val("");
            $("#listMessage").text("Skill added at the beginning!");
        } else {
            $("#listMessage").text("Please enter a skill.");
        }
    });

    $("#removeSkill").click(function() {
        if ($("#skillList li").length > 0) {
            $("#skillList li:last").remove();
            $("#listMessage").text("Last skill removed!");
        } else {
            $("#listMessage").text("The list is empty.");
        }
    });

    $("#changeLink").click(function() {
        $("#brandLink").attr("href", "https://www.instagram.com/");
        $("#brandLink").text("Visit Instagram ↗");
    });

    $("#name").on("input", function() {
        let name = $(this).val();

        $("#namePreview").text("Name: " + name);
    });

    $("#email").on("input", function() {
        let email = $(this).val();

        $("#emailPreview").text("Email: " + email);
    });

    $("#contactForm").submit(function(event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let valid = true;

        $("#formMessage").text("");

        if (name === "") {
            $("#formMessage").text("Please enter your name.");
            valid = false;
        } else if (email === "") {
            $("#formMessage").text("Please enter your email.");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#formMessage").text("Please enter a valid email.");
            valid = false;
        }

        if (valid) {
            $("#formMessage").text("Thank you! Your message has been received.");

            $("#contactForm")[0].reset();

            $("#namePreview").text("Name: —");
            $("#emailPreview").text("Email: —");
        }
    });

    let animationFinished = false;

    $("#animateSkills").click(function() {

        if (animationFinished === false) {

            $(".skill-fill").each(function() {
                let width = $(this).data("width");

                $(this).animate({
                    width: width + "%"
                }, 1000);
            });

            animationFinished = true;
            $(this).text("Reset My Skills");

        } else {

            $(".skill-fill").animate({
                width: "0%"
            }, 1000);

            animationFinished = false;
            $(this).text("Animate My Skills");
        }

    });

});