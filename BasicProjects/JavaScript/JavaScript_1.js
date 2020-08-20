function Animal_Function() {
    var Animal_Output;
    var Animal = document.getElementById("Animal_Input").nodeValue;
    var Animal_String = " is a great color!";
    switch(Animal) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Bunny":
            Animal_Output = "Bunny" + Animal_String;
        break;
        case "Fish":
            Animal_Output = "Fish" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as it is written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}