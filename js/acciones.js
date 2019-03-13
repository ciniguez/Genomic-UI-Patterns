function openPatternPart(partName) {
      var i;
      var x = document.getElementsByClassName('parte');
      console.log(x);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(partName).style.display = "block";
    }