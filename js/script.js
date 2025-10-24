// alert("im connected") 

// =========let========
    // 1.
        //  let x = "Hello World"
        //  console.log(x);
            //  or 
        //  console.log("hello world");
        // result: Hello World 
    
    // 2.
        //  let x = 10
        //  let y = 5
        //  let z = x + y
        //  console.log(z);
        // result: 15 
    
    // 3. 
        // let x = 10
        // let x = 15
        // console.log(x);

        // N.B. it'll show "uncaught syntax error"    
// =========let========

// =========var========
    // 1. 
        // var x =10
        // var x = 5
        // console.log(x);
        // result: 5 

        // N.B. we can use the same variable for multiple times if we use "var"
// =========var========

// =========const======
    // 1. 
       // const pi = 3.1416
       // console.log(pi);
       //    result: 3.1416 
       
       // N.B. we can declare constant variables by using "const"
// =========const======


// =========scope========
    //    it's second bracket {}
    
    // 1. 
        //  {
        //     var x ="Hello World"
        //  }
        //  console.log(x);
        // result: Hello World 
    
    // 2. 
       //   {
       //    let x = "Hello World"
       //   }
       //   console.log(x);

       //   result: x is not defined

    // 3. 
       //  {
       //      let x = "Hello World"
       //      console.log(x);        
       //  }
       
       //    result: Hello World 
       //   N.B. while using let in a scope...we also have to put "cosole.log()" inside the same scope
// =========scope========

// ========== + " " ======== 
    // 1. 
       //  let age = 20
       //  console.log("My age is" +" " + age);
       
       //  result: My age is 20
       //  N.B. the blank one (+" ") is used for giving space

    // 2. 
       //  let name = "Maisha";
       //  let age = "20";
       //  console.log("My name is" +" " +name +".");
       //  console.log("My age is" +" " +age +".");
   
       //  result: My name is Maisha.
       //          My age is 20.

    // 3.(namta) 
       // let x = 5
       // console.log(
       //     x +" " +"X" +" " +"1" +" " +"=" +" " +x*1
       // );
       // console.log(
       //     x +" " +"X" +" " +"2" +" " +"=" +" " +x*2
       // );
       // console.log(
       //     x +" " +"X" +" " +"3" +" " +"=" +" " +x*3
       // );
       // console.log(
       //     x +" " +"X" +" " +"4" +" " +"=" +" " +x*4
       // );
       // console.log(
       //     x +" " +"X" +" " +"5" +" " +"=" +" " +x*5
       // );
       // console.log(
       //     x +" " +"X" +" " +"6" +" " +"=" +" " +x*6
       // );
       // console.log(
       //     x +" " +"X" +" " +"7" +" " +"=" +" " +x*7
       // );
       // console.log(
       //     x +" " +"X" +" " +"8" +" " +"=" +" " +x*8
       // );
       // console.log(
       //     x +" " +"X" +" " +"9" +" " +"=" +" " +x*9
       // );
       // console.log(
       //     x +" " +"X" +" " +"10" +" " +"=" +" " +x*10
       // );
   
       // result: 5 X 1 = 5
       //         5 X 2 = 10
       //         5 X 3 = 15
       //         5 X 4 = 20
       //         5 X 5 = 25
       //         5 X 6 = 30
       //         5 X 7 = 35
       //         5 X 8 = 40
       //         5 X 9 = 45
       //         5 X 10 = 50
    
// ========== + " " ======== 


// =========if/else condition===== 
      let x = 1;
      if (x>0) {
          console.log("condition is true");  
      } 
      else {
          console.log("condition is false");
      }
      
      // result : condition is true
// =========if/else condition===== 