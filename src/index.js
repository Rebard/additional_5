module.exports = function check(str, bracketsConfig) {
  var stack = null, i = 0, count = 0;
  var temp;
  var flag = false;
  while(i < str.length)
  {
	 for(var j = 0; j < bracketsConfig.length; j++)
	 {
		if(str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1])
			{
				count++;
				if(count == 1)
					flag = true;
				if(flag)
				{
					stack.push(str[i]);
					i++;
					flag = false;
				}
				else
				{
					temp = stack.pop();
					if(temp == str[i])
					{
						count -= 2;
						i++;
					}
					else{
						stack.push(temp);
						stack.push(str[i]);
						i++;
					}
				}
				break;
			}
		else{
				if(str[i] == bracketsConfig[j][0])
				{
					stack.push(str[i]);
					i++;
					break;
				}
				if(str[i] == bracketsConfig[j][1])
				{
					if(stack.length == 0)
						return false;
					if(stack.pop() == bracketsConfig[j][0])
					{
						i++;
						break;
					}
					else return false;
				}
			}
	 }
  }
  if(stack.length == 0)
	  return true;
  else return false;
}
