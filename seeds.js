var mongoose = require("mongoose");
var blogSchema = require("./models/schema");

var data = [
  {
    title: "The Sirens of Titan",
    author: "Kurt Vonnegut",
    image: "https://images-na.ssl-images-amazon.com/images/I/7146xazNxtL.jpg",
    desc:
      "The Sirens of Titan is a comic science fiction novel by Kurt Vonnegut, Jr., first published in 1959. His second novel, it involves issues of free will, omniscience, and the overall purpose of human history. Much of the story revolves around a Martian invasion of Earth. The Sirens of Titan largely deals with questions of free will, with multiple characters being stripped of it and the revelation that humanity had been secretly manipulated for millennia for an inane purpose playing major roles in the story. Free will and the lack thereof became major themes in Vonnegut's later novels, especially Slaughterhouse-Five (1969) and Breakfast of Champions (1972). More broadly speaking, lack of agency has been a hallmark of Vonnegut's novels, with the protagonists struggling against forces they can never overcome and often can't comprehend. None of the characters in The Sirens of Titan have chosen to be in their position, but are driven by forces and wills beside their own, and can do no more than try to make the best of it. At the end of the book Constant concluded, A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved."
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    image: "https://images-na.ssl-images-amazon.com/images/I/71HH78NM3PL.jpg",
    desc:
      "The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty."
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51EVK-ibmtL._SX322_BO1,204,203,200_.jpg",
    desc:
      "The title character is Meursault, an indifferent French Algerian described as a citizen of France domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the traditional Mediterranean culture. He attends his mother's funeral. A few days later, he kills an Arab man in French Algiers, who was involved in a conflict with a friend. Meursault is tried and sentenced to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and after the murder, respectively."
  }
];

function seedDB() {
  //Remove all data in database
  blogSchema.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed data!");
    //add data to database
    data.forEach(function(seed) {
      blogSchema.create(seed, function(err, Schema) {
        if (err) {
          console.log(err);
        } else {
          console.log("added data!");
        }
      });
    });
  });
}

module.exports = seedDB;
