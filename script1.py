start, end = 0, 40
  
# iterating each number in list
for num in range(start, end + 1):
      
    # checking condition
    if num % 2 != 0:
        print(num, end = " ")
        
        
        --------------
        str="L39u37x35P33M31s29o27f25t";
        def splitString(str):
 
    alpha = ""
    num = ""
    
    for i in range(len(str)):
        if (str[i].isdigit()):
            num = num+ str[i]
        elif((str[i] >= 'A' and str[i] <= 'Z') or
             (str[i] >= 'a' and str[i] <= 'z')):
            alpha += str[i]
       
    print(alpha)
    print(num )
    