//sample data
var data = {
    Students: [
    {
        name: "Kyle"
    },
    {
        age: "22"
    },
    {
        phone: "3174444242"
    },
    {
        email: "kmanalo@iu.edu"
    },
    {
        address: "123 West St"
    },
    {
        classes: "N423"
    }

    ],
};

function getStudents() {
    if(localStorage.getItem("studentsArr") === null) {
        //injects sample data incase there is none
        localStorage.setItem("studentsArr", JSON.stringify(data));
    }else {
        //if there is already data the array is set to data and passed to showStudents
        data = JSON.parse(localStorage.getItem("studentsArr"));
        console.log(data.Students);
    }
    showStudents(data.Students);
}

function addStudent() {
    $("#addStudent").click(function () {

        let studentName = $("#name").val()
        let studentAge = $("#age").val()
        let studentPhone = $("#phone").val()
        let studentEmail = $("#email").val()
        let studentAddress = $("#address").val()
        let studentClasses = $("#classes").val()
        console.log("Add clicked")
        //set each value to its key
        data.Students.push({"name":studentName}, {"age":studentAge}, {"phone":studentPhone}, {"email":studentEmail}, {"address":studentAddress}, {"classes":studentClasses});
        //set all the new data to the array
        localStorage.setItem("studentsArr", JSON.stringify(data));

        alert(studentName + " added!")
        
    })
}

function showStudents(studentsArray) {
    $("#showStudents").click(function () {
        //data appears correct in console
        console.log(studentsArray)
        //first 2 of my methods dont seems to work.

        //method 1
        // Values show up as [object, Object]?
        //$(".content").html(Object.values(studentsArray));

        //method 2
        //data is undefined
        // for(i = 0; i <= studentsArray.length; i++) {
            
        //     $(".content").append(`${studentsArray.name}`);
        // }
   
        
        //method 3
        //method 3 is able to get data on page however the page is filled with undefined values. Has something to do with the the indexes
        $.each(studentsArray,function(idx, value) {
            $(".content").append(`${value.name}<br>${value.age}<br>${value.phone}<br>${value.email}<br>${value.address}<br>${value.classes}<br>`);
            
        })
          
    })
}
$(document).ready(function() {
    getStudents();
    addStudent();
    
})
   


