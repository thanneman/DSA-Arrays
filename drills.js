/*
2.
  a. Length 1, Capacity 1, Address 1
  b. Length 6, Capacity 12, Address 3: The capacity is tripling and the memory address is reassigned every time the limit is reached.
3. Length 3, Capacity 12, Address 3: The three last values from the array are removed, but the capacity and address stay the same.
4. It returns 'NaN' for 'tauhida' or any other text, because this array appears unable to store strings.*/

// 5. URLify a string

function urlify(input){
    let urlString = ''
    for(let i = 0; i < input.length; i++){
      if(input[i] === ' '){
        urlString += '%20'
      } else {
        urlString += input[i]
      }
    } return urlString
  }
  
  console.log(urlify('bobby dave.com'))



// 6. Filtering an array

function removeBelowFive(input){
    let newArray = []
    for(let i = 0; i < input.length; i ++){
      if(input[i] >= 5){
        newArray.push(input[i])
      }
    } return newArray
  }
  
  console.log(removeBelowFive([1, 10, 3, 5, 4, 9, 2, 100, -3]))



// 7. Max sum in array

function findMax(input){
    let sum = []
    
    for(let i = 0; i < input.length; i ++){

      for(let j = i; j < input.length; j ++){
        sum[j] += input[j]
      }
      sum.push(input[i])
    }
    console.log(sum)
  }


// 8. Merge arrays

function mergeArrays(firstArray, secondArray){
    let newArray = []
    while(firstArray.length > 0 || secondArray.length > 0){
      if(firstArray[0] <= secondArray[0] || secondArray.length === 0) {
        newArray.push(firstArray.shift())
      } else if (firstArray[0] > secondArray[0] || firstArray.length === 0) {
        newArray.push(secondArray.shift())
      } 
    } return newArray
  }
  
  console.log(mergeArrays([1, 3], [2, 3, 6, 8, 9, 10]))



// 9. Remove characters

function removeChars(input){
    let newString = ''
    for(let i = 0; i < input.length; i ++){
      if(input[i] !=  'a' &&
         input[i] !=  'e' &&
         input[i] !=  'i' &&
         input[i] !=  'o' &&
         input[i] !=  'u') {
        newString += input[i]
      }
    } return newString
  }
  
  console.log(removeChars('My father is a dentist.'))



// 10. Products

function multiplyRest(input){
    let newArray = []
    for(let i = 0; i < input.length; i ++){
      let numbersSet = (input.slice(0, i)).concat(input.slice(i + 1, input.length))
      let product = numbersSet.reduce((total, amount) => total * amount)
      newArray.push(product)
    } return newArray
  }
  
  console.log(multiplyRest([1, 5, 10, 3, 9]))



//11. 2D array

function setZeroes(input){
    let newArray = input
    let changeRows = []
    let changeColumns = []
    for(let i = 0; i < input.length; i ++){
      let zeroIndex = input[i].indexOf(0)
      console.log(zeroIndex)
      if(zeroIndex != -1){
        changeRows.push(i)
      }
      for(let j = 0; j < input[i].length; j ++){
        if(input[i][j] === 0 && !changeColumns.includes(j)){changeColumns.push(j)}
      }} 
    for(let i = 0; i < newArray.length; i++){
      if(changeRows.includes(i)){
        newArray[i].fill(0)
      } else {
        for(let j = 0; j < newArray[i].length; j++){
          if(changeColumns.includes(j)){
            newArray[i][j] = 0
          }}
          }} return newArray
      }
  
  console.log(setZeroes([[1,0,1,1,0],[0,1,1,1,0],[1,1,1,1,1],[1,0,1,1,1],[1,1,1,1,1]]))



//12. String rotation

function stringRotator(string1, string2){
    let baseString = string1.split('')
    let checkString = string2.split('')
    
    if (baseString.length !== checkString.length){
      return false
    }
    
    for(let i = 0; i < string1.length; i++){
      let check =  baseString.indexOf(checkString[i])
      if(check === -1){return false}
      baseString.splice(check, 1)
    }
    
    return true    
  }
  
  console.log(stringRotator('llama', 'alalm'))