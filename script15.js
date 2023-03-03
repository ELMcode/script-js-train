const grades = [91, 66, 77, 84];


function searchGrade(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] > 70) {
        return "**" + grades[i] + "**";
      } else {
        return grades[i];
      }
    }
   }
   searchGrade(grades);