nameOfTheStudentArray = [];

function submit()
{
    var displayStudentArray = [];

    for (var j=1; j<=4; j++)
    {
        var nameOfTheStudent=document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
    }

    console.log(nameOfTheStudentArray);

    var len = nameOfTheStudentArray.length;
    console.log(len);

    for (var k=0; k < len; k++)
    {
        displayStudentArray.push("<h4>NAME -"+ nameOfTheStudentArray[k] + "</h4>");
    }

    
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeComas = displayStudentArray.join(" ");
    console.log(removeComas);
    document.getElementById("displayNakeWithoutCommas").innerHTML = removeComas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
    {
        displayStudentArraySorting.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeComas = displayStudentArraySorting.join(" ");
    console.log(removeComas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeComas;
}