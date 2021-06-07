var fam_image = ["IMG_3671.JPG",
    "mom3.JPG",
    "IMG_3673",
    "IMG_4109.JPG"
]

var fam_name = ["Vibhor Gupta (My brother)",
    "Parul Singh (My mom)",
    "Amit Gupta (My dad)",
    "Aarohi Gupta (Me)"
]

var f = 0;

function next() {
    f++
    number_of_members = 3;
    if (f > number_of_members) {
        f = 0
    }

    Updated_img = fam_name[f];
    Updated_name = fam_name[f];
    document.getElementById("img_of_member").src = Updated_img;
    document.getElementById("member_name").innerHTML = Updated_name;


}