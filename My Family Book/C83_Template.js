var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg"];

var names = ["Family Book", "Shyam Devchoudhury - Father", "Navanita Dutta - Mother", "Rishaan Devchoudhury - Son"];

var age = [46, 46, 43, 11]

age.sort();

age.reverse();

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    var max_number = Math.max.apply(Math, age)
    console.log("The highest age is: ", max_number)

    var min_number = Math.min.apply(Math, age)
    console.log("The lowest age is: ", min_number)
}